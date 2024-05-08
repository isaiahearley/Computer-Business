document.addEventListener("DOMContentLoaded", function() {

    const acceptButton = document.querySelector('.cookie-accept');
    const declineButton = document.querySelector('.cookie-decline');
    const managePreferences = document.querySelector('.cookie-preferences');
    const cookieSection = document.querySelector('.cookies-section');
    const cookieManage = document.querySelector('.cookies-manage');
    const closeCookie = document.querySelector('.close-cookies-button'); 
    const bodyFreeze = document.querySelector('body');
    const newDiv = document.createElement('div');




    acceptButton.addEventListener('click', function () {
        console.log('Enable all cookies.');
        cookieSection.style.display = "none";
        cookieManage.style.display = "none";

    });

    declineButton.addEventListener('click', function () {
        console.log('Disable all cookies.');
        cookieSection.style.display = "none";
        cookieManage.style.display = "none";
        

    });

    managePreferences.addEventListener('click', function () {
        console.log('Clicked Manage Preferences');
        cookieManage.classList.toggle('hidden');
        newDiv; 
        newDiv.classList.toggle('cookies-dark-overlay');



        if (bodyFreeze.style.overflowY === 'hidden') {
            bodyFreeze.style.overflowY = 'scroll';
        } else {
            bodyFreeze.style.overflowY = 'hidden';
        }

    });

    closeCookie.addEventListener('click', function () {
        cookieManage.classList.toggle('hidden');

        if (bodyFreeze.style.overflowY === 'hidden') {
            bodyFreeze.style.overflowY = 'scroll';
        } else {
            bodyFreeze.style.overflowY = 'hidden';
        }
    });





}); 