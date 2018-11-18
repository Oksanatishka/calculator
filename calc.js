var number1 = '';
var negative_number1 = false;
var number2 = '';
var result;
var operation = '';

function display(value) {
    $('#display').val(value);
}

function calc() {
    if (operation == '+') {
        result = Number(number1) + Number(number2);
    }
    if (operation == '-') {
        result = Number(number1) - Number(number2);
    }
    if (operation == '*') {
        result = Number(number1) * Number(number2);
    }
    if (operation == '/') {
        result = Number(number1) / Number(number2);
    }
    number1 = result;
    number2 = '';
    display(result);
}

$(
    '#button0, #button1, #button2, #button3, #button4, #button5, #button6, #button7, #button8, #button9'
).click(function() {
    if (operation == '') {
        number1 = number1 + $(this).val();
        if (negative_number1 === true) {
            display('-' + number1);
        } else {
            display(number1);
        }
    } else if (operation != '' && number1 != '') {
        display('');
        number2 = number2 + $(this).val();
        display(number2);
    }
});

$('#addButton').click(function() {
    if (number1 != '' && number2 != '') {
        calc();
    }
    operation = '+';
});

$('#subtractButton').click(function() {
    if (number1 != '' && number2 != '') {
        calc();
    }
    if (number1 === '') {
        negative_number1 = true;
    } else {
        operation = '-';
        negative_number1 = false;
    }
});

$('#multiplyButton').click(function() {
    if (number1 != '' && number2 != '') {
        calc();
    }
    operation = '*';
});

$('#divideButton').click(function() {
    if (number1 != '' && number2 != '') {
        calc();
    }
    operation = '/';
});

// .val('') - set the value
// .val() - get the value

$('#clearButton').click(function() {
    display('');
    number1 = '';
    number2 = '';
    operation = '';
    result = undefined;
});

$('#equalsButton').click(function() {
    if (negative_number1 === true) {
        number1 = Number(number1) * -1;
    }
    calc();
});
