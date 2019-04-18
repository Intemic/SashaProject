var OPERATION_MULTIPLICATE = 'M'; //1;
var OPERATION_DIVISION = 'D'; //2;
var OPERATION_ADDITION = 'A'; //3;
var OPERATION_SUBTRACTION = 'S'; //= 4;
var OPERATION_WORDS = 'W';

// генерим два случайных числа
function getDititals(operation) {
    var digitalOne;
    var digitalTwo;

    //alert(operation);

    switch (operation) {

        // операция умножения
        case OPERATION_MULTIPLICATE :
            // получаем целое число между 1 и 10
            digitalOne = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
            digitalTwo = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
            return [digitalOne, digitalTwo];
            break;


            // операция деления
        case OPERATION_DIVISION :
            //alert("Division");
            digitalOne = 0;
            // ищем делитель
            digitalTwo = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
            // будем выполнять до тех пор пока не найдем число большее
            // делителя и которое делется нацело
            //while (digitalTwo > digitalTwo) {
            for (; ; ) {
                // нужно двухзначное число
                digitalOne = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
                //alert(digitalOne);
                if ((digitalOne > digitalTwo) && (digitalOne % digitalTwo) == 0) {
                    return [digitalOne, digitalTwo];
                }
            }
            break;


            // операция сложения
        case OPERATION_ADDITION :
            digitalOne = Math.floor(Math.random() * (999 - 1 + 1)) + 1;
            digitalTwo = Math.floor(Math.random() * (999 - 1 + 1)) + 1;
            return [digitalOne, digitalTwo];
            break;

            // операция вычитания
        case OPERATION_SUBTRACTION :
            digitalOne = 0;
            // ищем первое число
            digitalTwo = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
            // будем выполнять до тех пор пока не найдем большее число
            while (digitalOne < digitalTwo) {
                // нужно двухзначное число
                digitalOne = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
            }
            return [digitalOne, digitalTwo];
            break;

        case OPERATION_WORDS :
            return [digitalOne, digitalTwo];
            break;
    }
}

// формаатируем для вывода
function format_string(digitalOne, digitalTwo, operation) {
    var symbol;

    switch (operation) {
        case OPERATION_MULTIPLICATE :
            symbol = '*';
            break;
        case OPERATION_DIVISION :
            symbol = ':';
            break;
        case OPERATION_ADDITION :
            symbol = '+';
            break;
        case OPERATION_SUBTRACTION :
            symbol = '-';
            break;
        case OPERATION_WORDS :
            symbol = ' ';
            break;
    }

    return digitalOne + " " + symbol + " " + digitalTwo + " = ";
}


function calculate(digitalOne, digitalTwo, operation) {
    switch (operation) {
        case OPERATION_MULTIPLICATE :
            return digitalOne * digitalTwo;
            break;
        case OPERATION_DIVISION :
            return digitalOne / digitalTwo;
            break;
        case OPERATION_ADDITION :
            return digitalOne + digitalTwo;
            break;
        case OPERATION_SUBTRACTION :
            return digitalOne - digitalTwo;
            break;
        case OPERATION_WORDS :
            return 0;
            break;
    }
}

function getHeadText(operation){
    var textValue;

    switch (operation) {
        case OPERATION_MULTIPLICATE :
            textValue = "Табличное умножение";
            break;
        case OPERATION_DIVISION :
            textValue = "Деление";
            break;
        case OPERATION_ADDITION :
            textValue = "Сложение";
            break;
        case OPERATION_SUBTRACTION :
            textValue = "Вычитание";
            break;
        case OPERATION_WORDS :
            textValue = 'Словарные слова';
            break;
    }

    return textValue;
}

function getTextOperation(operation){
    var textValue;

    switch (operation) {
        case OPERATION_MULTIPLICATE :
            //textValue = "Данный раздел предназначен для оценки навыков школьников, применяемых при операциях табличного умножения";
            textValue = "Проверь свою память, проверь насколько хорошо помнишь таблицу умножения?";
            break;
        case OPERATION_DIVISION :
            //textValue = " Данный раздел предназначен для оценки навыков школьников, применяемых при операции деления";
            textValue = "Испытай свои навыки, приобретенный на уроке для решения примеров";
            break;
        case OPERATION_ADDITION :
            //"textValue = "Данный раздел предназначен для оценки навыков школьников, применяемых при операции сложения";
            textValue = "Используй известные тебе свойства сложения для выполнения задания";
            break;
        case OPERATION_SUBTRACTION :
            //textValue = "Данный раздел предназначен для оценки навыков школьников, применяемых при операции вычитания";
            textValue = "Испытай себя, проверив сможешь ли ты справиться с вычитанием?";
            break;
        case OPERATION_WORDS :
            textValue = 'Проверь себя на знание словарных слов';
            break;

    }

    return textValue;
}
