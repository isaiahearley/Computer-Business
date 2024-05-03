document.addEventListener("DOMContentLoaded", function() {
    const purchaseButton = document.querySelector('.troubleshooting-purchase-button');
    const openSignUp = document.querySelector('.troubleshooting-signup-section');
    const closeButton = document.querySelector('.cancel-troubleshooting');

    purchaseButton.addEventListener('click', function() {
        console.log("Expand configuration clicked!");
        openSignUp.classList.toggle('troubleshooting-signup-section-expanded');
    });

    closeButton.addEventListener('click', function() {
        console.log("Close button clicked!");
        openSignUp.classList.remove('troubleshooting-signup-section-expanded');
    });  
});