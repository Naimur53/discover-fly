// const firstClass = document.getElementById("first-class").value;
// const firstClassNum = parseInt(firstClass);
// console.log(firstClassNum);


function increase(firstOrEconomy, isIncrease) {
    let ticketAmountNum = getValue(firstOrEconomy);
    if (isIncrease == 'plus') {
        ticketAmountNum++;

    } else if (isIncrease == "minus" && ticketAmountNum > 0) {
        ticketAmountNum--;
    }
    document.getElementById(firstOrEconomy + "-class").value = ticketAmountNum;
}

function getValue(whichClass) {
    const ticketAmount = document.getElementById(whichClass + "-class");
    const ticketAmountNum = parseInt(ticketAmount.value);
    return ticketAmountNum;
}