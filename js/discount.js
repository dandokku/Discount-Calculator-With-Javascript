function getElem(element) {
    return document.querySelector(element);
}

function getId(id) {
    return document.getElementById(id);
}

const calculate = getElem('.calculate');

calculate.addEventListener('click', (e)=> {
    e.preventDefault();

    const oldPrice = getId('amount').value;
    const newPrice = getId('new-price').value;
    const percentage = getId('discount-percentage');
    const discountAmount = getId('discount-amount');

    discountAmount.value = eval(oldPrice - newPrice);
    percentage.value = eval(discountAmount.value * 100 / oldPrice);

});