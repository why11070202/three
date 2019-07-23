var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'why'
});

//建立池连接
const getConnection = () => {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
                throw err;
            } else {
                resolve(connection);
            }
        })
    })
}

//执行sql语句
const query = (connection, sql, params) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, [params ? params : ''], (error, results, fields) => {
            connection.release();
            if (error) {
                reject(error);
                throw error;
            } else {
                resolve(results);
            };
        })
    })
}

const find = async (db, params1, params2, callback) => {
    let connection = await getConnection();
    //判断参数是否存在

    let results = await new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${db}  WHERE ? AND ?`, [{
            ...params1
        }, {
            ...params2
        }], (err, results, fields) => {
            !err ? resolve(results) : reject(err)
            connection.release();
        })
    })
    // let results = await query(connection, `SELECT * FROM ${db} where ?`, params); //按条件查找
    callback(results);

}

// find('users', null, (results) => {
//     console.log(results);
// })


const add = async (db, params, callback) => {
    let connection = await getConnection();
    //判断参数是否存在
    let results = await query(connection, `INSERT INTO  ${db} SET?`, params);
    callback(results)
}

const del = async (db, params, callback) => {
    let connection = await getConnection();
    //判断参数是否存在
    let results = await query(connection, `DELETE FROM ${db} WHERE?`, params);
    callback(results)
}

const change = async (db, params1, params2, callback) => {
    let connection = await getConnection();
    //判断参数是否存在
    return await new Promise((resolve, reject) => {
        connection.query(`UPDATE ${db} SET ? WHERE ?`, [{
            ...params1
        }, {
            ...params2
        }], (err, results, fields) => {
            !err ? resolve(results) : reject(err)
            connection.release();
        })

    })
}
module.exports = {
    find,
    add,
    del,
    change
}