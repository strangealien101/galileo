window.onload = function() {


/* Бургер */

document.querySelector(".icon-Frame-826").addEventListener("click", function () {

    document.querySelector(".menu-burger").classList.add("active");
    })
     
    document.querySelector(".icon-close-2").addEventListener("click", function () {
    
    document.querySelector(".menu-burger").classList.remove("active")
    })



    /*слайдер*/
let swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    rewind: true,
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  breakpoints: {
  
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  
  
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  
    1200: {
      spaceBetween: 30,
      slidesPerView: 4,
    },
  },
  });
  
  

/* Модальные окна */
let closeCall = document.querySelector('.modalBtn');
let playBtn = document.querySelector('.headerBlock_info__btn');
let openBlock = document.querySelector('.modal');
let pushCall = document.querySelector('.btnModal');
let windowThnks = document.querySelector('.modalInfoBoxTwo');
let windowOrder = document.querySelector('.modalInfoBox');
let winThks = document.querySelector('.modalInfoThanks');
let test = document.querySelector('.testSample');
let infotext = document.querySelector('.modalInfoTest');
let btnGreen = document.querySelector('.btnGreen');
let btnPush = document.querySelector('.blockHelpBlock_button')

playBtn.addEventListener('click', openWindow);

function openWindow () {
    openBlock.style.display = "flex";
}

closeCall.addEventListener('click', closeWindow);

function closeWindow () {
    openBlock.style.display = "none";
}

pushCall.addEventListener('click', newWindow);

function newWindow () {
    windowOrder.style.display = "none";
    windowThnks.style.display = "flex";
}

btnGreen.addEventListener('click', opentext);

function opentext () {
    test.display.style = "flex";
}

btnPush.addEventListener('click', lastWindow);

function lastWindow () {
    infotext.style.display = 'none',
    winThks.style.display = "flex";
}


}



document.querySelector('.search_wrap').addEventListener('input', function(ev) {
    this.classList.toggle('enter', ev.target.value != '');
  });
  document.querySelector('.search_clear').addEventListener('click', function(ev) {
    this.previousElementSibling.value=''; this.previousElementSibling.focus();
    this.previousElementSibling.dispatchEvent(new Event('input', {'bubbles': true}));
  });