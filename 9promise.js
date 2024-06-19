let promise = new Promise((resolve, reject) => {
    let x = 10;
    let y = 20;

    if (x + y === 30) {
        resolve('Promise resolved successfully!');
    } else {
        reject('Promise rejected.');
    }
});

promise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
});
