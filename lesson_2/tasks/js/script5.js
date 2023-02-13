// ====================task-1====================================================================================================================================

// Ввод данных
const inpSec = parseFloat(prompt("Введите количество секунд", "1"));

// Выражение №1
const hr = (inpSec / 3600).toFixed(2);
const min = (inpSec / 60).toFixed(2);

// Вывод данных
document.getElementById("hr").innerHTML = hr;
document.getElementById("min").innerHTML = min;

document.getElementById("inpSec").innerHTML = inpSec;
