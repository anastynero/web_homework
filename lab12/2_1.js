let temperature = prompt();
let itsRaining = false;
let minutes;

if (itsRaining) {
minutes=0;
}
else if (temperature < 0 && temperature > 35) {
minutes = 0;
console.log(minutes);
}
else if (temperature = 20) {
minutes = 20;
console.log(minutes);
}
else if (temperature > 0 && temperature < 20) {
minutes = temperature;
console.log(minutes);
}
else {
minutes = 20 - (temperature - 20);
console.log(minutes);
}
