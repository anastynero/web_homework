let temperature = prompt();
let isRaining = false;
let minutes = 0;

if ((10 <= temperature && temperature < 15) && !isRaining) {
  minutes = 30;
  alert(minutes);
} 
else if ((15<= temperature && temperature < 25) && !isRaining){
  minutes = 40;
  alert(minutes);
} 
else if ((25<= temperature && temperature <= 35) && !isRaining){
  minutes = 20;
  alert(minutes);
}
