window.promises = [];

// add your promises to the array `promises`
for (let i = 0; i < 5; i++) {
  promises.push(
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Promise ${i+1}`);
      }, Math.floor(Math.random() * 5000) + 1000);
    })
  );
}

Promise.any(promises)
  .then((result) => {
    document.getElementById("output").textContent = result;
  })
  .catch((error) => {
    console.error(error);
  });
