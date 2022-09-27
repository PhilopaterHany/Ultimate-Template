// Typed.js For Landing Animation
const typed = new Typed("#typed", {
    strings: ["Welcome To My World", "I'm Philopater Hany", "I'm a Front-End Developer"],
    backSpeed: 200,
    typeSpeed: 100,
    loop: true,
});

// Scroll To Top Button
const btn = document.getElementById("to-top");
window.addEventListener("scroll", () => {
    window.scrollY >= 600
        ? (btn.style.right = "5px")
        : (btn.style.right = "-1000px");
});
btn.onclick = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};

// Mega Menu
const openMenu = document.getElementById("otherLinks");
const megaMenu = document.getElementById("megaMenu");
openMenu.onclick = () => megaMenu.classList.add("show");
window.addEventListener("mouseup", function (e) {
    if (!megaMenu.contains(e.target)) {
        megaMenu.classList.remove("show");
    }
});

// Articles Section Animation
const articlesBoxes = document.querySelectorAll(".articles .box");
for (let i = 0; i < articlesBoxes.length; i += 2) {
    articlesBoxes[i].classList.add("wow", "animate__animated", "animate__fadeInLeft");
    articlesBoxes[i + 1].classList.add("wow", "animate__animated", "animate__fadeInRight");
}

// Gallery Section Animation
const galleryBoxes = document.querySelectorAll(".gallery .box");
for (let i = 0; i < galleryBoxes.length; i += 2) {
    galleryBoxes[i].classList.add("wow", "animate__animated", "animate__rotateInDownLeft");
    galleryBoxes[i + 1].classList.add("wow", "animate__animated", "animate__rotateInDownRight");
}

// Features Section Animation
const featsBoxes = document.querySelectorAll(".features .box");
for (let i = 0; i < featsBoxes.length; i++) {
    featsBoxes[i].classList.add("wow", "animate__animated", "animate__rollIn");
}

// Gallery Section Animation
const testimonialsBoxes = document.querySelectorAll(".testimonials .box");
for (let i = 0; i < testimonialsBoxes.length; i += 2) {
    testimonialsBoxes[i].classList.add("wow", "animate__animated", "animate__zoomInDown");
    testimonialsBoxes[i + 1].classList.add("wow", "animate__animated", "animate__zoomInUp");
}

// Team Section Animation
const teamBoxes = document.querySelectorAll(".team-members .box");
for (let i = 0; i < teamBoxes.length; i++) {
    teamBoxes[i].classList.add("wow", "animate__animated",  "animate__jackInTheBox");
}

// Services Section Animation
const servicesBoxes = document.querySelectorAll(".services .box");

for (let i = 0; i < servicesBoxes.length; i += 2) {
    servicesBoxes[i].classList.add("wow", "animate__animated", "animate__lightSpeedInLeft");
    servicesBoxes[i + 1].classList.add("wow", "animate__animated", "animate__lightSpeedInRight");
}

// Skills Section Animation
const progressBars = document.querySelectorAll(".our-skills .skills .skill .the-progress span");
window.addEventListener("scroll", () => {
    if (scrollY >= document.querySelector("section.our-skills").offsetTop - 100) {
        for (let i = 0; i < progressBars.length; i++) {
            progressBars[i].style.width = progressBars[i].dataset.width;
        }
    }
});

// Work Section Animation
const workBoxes = document.querySelectorAll(".work .box");
for (let i = 0; i < workBoxes.length; i++) {
    workBoxes[i].classList.add("wow", "animate__animated", "animate__fadeInUp");
}

// Events Section Counter
const daysSpan = document.querySelector(".events .time .unit span.days");
const hoursSpan = document.querySelector(".events .time .unit span.hours");
const minutesSpan = document.querySelector(".events .time .unit span.minutes");
const secondsSpan = document.querySelector(".events .time .unit span.seconds");
const myBdayAge = document.querySelector(".coming-bday-age");
const myBdaySuffix = document.querySelector(".coming-bday-suffix");
const currDate = new Date();
let myComingBday = currDate.getFullYear() - 2005 + 1;
let myComingBdayLastChar = myComingBday.toString()[myComingBday.toString().length - 1];

let countDownDate = new Date(`Aug 4, ${currDate.getFullYear()} 00:00:01`);
const timer = setInterval(() => {
    let dateDiff = countDownDate.getTime() - new Date().getTime();
    if (dateDiff <= 0) {
        countDownDate = new Date(`Aug 4, ${currDate.getFullYear() + 1} 00:00:01`);
    }
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
    daysSpan.innerHTML = days < 10 ? `0${days}` : days;
    hoursSpan.innerHTML = hours < 10 ? `0${hours}` : hours;
    minutesSpan.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    secondsSpan.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}, 1000);

myBdayAge.innerHTML = myComingBday.toString();
if (myComingBdayLastChar === "1") {
    myBdaySuffix.innerHTML = "st"
} else if (myComingBdayLastChar === "2") {
    myBdaySuffix.innerHTML = "nd";
} else if (myComingBdayLastChar === "3") {
    myBdaySuffix.innerHTML = "rd";
} else {
    myBdaySuffix.innerHTML = "th";
}

// Counting Function
function startCount(element) {
    let goal = element.dataset.goal;
    let count = setInterval(() => {
        element.textContent++;
        if (element.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}

// Pricing Plans Counter & Animation
const pricingPlans = document.querySelectorAll(".pricing .box");
const prices = document.querySelectorAll(".pricing .container .box .price .amount");
let pricingStarted = false;
for (let i = 0; i < pricingPlans.length; i++) {
    pricingPlans[i].classList.add("wow", "animate__animated", "animate__fadeInTopLeft");
}
window.addEventListener("scroll", () => {
    if (window.scrollY >= document.querySelector(".pricing").offsetTop - 150) {
        if (!pricingStarted) {
            prices.forEach((num) => startCount(num));
        }
        pricingStarted = true;
    }
});

// Our Work Section Filter & Animation
const ourWorkLis = document.querySelectorAll(".our-work ul.categ li");
const ourWorkBoxes = document.querySelectorAll(".our-work .imgprev .box");
const ourWorkImages = document.querySelectorAll(".our-work .box img");
ourWorkImages.forEach((img) => {
    img.nextElementSibling.lastElementChild.innerHTML = img.classList[1][0].toUpperCase() + img.classList[1].slice(1);
});
ourWorkLis.forEach((li) => {
    li.addEventListener("click", () => {
        ourWorkLis.forEach((li) => {
            li.classList.remove("active");
            ourWorkImages.forEach((img) => {
                img.parentElement.style.display = "none";
            });
        });
        document.querySelectorAll(li.dataset.work).forEach((img) => {
            img.parentElement.style.display = "inline-block";
        });
        li.classList.add("active");
    });
});
for (let i = 0; i < ourWorkBoxes.length; i += 2) {
    ourWorkBoxes[i].classList.add("wow", "animate__animated", "animate__flipInX");
    ourWorkBoxes[i + 1].classList.add("wow", "animate__animated", "animate__flipInY");
}

// Statistics Section Counter & Animation
const numbersBoxes = document.querySelectorAll(".stats .box");
const numbers = document.querySelectorAll(".stats .box .number");
let counterStarted = false;
for (let i = 0; i < numbersBoxes.length; i += 2) {
    numbersBoxes[i].classList.add("wow", "animate__animated", "animate__bounceInUp");
    numbersBoxes[i + 1].classList.add("wow", "animate__animated", "animate__bounceInDown");
}
window.addEventListener("scroll", () => {
    if (window.scrollY >= document.querySelector(".stats").offsetTop - 250) {
        if (!counterStarted) {
            numbers.forEach((num) => startCount(num));
        }
        counterStarted = true;
    }
});

// Number Input Characters
const invalidChars = ["e", "+", "-"];
document.getElementsByName("mobile")[0].addEventListener("keydown", function (e) {
    if (invalidChars.includes(e.key)) {
        e.preventDefault();
    }
});

// Putting Year at Footer
document.querySelector("footer .year").innerHTML = currDate.getFullYear();
