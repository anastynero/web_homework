let time = prompt('Введите время');

let goToDairy = false;
let goToStore = false;
let goToMarket = false;

if (time >= 8 && time < 19 && time != 13) {
  goToDairy = true;
  alert('Фабрика');
} else if (time >=9 && time < 17 && time != 14) {
    goToStore = true;
    alert('Магазин');  
  } else if (time >= 7 && time < 20) {
      goToMarket = true;
      alert('Рынок');
    }
