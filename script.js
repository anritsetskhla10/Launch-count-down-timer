

let countDownDate = new Date("Feb 6, 2025 22:30:25").getTime();


let x = setInterval(function(){

    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('.days').textContent = days;
    document.querySelector('.hours').textContent = hours;
    document.querySelector('.minutes').textContent = minutes;
    document.querySelector('.seconds').textContent = seconds;


    if (distance < 0) {
        clearInterval(x);
        document.innerHTML = "EXPIRED";
      }

}, 1000);



