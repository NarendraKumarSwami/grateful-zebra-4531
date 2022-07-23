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

          let head = document.createElement('h3');
          head.innerText = 'Login';

          let flex = document.createElement('div');
          flex.setAttribute('id', 'login-flex');
          // this is first flex box
          let div1 = document.createElement('div');
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
          let fund = document.createElement('h3');
          let span3 = document.createElement('span');
          span3.innerText = 'Want to start fundraiser?';
          let a3 = document.createElement('a');
          fund.append(span3, a3);
          div1.append(form, option, p, fund);
           //this second flex box 
          let div2 = document.createElement('div');
          let line = document.createElement('hr');
          let or = document.createElement('span');
          or.innerText = 'Or';

          div2.append(line, or, line);


          // this is third flex box
          let div3 = document.createElement('div')
            
          flex.append(div1, div2, div3);
          div.append(close, head, flex, );

          document.querySelector('body').append(div);

}



export { appendPopLogin };
