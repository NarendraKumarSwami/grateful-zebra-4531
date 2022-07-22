
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
 

