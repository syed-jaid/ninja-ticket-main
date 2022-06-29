// plus function 
const FirstInputvalue = document.getElementById('first-class-value')
const EconomyInputvalue = document.getElementById('economy-class-value')
const Subtotal = document.getElementById('Subtotal');
const Tax = document.getElementById('tax')
const Total = document.getElementById('total')

function PlusButton(params) {
    if (params === 'first') {
        const showFirstInputValue = parseFloat(FirstInputvalue.value) + 1;
        FirstInputvalue.value = showFirstInputValue;

        const EconomyValue = EconomyInputvalue.value;
        const showSubtotal = parseInt(showFirstInputValue) * 150 + parseFloat(EconomyValue) * 100;
        Subtotal.innerText = showSubtotal;
        const totulTax = showSubtotal / 10;
        Tax.innerText = totulTax
        Total.innerText = showSubtotal + totulTax;
    }

    if (params === 'economy') {
        const showEconomyInputValue = parseFloat(EconomyInputvalue.value) + 1;
        EconomyInputvalue.value = showEconomyInputValue;
        const FirstValue = FirstInputvalue.value;
        const showSubtotal = parseFloat(showEconomyInputValue) * 100 + parseFloat(FirstValue) * 150;
        Subtotal.innerText = showSubtotal;
        const totulTax = showSubtotal / 10;
        Tax.innerText = totulTax
        Total.innerText = showSubtotal + totulTax;
    }

}

// minus function

function MinusButton(params) {
    if (params === 'first') {
        if (parseFloat(FirstInputvalue.value) > 0) {
            const showFirstInputValue = parseFloat(FirstInputvalue.value) - 1;
            FirstInputvalue.value = showFirstInputValue;
            const EconomyValue = EconomyInputvalue.value;
            const showSubtotal = parseInt(showFirstInputValue) * 150 + parseFloat(EconomyValue) * 100;
            Subtotal.innerText = showSubtotal;
            const totulTax = showSubtotal / 10;
            Tax.innerText = totulTax
            Total.innerText = showSubtotal + totulTax;
        }
    }

    if (params === 'economy') {
        if (parseFloat(EconomyInputvalue.value) > 0) {
            const showEconomyInputValue = parseFloat(EconomyInputvalue.value) - 1;
            EconomyInputvalue.value = showEconomyInputValue;
            const FirstValue = FirstInputvalue.value;
            const showSubtotal = parseFloat(showEconomyInputValue) * 100 + parseFloat(FirstValue) * 150;
            Subtotal.innerText = showSubtotal;
            const totulTax = showSubtotal / 10;
            Tax.innerText = totulTax
            Total.innerText = showSubtotal + totulTax;
        }
    }

}

function BookNow() {

    if (Total.innerText !== '0') {
        const ok = confirm(` 
        ${FirstInputvalue.value} First Class Piece and ${EconomyInputvalue.value} Economy class Piece.
        Subtotul is ${Subtotal.innerText} 
        Tax is ${Tax.innerText}
        The main Total is ${Total.innerText}
        Do you want to confirm the booking !
        `)

        if (ok) {
            alert('Thank you, Sir')
            FirstInputvalue.value = 0;
            EconomyInputvalue.value = 0;
            Subtotal.innerText = 0;
            Tax.innerText = 0;
            Total.innerText = 0;
        }
    }
    else {
        alert('Plz Add Booking ')
    }


}