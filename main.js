let slideIndex = 1;
showSlides(slideIndex);

let slideInterval = setInterval(function () {
    plusSlides(1);
}, 3000);

function showSlides(n) {
    const slides = document.getElementsByClassName("item");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    // Gắn sự kiện click cho nút mũi tên qua trái và qua phải
    document.querySelector('.next').onclick = function () {
        plusSlides(1);
    };

    document.querySelector('.prev').onclick = function () {
        plusSlides(-1);
    };

}

function plusSlides(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex += n);
    slideInterval = setInterval(function () {
        plusSlides(1);
    }, 3000);
}

function currentSlide(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex = n);
    slideInterval = setInterval(function () {
        plusSlides(1);
    }, 3000);
}
