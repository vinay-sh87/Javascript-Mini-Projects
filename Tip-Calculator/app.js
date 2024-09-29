const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip');
const calculateBtn = document.getElementById('calculate');
const totalSpan = document.getElementById('total');

calculateBtn.addEventListener('click', () => {
    const bill = billInput.value;
    const tip = tipInput.value;
    const totalValue = bill * (1 + tip / 100);
    totalSpan.textContent = totalValue.toFixed(2);
})