// Count number
(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/30/",
        birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
        birthday = dayMonth + nextYear;
    }


    const countDown = new Date(birthday).getTime(),
        x = setInterval(function () {

            const now = new Date().getTime(),
                distance = countDown - now;


            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);


            if (distance < 0) {
                document.getElementById("headline").innerText = "It's my birthday!";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
            }

        }, 0)
}());

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("container_sale");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 1000); 
}

$('.carousel').carousel({
    interval: 1500
})

// Header Fixed
window.onscroll = function () { stickyHeader() };

var headerMain = document.querySelector('.header_main');
var headerSub = document.querySelector('.header_sub')
var sticky = headerMain.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        headerMain.classList.add("fixed");
        headerSub.classList.add("fixed");
    } else {
        headerMain.classList.remove("fixed");
        headerSub.classList.remove("fixed");
    }
}

// Back to top
document.addEventListener('scroll', function () {
    const backToTopButton = document.getElementById('backToTop');

    if (window.scrollY > 300) { // Hiển thị nút khi cuộn xuống 300px
        backToTopButton.classList.add('show');
        backToTopButton.classList.remove('hide');
    } else {
        backToTopButton.classList.add('hide');
        backToTopButton.classList.remove('show');
    }
});

document.getElementById('backToTop').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

