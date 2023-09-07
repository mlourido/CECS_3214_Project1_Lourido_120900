// Collapsible Table Sections
//-----------------------------------

// JavaScript to handle the toggle button
const toggleButtons = document.querySelectorAll('.toggle-button');
const collapsibleContainers = document.querySelectorAll('.collapsible-container');

toggleButtons.forEach((toggleButton, index) => {
    toggleButton.addEventListener('click', () => {
        const container = collapsibleContainers[index];
        container.style.display = container.style.display === 'none' ? 'block' : 'none';
    });
});