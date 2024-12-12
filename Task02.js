async function firstAsyncFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('First function completed');
}

async function secondAsyncFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Second function completed');
}

async function thirdAsyncFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Third function completed');
}

async function chainedAsyncFunctions() {
    await firstAsyncFunction();
    await secondAsyncFunction();
    await thirdAsyncFunction();
}

// Example usage:
chainedAsyncFunctions();
