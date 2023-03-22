


multiplicationTable(10);

function multiplicationTable(num) {
    for (var i = 1; i <= 10; i++) {
        var row = num + " * " + i + " = " + num * i;
        console.log(row);
    }
}
