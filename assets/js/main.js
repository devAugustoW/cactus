/*================= SHOW MENU =================*/
const navMenu = document.querySelector('.nav__menu');
const navToggle = document.querySelector('.nav__toggle');
const navClose = document.querySelector('.nav__close');

/* Abrir Menu */
navToggle.addEventListener('click', () => {
   navMenu.classList.add('show-menu');
})

/* Fechar Menu */
navClose.addEventListener('click', () => {
   navMenu.classList.remove('show-menu');
})

/*============== REMOVER MENU MOBILE ==============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
   navMenu.classList.remove('show-menu');
};

navLink.forEach(link => {
   link.addEventListener('click', linkAction);
});

/*============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
   const header = document.getElementById('header')
   //Add classe se butão offset é maior que 50
   if (window.scrollY >= 50) {
      header.classList.add('blur-header');

   } else {
      header.classList.remove('blur-header');
      
   }
}

window.addEventListener('scroll', blurHeader)

/*==================== SCROLL UP ======================*/
const scrollUp =  () => {
   const scrollUpButton = document.getElementById('scroll-up')

   if (window.scrollY >= 350) {
      scrollUpButton.classList.add('show-scroll');

   } else {
      scrollUpButton.classList.remove('show-scroll');

  }
}
window.addEventListener('scroll', scrollUp);

/*================ SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
   const scrollDown = window.scrollY;

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 58;
      const sectionId = current.getAttribute('id');
      const sectionsLinks = document.querySelectorAll('.nav__menu a[href="#' + sectionId + '"]');

      sectionsLinks.forEach(link => {
         if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            link.classList.add('active-link');
         } else {
            link.classList.remove('active-link');
         }
      });
   });
};
window.addEventListener('scroll', scrollActive);
