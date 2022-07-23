// import language options 
import { addLanguage } from "../components/language_options.js";

  window.onload = ()=>{
          addLanguage(document.getElementById('language'))
             appendPop()
        }


  // pop up just loading 
   
let appendPop = ()=>{
     let div = document.createElement('div');
     div.setAttribute('id', 'popUp')
     let p = document.createElement('p');
     p.innerText = `OTP is sent to ${JSON.parse(localStorage.getItem('users'))[0].mobile}`;
     let  button = document.createElement('button');
     button.innerText = 'DISS MISS';
     button.addEventListener('click', dissMiss)
     div.append(p, button)
    document.querySelector('#container').append(div)
}

let dissMiss  = ()=>{
        document.getElementById('popUp').style.display = 'none';

}