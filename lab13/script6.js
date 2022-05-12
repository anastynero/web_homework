const getData = function(keysArray, arrayOfDataArrays) {
  let array = [];
  for (let i = 0; i < arrayOfDataArrays.length; i++) {
    let obj = {};
    for (let j = 0; j < keysArray.length; j++) {
      if (arrayOfDataArrays[i][j]){
      obj[keysArray[j]] = arrayOfDataArrays[i][j];
      }
    }
    array.push(obj);
  }
  return array;
}
console.log(getData(
['имя', 'любимый цвет', 'любимое блюдо'], 
[
 ['Василий', 'красный', 'борщ'],
 ['Мария'],
 ['Иннокентий', 'жёлтый', 'пельмени', '18', 'Азовское']
]
))