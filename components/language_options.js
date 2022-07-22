// lagouguage options 
 
let addLanguage = (container) =>{
        container.inerText = '';
        let  select = document.createElement('select');
        let option1 = document.createElement('option');
        option1.setAttribute('value', 'English');
        option1.innerText = 'English';
        let option2 = document.createElement('option');
        option2.setAttribute('value', 'हिन्दी');
        option2.innerText = 'हिन्दी';
        let option3 = document.createElement('option');
        option3.setAttribute('value', 'తెలుగు');
        option3.innerText = 'తెలుగు';
        let option4 = document.createElement('option');
        option4.setAttribute('value', 'தமிழ்');
        option4.innerText  = 'தமிழ்';

        select.append(option1, option2, option3, option4);

        container.append(select);

}


export { addLanguage}