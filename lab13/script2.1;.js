let number = 0;
let lastIndex = -1
let numbers = [1, 2, 0, 8, 0]
for (let i = numbers.length - 1; i >=0; i--)
{
  if (numbers[i] === number){
    lastIndex = i;
    break;
  }
}
alert(lastIndex)
