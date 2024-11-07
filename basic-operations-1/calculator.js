function calculator (number1, number2, operator){
    const operators = ['+','-','*','/']
    if(!operators.includes(operator)) throw new Error("Invalid operator")
    return eval(number1 + operator + number2 )
}

console.log(calculator(1,2,'/'))