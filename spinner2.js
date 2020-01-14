let output = ['|','/','-','\\','|','/','-','\\'];
output.forEach((element, index) => {
  setTimeout(() => {
    process.stdout.write(`\r${element}   `);
  }, 100 * index);
});