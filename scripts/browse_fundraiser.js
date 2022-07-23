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
