document.addEventListener('DOMContentLoaded', function() {
    // Get all checkbox elements
    const checkboxes = document.querySelectorAll('.checkbox-tiers');
    // Get total display element
    const totalDisplay = document.getElementById('total');
    const totalDisplay2 = document.getElementById('total2');

    // Function to update total based on checked checkboxes
    function updateTotal() {
        let total = 1149;
        let total2 = 1149;

        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                total += parseInt(checkbox.value);
                total2 += parseInt(checkbox.value);
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