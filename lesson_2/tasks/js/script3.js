// ====================task-1====================================================================================================================================

// Ввод данных
const price = parseFloat(prompt("Введите стоимость товара", "0$"));
const quantity = parseInt(prompt("Введите количество товара", "1"));

// Выражение №1
const totalPrice = price * quantity;
const nds = price * quantity * (5 / 100);
const totalPriceWithNds = totalPrice + nds;

// Вывод данных
document.getElementById("totalPrice").innerHTML = totalPrice;
document.getElementById("nds").innerHTML = nds;
document.getElementById("totalPriceWithNds").innerHTML = totalPriceWithNds;

document.getElementById("price").innerHTML = price;
document.getElementById("quantity").innerHTML = quantity;
