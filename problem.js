


multiplicationTable(10);

function multiplicationTable(n) {
    for (var i = 1; i <= 10; i++) {
        var row = n + " * " + i + " = " + n * i;
        console.log(row);
    }
}
