/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content')

/*===== SEARCH SHOW =====*/
/* Validate if constant exists */
if(searchButton){
  searchButton.addEventListener('click', () =>{
    searchContent.classList.add('show-search')
  })
}
  
/*===== SEARCH HIDDEN =====*/
/* Validate if constant exists */
if(searchClose){
  searchClose.addEventListener('click', () =>{
    searchContent.classList.remove('show-search')
  })
}

/*=============== LOGIN ===============*/
const loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content'),
      loginForm = document.getElementById('login-form'),
      loginButton2 = document.getElementById('login-button2'),
      // loginClose2 = document.getElementById('login-button'), 
      successBanner = document.getElementById('success-banner');
      

/*===== LOGIN SHOW =====*/
/* Validate if constant exists */
if (loginButton) {
    loginButton.addEventListener('click', () => {
        loginContent.classList.add('show-login');
    });
}

if (loginButton2) {
  loginButton2.addEventListener('click', () => {
      loginContent.classList.add('show-login');
  });
}

/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */
if (loginClose) {
    loginClose.addEventListener('click', () => {
        loginContent.classList.remove('show-login');
    });
}

/*===== LOGIN SUBMIT =====*/
if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent default form submission

        // Display success banner
        successBanner.classList.remove('hidden');

        // Refresh page after a short delay
        setTimeout(() => {
            window.location.reload();
        }, 2000);  // Adjust the delay as needed
    });
}


/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the shadow-header class to the header tag
  this.scrollY >= 50 ? header.classList.add('shadow-header') 
                     : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
  loop: true,
  spaceBetween: -24,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints:{
    1220: {
      spaceBetween: -32,
    },
  },
})

/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper('.featured__swiper', {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  breakpoints:{
    1150: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
})

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new__swiper', {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',

  breakpoints:{
    1150: {
      slidesPerView: 3,
    },
  },
})

/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper('.testimonial__swiper', {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',

  breakpoints:{
    1150: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
})

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true, // Animations repeat
})

sr.reveal(`.home__data, .featured__container, .new__container, 
           .join__data, .testimonial__container, .footer`)
sr.reveal(`.home__images`, {delay: 600})
sr.reveal(`.services__card`, {interval: 100})
sr.reveal(`.discount__data`, {origin: 'left'})
sr.reveal(`.discount__images`, {origin: 'right'})

// /*=============== event listener for heart button ===============*/

// document.addEventListener('DOMContentLoaded', function () {
//   // Heart button toggle
//   const heartButtons = document.querySelectorAll('.heart-button');

//   heartButtons.forEach(button => {
//       button.addEventListener('click', function () {
//           const icon = this.querySelector('i');
//           if (icon.classList.contains('ri-heart-3-line')) {
//               icon.classList.remove('ri-heart-3-line');
//               icon.classList.add('ri-heart-fill');
//           } else {
//               icon.classList.remove('ri-heart-fill');
//               icon.classList.add('ri-heart-3-line');
//           }
//       });
//   });

  // Eye button zoom
  const zoomButtons = document.querySelectorAll('.zoom-button');
  const modal = document.createElement('div');
  modal.classList.add('modal');
  document.body.appendChild(modal);

  zoomButtons.forEach(button => {
      button.addEventListener('click', function () {
          const imgSrc = this.closest('.featured__card').querySelector('.featured__img').src;
          const modalImg = document.createElement('img');
          modalImg.src = imgSrc;
          modal.innerHTML = ''; // 清空之前的内容
          modal.appendChild(modalImg);
          modal.classList.add('active');
      });
  });

  // Close modal on click outside the image
  modal.addEventListener('click', function (e) {
      if (e.target === modal) {
          modal.classList.remove('active');
      }
  });
// });


