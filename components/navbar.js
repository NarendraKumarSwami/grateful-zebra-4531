function navbar(){
    return`<div id="navbar108">
    <div id="logo">
        <a href="index.html">
        <img src="https://ketto.gumlet.io/assets/images/logo-light-bg.svg?w=70&dpr=1.0"></a>
       </div>
       <div id="content">
        <a href="browse_fundraiser.html"><p id="ptag1st">Browse Fundraisers</p></a>
       
        <select id="selects">
           <option id="options" value="" > Fundraiser For</option>
            <option id="options" value="">Treatment</option>
            <option id="options" value="">NGO Charity</option>
            <option id="options" value="">Other Causes</option>
          
          </select>
        <a href="./How_it_works.html"><p id="ptag1st">How it works</p></a>
        <div id="vl"></div>
        <img id="search_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfbiyVfcLXpyNbNJHupID7hbeDmZytHMJ42Q&usqp=CAU" >
        <p id="search">Search</p>
       </div>
    
        <div id="imgbox">
       <div id="left_nav">
      
        <button id="shift2">
            <img id="whatsapp_logo" src="https://cdn-icons-png.flaticon.com/128/733/733585.png">
            Chat</button>
    </div>
    
    <div id="left_nav2">
         <button id="shift" ><a href="./crowdfunding.html">Start a Fundraiser</a></button>
     </div>
     <h3 id="signin" >Sign In</h3>
    </div>
    
    </div>`
};

export {navbar}