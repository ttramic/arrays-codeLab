let myExtras = [];
const myExtrasInput = document.getElementById('extraUdstyr');
const myExtrasListElement = document.getElementById('extraList');



myExtrasInput.addEventListener("change", addExtra);



function addExtra() {
    /* din map kode her... */
    myExtras.push(myExtrasInput.value);

    updateExtras();
}



function updateExtras() {
    let myText = '<strong>Du har valgt:</strong><br><ul> ';  


    myExtras.map((items)=> {
        
        myText = myText +'<li>' + items + '</li>';
        
        
    });

    myText = myText + '</ul>'

    myExtrasListElement.innerHTML = myText;
    
    

    


    /* din map kode her... */
}








