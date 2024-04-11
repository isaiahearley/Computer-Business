
const date = new Date();

let day = date.getDate() + 8;
let month = date.getMonth();
let year = date.getFullYear();
let leapYear = 0

const months = [  // Array of month names
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

if(year % 4 === 0){
    leapYear = leapYear + 1
}

if(day > 28 + leapYear && (month === 1)){
    month = month + 1;
    day = day - 28 - leapYear;
}

//if its over 30 days add a month
if(day > 30 && (month === 3 || month === 5 || month === 8 || month === 10 )){
    month = month + 1;
    day = day - 30;
}

//if its over 31 days add a month
if(day > 31 && (month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11 || month === 12)){
    month = month + 1;
    day = day - 31;
}

//if month goes past december, rollback to january
if(month > 11){
    month = 0;
    year++;
}

// if day is above 30 && month is 1,3,5,7,9,11 then 
let expecteddate = `${months[month]} ${day}, ${year}`;

console.log("Est. Shipping By: " + expecteddate);

//add content to <p class="shipping-date">
//const shippingDate = document.createElement("span")

