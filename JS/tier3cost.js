/*document.addEventListener('DOMContentLoaded', function() {
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
*/

document.addEventListener('DOMContentLoaded', function() {
    // Get all checkbox elements
    const checkboxes = document.querySelectorAll('.checkbox-tiers');
    // Get total display element
    const totalDisplay = document.getElementById('total');
    
    // Function to update total based on checked checkboxes with counting animation
    function updateTotal() {
      let targetTotal = 1169; // Starting total value
      let currentTotal = parseInt(totalDisplay.textContent);
      
      checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
          targetTotal += parseInt(checkbox.value);
        }
      });
      
      // Calculate step value based on difference between current and target total
      let step = (targetTotal - currentTotal) / 50; // 50 steps for smoother animation
      
      // Function to perform counting animation
      function countAnimation() {
        if (currentTotal < targetTotal) {
          currentTotal += step;
          if (currentTotal >= targetTotal) {
            currentTotal = targetTotal;
          }
          totalDisplay.textContent = Math.round(currentTotal);
          setTimeout(countAnimation, 20); // Adjust duration here
        }
      }
      
      countAnimation(); // Start the counting animation
    }

    // Add event listener to each checkbox
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', updateTotal);
    });
  });
