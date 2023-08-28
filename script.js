
    // Array of promises
   window.promises = [
      new Promise((resolve) => setTimeout(() => resolve('Promise 1 resolved'), getRandomTime())),
      new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved'), getRandomTime())),
      new Promise((resolve) => setTimeout(() => resolve('Promise 3 resolved'), getRandomTime())),
      new Promise((resolve) => setTimeout(() => resolve('Promise 4 resolved'), getRandomTime())),
      new Promise((resolve) => setTimeout(() => resolve('Promise 5 resolved'), getRandomTime())),
    ];

    // Use Promise.any() to wait for the first promise to resolve
    Promise.any(promises)
      .then((result) => {
        const outputDiv = document.getElementById('output');
        outputDiv.textContent = result;
      })
      .catch((error) => {
        console.error('All promises rejected:', error);
      });
 