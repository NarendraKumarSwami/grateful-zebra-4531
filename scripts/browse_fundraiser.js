// import navbar.js for navbar 
import {navbar} from '../components/navbar.js';
// import sign_in.js file for append
  import {appendPopLogin, toggleLogin} from '../components/sign_in.js';
// import footer.js for footer
import {footer} from  '../components/footer.js';

// import data json from data file
  let data = await fetch('./data.json');
  let response = await data.json();
  

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


// add data  
  let appendData = (response)=>{
    document.getElementById('middle-right-bottom').innerText = '';
      if(response.length == 0){
        document.getElementById('middle-right-bottom').innerText = 'There is no Data ';
        return;
      }
       response.forEach(el=>{
             let div = document.createElement('div');
             let img = document.createElement('img');
             img.src = el.image;
             let heading = document.createElement('h1');
             heading.innerText = el.heading;

             let div1 = document.createElement('div');
            
             let userImage = document.createElement('img');
             userImage.ser = el.userImage;
             let name = document.createElement('p');
             name.innerText  = `By ${el.name}`;
             div1.append(userImage, name);
             let raiseMoney = document.createElement('p');
             raiseMoney.innerText= el.raiseMoney;
             let days = document.createElement('p');
             days.innerText = `${el.days} left `;

             let lastDonation = document.createElement('p');
             lastDonation.innerText = el.status;
             let supporters = document.createElement('p');
             supporters.innerText = el.supporters;

             div.append(img, heading, div1, raiseMoney, days, lastDonation, supporters);

             document.getElementById('middle-right-bottom').append(div);
       })
  }
  appendData(response);


  let categoriesFilter  = (value)=>{
       if( value == 'all categories'){
         return  appendData(response);
       }
      let new_res =    response.filter(el=>{
                 return el.categories == value;
         });
       
         appendData(new_res);
  }
  let locationFilter  = (value)=>{
    if( value == 'all locations'){
      return  appendData(response);
    }
    let new_res =    response.filter(el=>{
               return el.location == value;
       });

       appendData(new_res);
}
let typeFilter  = (value)=>{
  if( value == 'all types'){
    return  appendData(response);
  }
  let new_res =    response.filter(el=>{
             return el.type == value;
     });

     appendData(new_res);
}

  document.getElementById('categories-select').addEventListener('change', ()=>{
          
           categoriesFilter(document.getElementById('categories-select').value);
  })
  document.getElementById('location-select').addEventListener('change', ()=>{
    locationFilter(document.getElementById('location-select').value);
  })
   document.getElementById('type-select').addEventListener('change', ()=>{
  typeFilter(document.getElementById('type-select').value);
   })