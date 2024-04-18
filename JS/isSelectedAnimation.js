/*document.addEventListener("click", function() {

    let arrayCounter = 0; 

    let startingCost = [1169, 1599, 2349];
    let wattageAmount = [302, 440, 612];
    let teraflopAmount = [15, 29 ,40];
    let coresAmount = [6, 6, 8];
    let threadsAmount = [12, 12, 16];
    let hertzAmount = [3.8, 4.7 ,4.2];
    let memoryAmount = [16, 32, 64];

    const electricColorSpans = document.querySelectorAll('.electric-color');

    electricColorSpans.forEach((span, index) => {
        span.textContent = [wattageAmount, teraflopAmount, coresAmount, threadsAmount, hertzAmount, memoryAmount, startingCost][index][arrayCounter];
    });

    arrayCounter = (arrayCounter + 1) % startingCost.length;
});
*/
document.addEventListener("DOMContentLoaded", function() {

let num = 0

function printNum(){
    let num = 3;
    console.log("Clicked on Tier " + num);
    tierThree.classList.add('is-selected');

    //removes is-selected on other elements once clicked.
    tierTwo.classList.remove('is-selected');
    tierOne.classList.remove('is-selected');

    //sets id values to corresponding numbers
    getWattageElement.textContent = 302;
    getCoreElement.textContent = 6;
    getThreadElement.textContent = 12;
    getGhzElement.textContent = 3.8;
    getTflopsElement.textContent = 15;
    getMemoryElement.textContent = 16;
    getPriceElement.textContent = 1169;
}

function printNumTwo(){
    let num = 2;
    console.log("Clicked on Tier " + num);
    tierTwo.classList.add('is-selected');

    tierThree.classList.remove('is-selected');
    tierOne.classList.remove('is-selected');

    //sets id values to corresponding numbers
    getWattageElement.textContent = 440;
    getCoreElement.textContent = 6;
    getThreadElement.textContent = 12;
    getGhzElement.textContent = 4.7;
    getTflopsElement.textContent = 29;
    getMemoryElement.textContent = 32;
    getPriceElement.textContent = 1599;
}

function printNumThree(){
    let num = 1;
    console.log("Clicked on Tier " + num);
    tierOne.classList.add('is-selected');

    tierThree.classList.remove('is-selected');
    tierTwo.classList.remove('is-selected');

    //sets id values to corresponding numbers
    getWattageElement.textContent = 612;
    getCoreElement.textContent = 8;
    getThreadElement.textContent = 16;
    getGhzElement.textContent = 4.2;
    getTflopsElement.textContent = 40;
    getMemoryElement.textContent = 64;
    getPriceElement.textContent = 2349;
}


const tierThree = document.getElementById('tier-three-stats');
const tierTwo = document.getElementById('tier-two-stats');
const tierOne = document.getElementById('tier-one-stats');

const tierThreeListener = document.getElementById('tier-three-stats').addEventListener('click', printNum);
const tierTwoListener = document.getElementById('tier-two-stats').addEventListener('click', printNumTwo);
const tierOneListener = document.getElementById('tier-one-stats').addEventListener('click', printNumThree);

const getWattageElement = document.getElementById('wattage');
const getCoreElement = document.getElementById('cores');
const getThreadElement = document.getElementById('threads');
const getGhzElement = document.getElementById('ghz');
const getTflopsElement = document.getElementById('tflops');
const getMemoryElement = document.getElementById('memory');
const getPriceElement = document.getElementById('base-price');

});

