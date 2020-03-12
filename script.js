var row = parseInt(prompt('Please enter a number'));
var column = parseInt(prompt('Please enter a number'));


createTable(row, column);


function createTable(row = 1, column = 1) {

    if (row > 0 && column > 0) {
        let tableHeader = '';


        tableHeader += '<tr>'
        for (i = 0; i <= row; i++) {
            tableHeader += '<td>' + i + '</td>'
        }
        tableHeader += '</tr>'

        let tableBody = '';

        for (r = 1; r <= column; r++) {

            tableBody += '<tr>'
            tableBody += '<td>' + r + '</td>'

            for (i = 1; i <= row; i++) {
                tableBody += '<td>' + i * r + '</td>'
            }

            tableBody += '</tr>'
        }
        document.write(`<table border> ${tableHeader,tableBody} </table>`);
    } else {
        if (row <= 0 || column <= 0) {
            let row = prompt(`Try again - Please enter a new number`);
            let column = prompt(`Please enter one more number`);
            createTable(row, column);
        }


    }
}