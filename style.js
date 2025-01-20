let bill = [];
let total = 0;

function goToPage(page) {
    window.location.href = page;
}

function addToBill(item, amount) {
    bill.push({ item, amount });
    total += amount;
    alert(`${item} added to the bill!`);
    localStorage.setItem('bill', JSON.stringify(bill));
    localStorage.setItem('total', total);
}

function loadBill() {
    const billItems = JSON.parse(localStorage.getItem('bill')) || [];
    const totalAmount = localStorage.getItem('total') || 0;

    const billList = document.getElementById('billItems');
    const totalElement = document.getElementById('totalAmount');

    billList.innerHTML = '';
    billItems.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `${entry.item} - $${entry.amount}`;
        billList.appendChild(li);
    });

    totalElement.textContent = `Total: $${totalAmount}`;
}

if (window.location.pathname.endsWith('bill.html')) {
    loadBill();
}
