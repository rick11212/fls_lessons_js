// ====================task-1====================================================================================================================================

// Ввод данных
const price1 = parseFloat(prompt("Введите стоимость товара", "0$"));
const quantity1 = parseInt(prompt("Введите количество товара", "1"));

const price2 = parseFloat(prompt("Введите стоимость товара", "0$"));
const quantity2 = parseInt(prompt("Введите количество товара", "1"));

const price3 = parseFloat(prompt("Введите стоимость товара", "0$"));
const quantity3 = parseInt(prompt("Введите количество товара", "1"));

// Выражение №1
const totalPrice1 = price1 * quantity1;
const totalPrice2 = price2 * quantity2;
const totalPrice3 = price3 * quantity3;
const totalPrice = totalPrice1 + totalPrice2 + totalPrice3;

// Вывод данных
document.getElementById("totalPrice").innerHTML = totalPrice;
document.getElementById("totalPrice1").innerHTML = totalPrice1;
document.getElementById("totalPrice2").innerHTML = totalPrice2;
document.getElementById("totalPrice3").innerHTML = totalPrice3;

document.getElementById("price1").innerHTML = price1;
document.getElementById("quantity1").innerHTML = quantity1;

document.getElementById("price2").innerHTML = price2;
document.getElementById("quantity2").innerHTML = quantity2;

document.getElementById("price3").innerHTML = price3;
document.getElementById("quantity3").innerHTML = quantity3;
