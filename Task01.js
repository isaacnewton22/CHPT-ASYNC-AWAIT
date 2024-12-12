async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

// Example usage:
iterateWithAsyncAwait(['apple', 'banana', 'cherry']);
