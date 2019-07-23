const {
    find,
    add,
    del,
    change
} = require('./mysql');

// find('users', null, (results) => {
//     console.log(results);
//     // res.send(JSON.stringify(results));
// });

// add('users', {
//     username: 'why',
//     password: '12345'
// }, (results) => {
//     console.log(results);
//     // res.send(JSON.stringify(results));
// });

// del('users', {
//     username: 'vsq',
// }, (results) => {
//     console.log(results);
//     // res.send(JSON.stringify(results));
// });

change('users', {
    password: '123456789',
}, {
    username: 'why'
});