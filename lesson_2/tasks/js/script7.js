// ====================task-1====================================================================================================================================

// Ввод данных
let mounthMin = 1;
let mounthMax = 12;

let dayMin = 0;
let dayMax = 6;

// Выражение №1
let mounth =
	mounthMin + Math.floor(Math.random() * (mounthMax - mounthMin + 1));
let day = dayMin + Math.floor(Math.random() * (dayMax - dayMin + 1));
let sum = mounth + day;

// Вывод данных
document.getElementById("sum").innerHTML = sum;

document.getElementById("mounth").innerHTML = mounth;
document.getElementById("day").innerHTML = day;
