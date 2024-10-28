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


  $(document).ready(function(){ 
    $(".slide-one").owlCarousel({
      loop: false, //Зацикливаем слайдер
      margin:10, //Отступ от картино если выводите больше 1
      nav:false, //Отключил навигацию
      autoWidth: 300,
      responsive:{ //Адаптация в зависимости от разрешения экрана

          320:{
            spaceBetween: 20,
            slidesPerView: 1,
          },
          700: {
            spaceBetween: 20,
            slidesPerView: 2,
          },
          992:{
            spaceBetween: 20,
            slidesPerView: 3,
          },
          1200:{
            spaceBetween: 30,
            slidesPerView: 4,
          },
          2000: {
            spaceBetween: 30,
            slidesPerView: 5,
          },
      }
  });
}); 


document.querySelector('.search_wrap').addEventListener('input', function(ev) {
  this.classList.toggle('enter', ev.target.value != '');
});
document.querySelector('.search_clear').addEventListener('click', function(ev) {
  this.previousElementSibling.value=''; this.previousElementSibling.focus();
  this.previousElementSibling.dispatchEvent(new Event('input', {'bubbles': true}));
});

}



