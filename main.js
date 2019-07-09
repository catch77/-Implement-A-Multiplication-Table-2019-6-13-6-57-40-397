function createMutipliedTableByBounds (number1, number2) {
    return createMutipliedTable(isNumber1BiggerNumber2(number1, number2), isTheNumbersValid(number1, number2), number1, number2);
}

function isNumber1BiggerNumber2(number1, number2) {
    return number1 > number2 ? true : false;
}

function isTheNumbersValid(number1, number2) {
    if(number1 >= 1 && number1 <= 1000 && number2 >= 1 && number2 <= 1000) 
        return true;
    return false;
}

function createMutipliedTable (bool1, bool2, number1, number2) {
    if(bool1)
        return null;
    if(!bool2)
        return "out of Range";
        var result = "";
    for(var i=number1; i<=number2; i++) {
        for(var j=number1; j<=i; j++) {
            result = result + j + "x" + i + "=" + i*j + "\t";
        }
        result = result + '\n';
    }
    console.log(result)
    return result;
}

// module.exports = isTheNumbersValid;
module.exports = {
    isTheNumbersValid,
    isNumber1BiggerNumber2,
    createMutipliedTable,
    createMutipliedTableByBounds};