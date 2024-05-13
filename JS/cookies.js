document.addEventListener("DOMContentLoaded", function() {

    const acceptButton = document.querySelector('.cookie-accept');
    const declineButton = document.querySelector('.cookie-decline');
    const managePreferences = document.querySelector('.cookie-preferences');
    const cookieSection = document.querySelector('.cookies-section');
    const cookieManage = document.querySelector('.cookies-manage');
    const closeCookie = document.querySelector('.close-cookies-button'); 
    const acceptChanges = document.querySelector('.cookies-manage-accept');
    const bodyFreeze = document.querySelector('body');
    const newDiv = document.createElement('div');


    acceptButton.addEventListener('click', function () {
        cookieSection.style.display = "none";
        cookieManage.style.display = "none";

        //needed on all functions to prevent scroll from locking.
        bodyFreeze.style.overflowY = 'scroll';
        
           
        
    });

    declineButton.addEventListener('click', function () {
        cookieSection.style.display = "none";
        cookieManage.style.display = "none";

        bodyFreeze.style.overflowY = 'scroll';

    });

    managePreferences.addEventListener('click', function () {
        cookieManage.classList.toggle('hidden');
        newDiv; 
        //newDiv.classList.toggle('cookies-dark-overlay');

        //needed on all elements to prevent scroll from locking.
        if (bodyFreeze.style.overflowY === 'hidden') {
            bodyFreeze.style.overflowY = 'scroll';
        } else {
            bodyFreeze.style.overflowY = 'hidden';
        }

    });

    closeCookie.addEventListener('click', function () {
        cookieManage.classList.toggle('hidden');

        //needed on all functions to prevent scroll from locking.
        if (bodyFreeze.style.overflowY === 'hidden') {
            bodyFreeze.style.overflowY = 'scroll';
        } else {
            bodyFreeze.style.overflowY = 'hidden';
        }
    });



    acceptChanges.addEventListener('click', function() {
        console.log('Clicked on Accept Changes');
        cookieSection.style.display = "none";
        cookieManage.style.display = "none";

        if (bodyFreeze.style.overflowY === 'hidden') {
            bodyFreeze.style.overflowY = 'scroll';
        } else {
            bodyFreeze.style.overflowY = 'hidden';
        }

        //manage cookie preferences via user selections.


    });





}); 