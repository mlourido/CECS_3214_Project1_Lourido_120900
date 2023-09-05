// Get all the checkboxes with class 'item-checkbox'
const checkboxes = document.querySelectorAll('.item-checkbox');

// Add a change event listener to each checkbox
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateTotalPrice);
});

// Function to calculate the total price
function updateTotalPrice() {
    let totalPrice = 0;
    let salesTaxRate = .115;

    // Loop through all the checkboxes
    checkboxes.forEach(checkbox => {
        // If a checkbox is checked, find its corresponding row and get the price from the "Price" column
        if (checkbox.checked) {
            const row = checkbox.closest('tr');
            const priceCell = row.querySelector('.price'); // Assuming the class is 'price'
            const priceText = priceCell.textContent.trim(); // Get the price text
            const price = parseFloat(priceText.replace('$', '').replace(',', '')); // Remove '$' and ',' if present
            if (!isNaN(price)) {
                totalPrice += price;
            }
        }
    });

    const salesTax = totalPrice * salesTaxRate;
    const totalPriceWithTax = totalPrice + salesTax;
    // Display the total price in your HTML
    const totalDisplay = document.getElementById('total-price');
    totalDisplay.textContent = `$${totalPrice.toFixed(2)}`;
    totalDisplay.innerHTML = `Total: $${totalPrice.toFixed(2)}
                            <br> Sales Tax: $${salesTax.toFixed(2)} 
                            <br>Total with Tax: $${totalPriceWithTax.toFixed(2)}`;
}

// Call the function initially to calculate the total price for the default state
updateTotalPrice();


// JavaScript to handle the toggle button
const toggleButtons = document.querySelectorAll('.toggle-button');
const collapsibleContainers = document.querySelectorAll('.collapsible-container');

toggleButtons.forEach((toggleButton, index) => {
    toggleButton.addEventListener('click', () => {
        const container = collapsibleContainers[index];
        container.style.display = container.style.display === 'none' ? 'block' : 'none';
    });
});
