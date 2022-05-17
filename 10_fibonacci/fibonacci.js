function fibonacci(num) {
    if (num < 0) return 'OOPS';
    // my solution
	// const fib = [1,1];
    // for (let i = 0; i < num-2; i++) {
    //     fib.push(fib[i]+fib[i+1]);
    // }
    // return fib[num-1]

    // https://javascript.info/task/fibonacci-numbers
    let a = 1;
    let b = 1;
    for (let i = 3; i <= num; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
}

// Do not edit below this line
module.exports = fibonacci;
