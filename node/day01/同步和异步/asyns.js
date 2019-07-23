// 传统方法
var step = () => {
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            console.log(1);
            resolved();
        }, 1000)
    })
}
var step2 = () => {
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            console.log(2);
            resolved();

        }, 1000)
    })
}
var step3 = () => {
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            console.log(3);
            resolved();

        }, 1000)
    })
}
var step4 = () => {
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            console.log(4);
            resolved();
        }, 1000)
    })
}

step().then(step2).then(step3).then(step4);