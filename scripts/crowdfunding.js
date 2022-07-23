// import navbar.js for navbar 
  import {navbar} from '../components/navbar.js';
// import sign_in.js file for append
  import {appendPopLogin} from '../components/sign_in.js';

window.onload  = () =>{
          let link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = './styles/nav.css';
          // append this link to head of document
          document.querySelector('head').append(link);
          document.getElementById('navbar').innerHTML = navbar();

       appendPopLogin();
}
// crowdfuncding 


document.querySelector('form').addEventListener('submit', () =>{
      event.preventDefault();
      let data = event.target.children;
     let user = new User(data[0].children[1].value, data[1].value, data[2].value, data[3].value, data[4].value)
     let userData = JSON.parse(localStorage.getItem('users'))  || [];
     userData.push(user);
     localStorage.setItem('users', JSON.stringify(userData));

     // location to new page 
     
})

// object fucntion for sign up
function User(type, name, email, password, mobile){
        this.type = type,
        this.name = name,
        this.email = email,
        this.password = password,
        this.mobile = mobile

}
