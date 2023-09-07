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
    totalDisplay.textContent = `Total: $${totalPrice.toFixed(2)}`;
    //total price with tax
    //totalDisplay.innerHTML = `Total: $${totalPrice.toFixed(2)}<br> Sales Tax: $${salesTax.toFixed(2)}<br>Total with Tax: $${totalPriceWithTax.toFixed(2)}`;
}

// Call the function initially to calculate the total price for the default state
updateTotalPrice();

//modification to show in additional html

function showSelectedItems() {
    const selectedItems = [];
    const selectedPrices = [];

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const row = checkbox.closest('tr');
            const name = row.querySelector('.data').textContent;
            const priceText = row.querySelector('.price').textContent;
            const price = parseFloat(priceText.replace('$', ''));

            selectedItems.push(name);
            selectedPrices.push(price);
        }
    });

    // Create an object or array to store the selected items and prices
    const selectedData = {
        items: selectedItems,
        prices: selectedPrices
    };

    // Convert the data to a JSON string
    const selectedDataJSON = JSON.stringify(selectedData);

    // Store the data in localStorage
    localStorage.setItem('selectedData', selectedDataJSON);

    // Redirect to the new HTML page
    window.location.href = 'checkoutPage.html';
}

document.getElementById('show-selected').addEventListener('click', showSelectedItems);

