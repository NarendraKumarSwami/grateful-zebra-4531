// this will give a pop up on page


let appendPopLogin  = ()=>{
          // add sign_in.css file to head of html file
          let link = document.createElement('link')
          link.rel  = 'stylesheet';
          link.href = './styles/sign_in.css';
          // add font awsome icon to head of html file
          let link1 = document.createElement('link');
          link1.rel = 'stylesheet';
          link1.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
          // append the link to head 
          document.querySelector('head').append(link, link1);



          // create a div for pop and append to body of document 
          let div = document.createElement('div');
          div.setAttribute('id', 'loginPopUp');

          let close = document.createElement('i');
          close.setAttribute('class', 'fa fa-close');
          close.addEventListener('click', toggleLogin);
          let head = document.createElement('h1');
          head.innerText = 'Login';

          let flex = document.createElement('div');
          flex.setAttribute('id', 'login-flex');
          // this is first flex box
          let div1 = document.createElement('div');
          div1.setAttribute('id', 'login-flex-left')
          let form = document.createElement('form');
          let input = document.createElement('input');
          input.type = 'email';
          input.placeholder = 'Email';
          let button = document.createElement('button');
          button.type = 'submit';
          button.innerText = 'Get OTP';
          form.append(input, button);
          
          let option = document.createElement('a');
          option.href= '#';
          option.innerText = 'Login via Password';
          let p = document.createElement('p');
          let a1 = document.createElement('a')
          a1.href = '#';
          a1.innerText = 'Terms of Service';
          let a2 = document.createElement('a');
          a2.href ='#';
          a2.innerText = 'Privacy Policy';
          let span1 = document.createElement('span');
          span1.innerText = 'By continuing yoiu agree to our ';
          let span2 = document.createElement('span');
          span2.innerText = 'and';
        
          p.append(span1, a1, span2, a2);
          let fund = document.createElement('h5');
          let span3 = document.createElement('span');
          span3.innerText = 'Want to start fundraiser?';
          let a3 = document.createElement('a');
          a3.href= './crowdfunding.html';
          a3.innerText = 'Click Here'
          fund.append(span3, a3);
          div1.append(form, option, p, fund);
           //this second flex box 
          let div2 = document.createElement('div');
          div2.setAttribute('id', 'login-flex-middle')
          let line = document.createElement('div');
          let or = document.createElement('span');
          or.innerText = 'OR';
          let line1 = document.createElement('div');

          div2.append(line, or, line1);


          // this is third flex box
          let div3 = document.createElement('div')
          div3.setAttribute('id', 'login-flex-right');
          let button1 = document.createElement('button')
          button1.innerHTML = '<img src="https://ketto.gumlet.io/assets/images/login/google.png?w=240&dpr=1.5"> login with Google'
          div3.append(button1);   
          flex.append(div1, div2, div3);
          div.append(close, head, flex);

          document.querySelector('body').append(div);

}

let toggleLogin  = ()=>{
    if(document.getElementById('loginPopUp').style.display == 'none'){
            document.getElementById('loginPopUp').style.display = 'flex';
    }else{
           document.getElementById('loginPopUp').style.display = 'none';
    }
}

export { appendPopLogin, toggleLogin};
