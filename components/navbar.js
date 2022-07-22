function navbar(){
    return` <div id="logo">
    <img src="https://ketto.gumlet.io/assets/images/logo-light-bg.svg?w=70&dpr=1.0">
   </div>
   <div id="content">
    <h4>Browse Fundraisers</h4>
    <h4>Fundraise For </h4>
    <h4>How it works</h4>
    <div id="vl"></div>
    <img id="search_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfbiyVfcLXpyNbNJHupID7hbeDmZytHMJ42Q&usqp=CAU" >
    <h4 id="search">Search</h4>
   </div>

    <div id="imgbox">
   <div id="left_nav">
   <img id="whatsapp_logo" src="data:image/png;base64,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">
    <h3 id="shift2">Chat</h3>
</div>

<div id="left_nav2">
     <h3 id="shift">Start a Fundraiser</h3>
 </div>
 <h3 id="signin" >Sign In</h3>
</div>

</div>`
};

export {navbar}