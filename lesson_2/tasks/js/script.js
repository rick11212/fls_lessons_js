// ====================task-1====================================================================================================================================

// Ввод данных
const introductionNumberA = parseFloat(prompt("Введите число 'A'", "0"));
const introductionNumberB = parseFloat(prompt("Введите число 'B'", "0"));
const introductionNumberC = parseFloat(prompt("Введите число 'C'", "0"));

// Выражение №1
const sum1 = (introductionNumberA + 12 + introductionNumberB).toFixed(2);
// Выражение №2
const sum2 = Math.sqrt(
	(introductionNumberA + introductionNumberB) / (2 * introductionNumberA)
).toFixed(2);
// Выражение №3
const sum3 = Math.cbrt(
	(introductionNumberA + introductionNumberB) * introductionNumberC
).toFixed(2);
// Выражение №4
const sum4 = Math.sin(introductionNumberA / -introductionNumberB).toFixed(2);

// Вывод данных
document.getElementById("numberA").innerHTML = introductionNumberA;
document.getElementById("numberB").innerHTML = introductionNumberB;
document.getElementById("numberC").innerHTML = introductionNumberC;

document.getElementById("sum1").innerHTML = sum1;
document.getElementById("sum2").innerHTML = sum2;
document.getElementById("sum3").innerHTML = sum3;
document.getElementById("sum4").innerHTML = sum4;
