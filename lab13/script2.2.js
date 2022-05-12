let numbers = [1, 3, 17, 90, 10, 5, 8, 99];
for (let i = 0; i <= numbers.length - 2; i++) {
 let minValue = numbers[i];
 for (let j = i + 1; j <= numbers.length - 1; j++) {
 if (numbers[j] < minValue) {
 minValue = numbers[j];
 let swap = numbers[i];
 numbers[i] = minValue;
 numbers[j] = swap;
 }
 }
}
console.log(numbers);