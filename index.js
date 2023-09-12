const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

setInterval(() => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    let hourRotate = hour * 30 + minute / 2;
    let minuteRotate = minute * 6;
    let secondRotate = second * 6;


    hours.style.transform = `rotate(${hourRotate}deg)`
    minutes.style.transform = `rotate(${minuteRotate}deg)`
    seconds.style.transform = `rotate(${secondRotate}deg)`



}, 1000);