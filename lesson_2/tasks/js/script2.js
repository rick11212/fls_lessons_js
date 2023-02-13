// ====================task-1====================================================================================================================================

// Ввод данных
const birthday = 1;
const thisYear = new Date();
const birthYear = parseInt(prompt("Введите год рождения", "2000"));

// Выражение №1
const year = thisYear.getFullYear();
const age = year - birthYear;

// Вывод данных
document.getElementById("age").innerHTML = age;

document.getElementById("birthYear").innerHTML = birthYear;
