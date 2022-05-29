let lastNumber = prompt();
let multiplicationResult = 1;
for (let i = 1; i <= lastNumber; i++) {
    if (i % 2 === 0) {
      multiplicationResult *= i;
      alert(multiplicationResult);
      } 
  }
