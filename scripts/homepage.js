// import navbar.js for navbar 
  import {navbar} from '../components/navbar.js';
// import sign_in.js file for append
  import {appendPopLogin, toggleLogin} from '../components/sign_in.js';
// import footer.js for footer
import {footer} from  '../components/footer.js';

window.onload  = () =>{
          let link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = './styles/nav.css';
          // append this link to head of document
          document.querySelector('head').append(link);
          document.getElementById('navbar').innerHTML = navbar();

         document.getElementById('footerOne').innerHTML = footer();

       appendPopLogin();
       document.getElementById('signin').addEventListener('click', toggleLogin)
}



/* product slide-I start */

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

  /* product slide-I end */




  // slide2  strat

  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dotss = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dotss.length; i++) {
      dotss[i].className = dotss[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dotss[slideIndex-1].className += " active";
  }
// slide 2 end





