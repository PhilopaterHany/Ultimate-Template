// Typed.js For Landing Animation
const typed = new Typed("#typed", {
    strings: [
        "I'm Philopater Hany",
        "I'm A Front End Developer",
        "Welcome To My World",
    ],
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
const articlesBoxes = Array.from(
    document.querySelectorAll(".articles .container .box")
);
for (let i = 0; i < articlesBoxes.length; i += 2) {
    articlesBoxes[i].classList.add(
        "wow",
        "animate__animated",
        "animate__fadeInLeft"
    );
    articlesBoxes[i + 1].classList.add(
        "wow",
        "animate__animated",
        "animate__fadeInRight"
    );
}

// Gallery Section Animation
const galleryBoxes = Array.from(
    document.querySelectorAll(".gallery .container .box")
);
for (let i = 0; i < galleryBoxes.length; i += 2) {
    galleryBoxes[i].classList.add(
        "wow",
        "animate__animated",
        "animate__rotateInDownLeft"
    );
    galleryBoxes[i + 1].classList.add(
        "wow",
        "animate__animated",
        "animate__rotateInDownRight"
    );
}

// Features Section Animation
const featsBoxes = Array.from(
    document.querySelectorAll(".features .container .box")
);
for (let i = 0; i < featsBoxes.length; i++) {
    featsBoxes[i].classList.add("wow", "animate__animated", "animate__rollIn");
}

// Gallery Section Animation
const testimonialsBoxes = Array.from(
    document.querySelectorAll(".testimonials .container .box")
);
for (let i = 0; i < testimonialsBoxes.length; i += 2) {
    testimonialsBoxes[i].classList.add(
        "wow",
        "animate__animated",
        "animate__zoomInDown"
    );
    testimonialsBoxes[i + 1].classList.add(
        "wow",
        "animate__animated",
        "animate__zoomInUp"
    );
}

// Team Section Animation
const teamBoxes = Array.from(
    document.querySelectorAll(".team-members .container .box")
);
for (let i = 0; i < teamBoxes.length; i++) {
    teamBoxes[i].classList.add(
        "wow",
        "animate__animated",
        "animate__jackInTheBox"
    );
}

// Services Section Animation
const servicesBoxes = Array.from(
    document.querySelectorAll(".services .container .box")
);
for (let i = 0; i < servicesBoxes.length; i += 2) {
    servicesBoxes[i].classList.add(
        "wow",
        "animate__animated",
        "animate__lightSpeedInLeft"
    );
    servicesBoxes[i + 1].classList.add(
        "wow",
        "animate__animated",
        "animate__lightSpeedInRight"
    );
}

// Skills Section Animation
const progressBars = Array.from(
    document.querySelectorAll(
        ".our-skills .container .skills .skill .the-progress span"
    )
);
window.addEventListener("scroll", () => {
    if (
        scrollY >=
        document.querySelector("section.our-skills").offsetTop - 100
    ) {
        for (let i = 0; i < progressBars.length; i++) {
            progressBars[i].style.width = progressBars[i].dataset.width;
        }
    }
});

// Work Section Animation
const workBoxes = Array.from(
    document.querySelectorAll(".work .container .box")
);
for (let i = 0; i < workBoxes.length; i++) {
    workBoxes[i].classList.add("wow", "animate__animated", "animate__fadeInUp");
}

// Events Section Counter
const daysSpan = document.querySelector(
    ".events .container .info .time .unit span.days"
);
const hoursSpan = document.querySelector(
    ".events .container .info .time .unit span.hours"
);
const minutesSpan = document.querySelector(
    ".events .container .info .time .unit span.minutes"
);
const secondsSpan = document.querySelector(
    ".events .container .info .time .unit span.seconds"
);
const currDate = new Date();
let countDownDate = new Date(`Aug 4, ${currDate.getFullYear()} 00:00:01`);
const timer = setInterval(() => {
    let dateDiff = countDownDate.getTime() - new Date().getTime();
    if (dateDiff <= 0) {
        countDownDate = new Date(
            `Aug 4, ${currDate.getFullYear() + 1} 00:00:01`
        );
    }
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
        (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
    daysSpan.innerHTML = days < 10 ? `0${days}` : days;
    hoursSpan.innerHTML = hours < 10 ? `0${hours}` : hours;
    minutesSpan.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    secondsSpan.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}, 1000);

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
const pricingPlans = Array.from(
    document.querySelectorAll(".pricing .container .box")
);
const prices = Array.from(
    document.querySelectorAll(".pricing .container .box .price .amount")
);
let pricingStarted = false;
for (let i = 0; i < pricingPlans.length; i++) {
    pricingPlans[i].classList.add(
        "wow",
        "animate__animated",
        "animate__fadeInTopLeft"
    );
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
const ourWorkLis = document.querySelectorAll(
    ".our-work .container ul.categ li"
);
const ourWorkBoxes = document.querySelectorAll(".our-work .imgprev .box");
const ourWorkImages = document.querySelectorAll(".our-work .box img");
ourWorkImages.forEach((img) => {
    img.nextElementSibling.lastElementChild.innerHTML =
        img.classList[1][0].toUpperCase() + img.classList[1].slice(1);
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
    ourWorkBoxes[i].classList.add(
        "wow",
        "animate__animated",
        "animate__flipInX"
    );
    ourWorkBoxes[i + 1].classList.add(
        "wow",
        "animate__animated",
        "animate__flipInY"
    );
}

// Statistics Section Counter & Animation
const numbersBoxes = Array.from(
    document.querySelectorAll(".stats .container .box")
);
const numbers = Array.from(
    document.querySelectorAll(".stats .container .box .number")
);
let counterStarted = false;
for (let i = 0; i < numbersBoxes.length; i += 2) {
    numbersBoxes[i].classList.add(
        "wow",
        "animate__animated",
        "animate__bounceInUp"
    );
    numbersBoxes[i + 1].classList.add(
        "wow",
        "animate__animated",
        "animate__bounceInDown"
    );
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
document
    .querySelector(".discount .main form input[type='number']")
    .addEventListener("keypress", function (event) {
        if (
            (event.which != 8 && event.which != 0 && event.which < 48) ||
            event.which > 57
        ) {
            event.preventDefault();
        }
    });

// Putting Year at Footer
document.querySelector("footer .year").innerHTML = currDate.getFullYear();
