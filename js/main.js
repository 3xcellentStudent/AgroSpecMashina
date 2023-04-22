window.onscroll = e => {
   const header = document.getElementById('header')
   pageYOffset > header.clientHeight ? header.classList.add('scrolled') : header.classList.remove('scrolled')
}

window.onresize = e => jobWithFadeClass()

function onEntry(entry) {
   entry.forEach(change => {
      change.isIntersecting ? change.target.classList.add('active') : change.target.classList.remove('active')
   });
}
const options = { threshold: [0.5] };
const observer = new IntersectionObserver(onEntry, options);
const botLine2 = document.querySelectorAll('.botLine2');
const bg_gear2 = document.querySelectorAll('.bg_gear2');
const bg_polygon1 = document.querySelectorAll('.bg_polygon1');
const bg_polygon2 = document.querySelectorAll('.bg_polygon2');
const bg_gear1 = document.querySelectorAll('.bg_gear1');

for (let elm of botLine2) {
   observer.observe(elm)
};
for (let elm of bg_gear2) {
   observer.observe(elm)
};
for (let elm of bg_polygon1) {
   observer.observe(elm)
};
for (let elm of bg_polygon2) {
   observer.observe(elm)
};
for (let elm of bg_gear1) {
   observer.observe(elm)
};


$(document).ready(function(){
   $('.next_sect_link').mPageScroll2id({
      offset:120,
      scrollSpeed: 1000,
      scrollEasing: 'easeInOutQuint'
   });
   $('.next_section').mPageScroll2id({
      offset: 100,
      scrollSpeed: 1000,
      scrollEasing: 'easeInOutQuint'
   });
   $(document).ready(function() {
      $('.gallery_slider').slick({
          slidesToShow:1,
          slidesToScroll:1,
          dots: true,
          pauseOnFocus:false,
          pauseOnHover:false
      });
  });

new WOW().init();

});


const servItemsWrap = document.querySelectorAll('.services_item_wrap')

const section4 = document.querySelector('.section4')
const sect1_left = document.querySelector('.sect1_left')
const sect2_text_bot = document.querySelector('.sect2_text_bot')
const sect2_text_top = document.querySelector('.sect2_text_top')

const maxWidthNumber = 768

function jobWithFadeClass(){
   const insertFunc = (method) => {
      const strFunc = `section4.classList.${method}('fadeIn')
      sect1_left.classList.${method}('fadeInLeft')
      sect2_text_bot.classList.${method}('fadeInLeft')
      sect2_text_top.classList.${method}('fadeInRight')
      servItemsWrap.forEach(item => {item.classList.${method}('fadeInRight')})`

      new Function(strFunc)()
   }

   if(window.innerWidth <= maxWidthNumber) insertFunc('remove')
   else insertFunc('add')
}

const popupBg = document.querySelector('.popup_bg');
const popup_bodyBlocked = document.querySelector('body')
const servModal = document.querySelectorAll('.serv_modal')
const serv_mod_slider = document.querySelector('.serv_modal_slider')

function jobWithModals(method, index){
   const strFunc = `popupBg.classList.${method}('active');
   servModal[${index}].classList.${method}('active_services')
   popup_bodyBlocked.classList.${method} ('active')
   serv_mod_slider.classList.${method}('active_services')`

   new Function(strFunc)()
}

document.querySelectorAll('.serv-open').forEach((item, index) => {
   item.onclick = e => {
      e.preventDefault();
      jobWithModals('add', index)
   }
})

document.querySelectorAll('.serv-close').forEach((item, index) => {
   item.onclick = e => {
      e.preventDefault();
      jobWithModals('remove', index)
   }
})

document.onpointerdown = e => {
   if(e.target === popupBg) {
      popupBg.classList.remove('active');
      popup_bodyBlocked.classList.remove ('active')
      serv_mod_slider.classList.remove('active_services')
      servModal.forEach(item => {
         item.classList.remove('active_services')
      })
   }
}


const burger_header = document.querySelector('.burger_header');
const close_burger_header = document.querySelector('.close_burger_header');
const header_nav = document.querySelector('.header_nav');
const h1 = document.querySelector('.h1')
const h1_img = document.querySelector('.h1_img')
const close_burger_header2 = document.querySelector('.close_burger_header2')
const next_sect_link = document.querySelectorAll('.next_sect_link')
const popup_bg2 = document.querySelector('.popup_bg2')

function jobWithBurger(method){
   const strFunc = `header_nav.classList.${method}('active')
   burger_header.classList.${method}('opacity0')
   close_burger_header.classList.${method}('active')
   h1.classList.${method}('opacity0')
   h1_img.classList.${method}('opacity0')
   popup_bodyBlocked.classList.${method} ('active')
   popup_bg2.classList.${method}('active')`
   
   new Function(strFunc)()
}

burger_header.addEventListener('click', (e) => {
      e.preventDefault();
   jobWithBurger('add')
})

close_burger_header.addEventListener('click', (e) => {
   e.preventDefault();
   jobWithBurger('remove')
})

next_sect_link.forEach((button) => {
   button.addEventListener('click', (e) => {
       e.preventDefault();
      jobWithBurger('remove')
   })
})

const galImage = document.querySelectorAll('.gallery_image')
const galBigImg = document.querySelectorAll('.gallery_slider_big_img')
const gal_img_close = document.querySelectorAll('.gal_img_close')

function jobWithGallery(method, index){
   const strFunc = `galBigImg[${index}].classList.${method}('active')
   popupBg.classList.${method}('active')
   popup_bodyBlocked.classList.${method}('active')`
   
   new Function(strFunc)()
}

galImage.forEach((item, index) => {
   item.onclick = e => {
      e.preventDefault()
      jobWithGallery('add', index)
   }
})

gal_img_close.forEach((item, index) => {
   item.onclick = e => {
      e.preventDefault()
      jobWithGallery('remove', index)
   }
})

jobWithFadeClass()