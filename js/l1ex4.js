var r = prompt("Введите радиус цилиндра: ", "5");
var h = prompt("Введите высоту цилиндра: ", "10");
Area(r,h);

function Area (r,h) {
    document.writeln("Обьем цилиндра = " + (3.14 * r * r * h).toFixed(2) + "</br>")
    document.writeln("Площадь цилиндра = " + (2 * 3.14 * r * (r + h)).toFixed(2) + "</br>")
}