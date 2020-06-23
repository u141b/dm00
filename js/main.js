//scroll-nav
window.onscroll = function () {
  navFunction()
};

function navFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('navDown').style.top = '0';
  } else {
    document.getElementById('navDown').style.top = '-100px';
  }
}

//smooth-scroll
$(document).ready(function () {
  $('a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
});

//countdown
var countDownDate = new Date('2020 / 07 / 01 00:00:00').getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('countdownDay').innerHTML = days;
  document.getElementById('countdownHour').innerHTML = hours;
  document.getElementById('countdownMin').innerHTML = minutes;
  document.getElementById('countdownSec').innerHTML = seconds;

  document.getElementById('countdownDay').style.lineHeight = 1;
  document.getElementById('countdownHour').style.lineHeight = 1;
  document.getElementById('countdownMin').style.lineHeight = 1;
  document.getElementById('countdownSec').style.lineHeight = 1;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById('Countdown').style.display = 'none';
  }
}, 1000);

//pic
function openImg() {
  document.getElementById('showLarge').style.display = 'block';
}

function closeImg() {
  document.getElementById('showLarge').style.display = 'none';
}

//video
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('video-slides');
  var row = document.getElementsByClassName('video-slides__row');
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < row.length; i++) {
    row[i].className = row[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  row[slideIndex - 1].className += ' active';
}

//scroll-img
function debounce(func, wait = 10, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const slideImages = document.querySelectorAll('.slide-in');

function checkSlide() {
  slideImages.forEach(slideImage => {
    const slideinAt = window.scrollY + window.innerHeight - slideImage.height / 2;
    console.log(slideImage, slideImage.height);
    const imageBottom = slideImage.offsetTop + slideImage.height;
    const isHalfShown = slideinAt > slideImage.offsetTop;
    const isNotScrolldedPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolldedPast) {
      slideImage.classList.add('slide-in__active');
    } else {
      slideImage.classList.remove('slide-in__active');
    }
  });

}
window.addEventListener('scroll', debounce(checkSlide));

//go-top
window.addEventListener('scroll', goTop);

function goTop() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById('arrowTop').style.display = 'block';
  } else {
    document.getElementById('arrowTop').style.display = 'none';
  }
}