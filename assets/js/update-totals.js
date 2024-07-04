document.querySelectorAll('.quantity').forEach(input => {
    input.addEventListener('change', function() {
        const price = parseFloat(this.dataset.price);
        const quantity = parseInt(this.value);
        const total = price * quantity;
        this.closest('tr').querySelector('.item-total').textContent = `€${total.toFixed(0)}`;
        updateTotalPrice();
    });
});

function updateTotalPrice() {
    let total = 0;
    document.querySelectorAll('.item-total').forEach(item => {
        const value = parseFloat(item.textContent.replace('€', ''));
        total += value;
    });
    document.getElementById('totalPrice').textContent = `Total Price: €${total.toFixed(0)}`;
}
