let getSortedArray = function (mass, key) {
for (let i = 0; i < mass.length - 1; i++) {
for (let j = i + 1; j < mass.length; j++) {
if (mass[i][key] > mass[j][key]) {
let swap = mass[i];
mass[i] = mass[j];
mass[j] = swap;
}
}
}
return mass;
}
