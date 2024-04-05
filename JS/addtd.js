document.addEventListener('DOMContentLoaded', function() {
    // Get all checkbox elements
    const checkboxes = document.querySelectorAll('.checkbox-tiers');
    // Get total display element
    const totalDisplay = document.getElementById('total');
    const totalDisplay2 = document.getElementById('total2');
    const table = document.querySelector('.price-breakdown table');

    // Function to update total based on checked checkboxes
    function updateTotal() {
        let total = 1149;
        let total2 = 1149;

        // Clear existing TDs before updating
        while (table.rows.length > 1) {
            table.deleteRow(1);
        }

        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                total += parseInt(checkbox.value);
                total2 += parseInt(checkbox.value);

                // Create new td element and append to table if checkbox is checked
                const newRow = document.createElement('tr');
                const newTd = document.createElement('td');
                const newTdTwo = document.createElement('td');
                newTd.textContent = checkbox.getAttribute('name');
                newTdTwo.textContent = "$" + checkbox.value;               
                newTdTwo.classList.add("parts");
                newRow.appendChild(newTd);
                newRow.appendChild(newTdTwo);
                table.appendChild(newRow);
            }
        });
        totalDisplay.textContent = total;
        totalDisplay2.textContent = total2;
    }

    // Add event listener to each checkbox
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', updateTotal);
    });
});