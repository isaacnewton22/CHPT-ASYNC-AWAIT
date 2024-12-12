async function mockFetch(url) {
    // Simulate an API call with a delay
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Data from ${url}`);
        }, 1000);
    });
}

async function concurrentRequests() {
    const url1 = 'https://api.example.com/data1';
    const url2 = 'https://api.example.com/data2';

    try {
        const [response1, response2] = await Promise.all([mockFetch(url1), mockFetch(url2)]);
        console.log('Combined results:', response1, response2);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Example usage:
concurrentRequests();
