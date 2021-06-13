// const firstClass = document.getElementById("first-class").value;
// const firstClassNum = parseInt(firstClass);
// console.log(firstClassNum);



function getValue(whichClass) {
    const ticketAmount = document.getElementById(whichClass + "-class");
    const ticketAmountNum = parseInt(ticketAmount.value);
    return ticketAmountNum;
}


function getElement(voucherClass) {
    const element = document.getElementById(voucherClass);
    return element;
}

function calculate() {
    const firstClass = getValue("first");
    const economyClass = getValue("economy");

    const total = firstClass * 150 + economyClass * 100;
    const subtotal = getElement("subtotal");
    subtotal.innerText = total;

    const vat = total * 0.1;
    const vatCharge = getElement("vat-charge");
    vatCharge.innerText = vat;

    const grandTotal = vat + total;
    const grandTotalId = getElement("grand-total");
    grandTotalId.innerText = grandTotal;

}

function increase(firstOrEconomy, isIncrease) {
    let ticketAmountNum = getValue(firstOrEconomy);
    if (isIncrease == 'plus') {
        ticketAmountNum++;

    } else if (isIncrease == "minus" && ticketAmountNum > 0) {
        ticketAmountNum--;
    }
    document.getElementById(firstOrEconomy + "-class").value = ticketAmountNum;
    calculate();
}


// booking btn
document.getElementById("booking-btn").addEventListener("click", function() {
    getElement("booking-form").setAttribute("class", "slide-left booking-form");
    getElement("booking-content").setAttribute("class", "slide-right booking-content");
    getElement("header").style.display = "none";
    getElement("ticket").setAttribute("class", "default");
    getElement("ticket-inner").setAttribute("class", "change-position content");
    getElement("ticket").style.backdropFilter = "blur(10px)";
})