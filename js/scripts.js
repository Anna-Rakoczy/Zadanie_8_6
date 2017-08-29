var a = 1,
    b = -10,
    value;

value = (a * a) + (2 * a * b) - (b * b);

if (value > 0) {
 console.log("Wynik jest większy od zera: " + value);
}
else if (value < 0) {
 console.log("Wynik jest mniejszy od zera: " + value);
}
else {
 console.log("Wynik wynosi zero: " + value);
}