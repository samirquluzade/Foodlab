const radio1 = document.getElementById('radio-first');
const radio2 = document.getElementById('radio-second');
const basic = document.querySelectorAll('.moneyAmount1');
const standart = document.querySelectorAll('.moneyAmount2');
const smart = document.querySelectorAll('.moneyAmount3');
const premium = document.querySelectorAll('.moneyAmount4');
const payForm = [basic, standart, smart, premium];

console.log(payForm);
const monthly = () => {
    basic.forEach((el) => {
        el.innerHTML = '25₼ / month';
    })
    standart.forEach((el) => {
        el.innerHTML = '50₼ / month';
    })
    smart.forEach((el) => {
        el.innerHTML = '100₼ / month';
    })
    premium.forEach((el) => {
        el.innerHTML = '150₼ / month';
    })
}

const values = document.querySelectorAll('.value');
let restText = "₼ / month";
function getDiscount() {
    for (let i = 0; i < values.length; i++) {
        payForm[i][0].innerHTML = values[i].textContent * 80 / 100 + restText;
        payForm[i][1].innerHTML = values[i].textContent * 80 / 100 + restText;
    }
}
