// Create an array of five promises
for (let i = 0; i < 5; i++) {
  window.promises.push(new Promise((resolve, reject) => {
    const randomTime = Math.floor(Math.random() * 5) + 1; // Random time between 1 and 5 seconds
    setTimeout(() => {
      resolve(randomTime); // Resolve the promise with the random time
    }, randomTime * 1000); // Convert the time to milliseconds
  }));
}

// Wait for the first promise to resolve using Promise.any()
Promise.any(window.promises)
  .then(result => {
    document.getElementById("output").innerHTML = `The first promise resolved with ${result} seconds.`;
  })
  .catch(error => {
    console.error(error);
  });
