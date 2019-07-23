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

(async () => {
    console.log('开始');
    await step();
    await step2();
    await step3();
    await step4();
    console.log('结束');
})()