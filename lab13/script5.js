var getSortedArray = function (mass, key) {
for (var i = 0; i < mass.length - 1; i++) {
for (var j = i + 1; j < mass.length; j++) {
if (mass[i][key] > mass[j][key]) {
var swap = mass[i];
mass[i] = mass[j];
mass[j] = swap;
}
}
}
return mass;
}