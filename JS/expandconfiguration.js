document.addEventListener("DOMContentLoaded", function() {
    const expandConfigurations = document.querySelectorAll('.expand-configuration');
    const configurationChecklist = document.querySelector('.configuration-checklist');
    const totalPrice = document.querySelector('.total-price');
    const purchaseButton = document.querySelector('.purchase-button');
    const configurationConfirmation = document.querySelector('.configuration-confirmation')
    const arrowAnimation = document.querySelector('.arrow-animation');
    const closeAnimation = document.querySelector('.close-animation');


    expandConfigurations.forEach(element => 
    {
        element.addEventListener('click', function() 
        {
        console.log("Expand configuration clicked!");
        configurationChecklist.classList.toggle('expanded');
        totalPrice.classList.toggle('hidden');
        purchaseButton.classList.toggle('hidden');
        configurationConfirmation.classList.toggle('hidden');
        arrowAnimation.classList.toggle('hidden')
        closeAnimation.classList.toggle('hidden')

        });
    });
});