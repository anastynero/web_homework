var number = 0;
var lastIndex = -1
var numbers = [1, 2, 0, 8, 0]
for (var i = numbers.length - 1; i >=0; i--)
{
  if (numbers[i] === number){
    lastIndex = i;
    break;
  }
}
alert(lastIndex)