document.addEventListener("DOMContentLoaded", function() {

    const acceptButton = document.querySelector('.cookie-accept');
    const declineButton = document.querySelector('.cookie-decline');
    const managePreferences = document.querySelector('.cookie-preferences');
    const cookieSection = document.querySelector('.cookies-section');
    const cookieManage = document.querySelector('.cookies-manage');
    const closeCookie = document.querySelector('.close-cookies-button'); 
    const bodyFreeze = document.querySelector('body');




    acceptButton.addEventListener('click', function () {
        console.log('Enable all cookies.');
        cookieSection.style.display = "none";
    });

    declineButton.addEventListener('click', function () {
        console.log('Disable all cookies.');
        cookieSection.style.display = "none";
    });

    managePreferences.addEventListener('click', function () {
        console.log('Clicked Manage Preferences');
        cookieManage.classList.toggle('hidden');

        if (bodyFreeze.style.overflow === 'hidden') {
            bodyFreeze.style.overflow = 'scroll';
        } else {
            bodyFreeze.style.overflow = 'hidden';
        }

    });

    closeCookie.addEventListener('click', function () {
        cookieManage.classList.toggle('hidden');

        if (bodyFreeze.style.overflow === 'hidden') {
            bodyFreeze.style.overflow = 'scroll';
        } else {
            bodyFreeze.style.overflow = 'hidden';
        }
    });





}); 