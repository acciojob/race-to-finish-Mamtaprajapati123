window.promises = [];

// Add promises to the array
for (let i = 1; i <= 5; i++) {
  const promise = new Promise(resolve => {
    const randomTime = Math.floor(Math.random() * 5) + 1; // random time between 1 and 5 seconds
    setTimeout(() => {
      resolve(randomTime);
    }, randomTime * 1000); // convert seconds to milliseconds
  });
  promises.push(promise);
}

// Use Promise.any() to wait for the first promise to resolve
Promise.any(promises).then(result => {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `The first promise to resolve took ${result} seconds.`;
});
