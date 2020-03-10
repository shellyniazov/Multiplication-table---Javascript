let More;
let first = 5;
let second = 8;


More = multiplyNum(first, second);

function multiplyNum(Num1, Num2) {
    document.write('<table>');


    document.write('<tr>')
    for (i = 0; i <= Num1; i++) {
        document.write('<td>' + i + '</td>')
    }




    for (r = 1; r <= Num2; r++) {
        document.write('<tr>')
        document.write('<td>' + r + '</td>')

        for (i = 1; i <= Num1; i++) {
            document.write('<td>' + i * r + '</td>')
        }

        document.write('</tr>')
    }
    document.write('</table>');
}