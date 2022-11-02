// Stworz aplikacje chat

// Stworz aplikacje chat, ktora zawiera okno chatu i formularz wpisywania wiadomosci.

// 1. Formularz powinien miec 2 inputy, pole author i pole message
// 2. Okno chatu, powinno wyswietlac wyslane wiadomosci wraz z jego autorem
// 3. Wiadomosci zapisz jako tablica obiektow i umiesc je w localStorage
// 4. Po wejsciu na strone, przeczytaj wiadomosci z localStorage i wyswietl w oknie chatu

// * Dodatkowe

// 5. Nad oknem chatu, zrob header z searchem (input + przycisk search). Po wcisnieciu przycisku, przefiltruj wiadomosci. Filtruj tylko po message.
// 6. Ostyluj zadanie zeby przypominalo realny chat :)
// 7. Odczytywanie i zapisywanie do localStorage stworz jako osobne funkcje, zapisz je w osobnych plikach i zaimportuj do glownego pliku chat.js

const handleFormchat=document.querySelector("#chatForm");
const handleButtonsend=document.querySelector("#sendMessage");
const handleList=document.querySelector("#list");

const handleSearchForm=document.querySelector("#searchForm");
const handleButtonsearch=document.querySelector("#search");

const handleResetForm=document.querySelector("#resetForm");

const tab =[];

 let tab1 = JSON.parse(localStorage.getItem('tabel'));

 if(tab === null) {
  tab = [];
 }

handleList.innerHTML="";
tab1.forEach((element) => {
    handleList.innerHTML+=`<tr><td class="list_author">${element.author}</td><td class="list_message">${element.message}</td></tr>`;
});

const sendMessage=(event)=>{
    event.preventDefault(); 
    const author=document.querySelector("#author").value;
    const message=document.querySelector("#message").value;
    const text={author: `${author}`,message:`${message}`};
    //zapis ostatniego elementu do tablicy

    const tab = JSON.parse(localStorage.getItem('tabel'));
    tab.push(text);
    console.log(tab);
    //zapis tablicy do localStorage
    localStorage.setItem('tabel',JSON.stringify(tab));

    //odczyt z localStorage
    let tab1 = JSON.parse(localStorage.getItem('tabel'));
    
    handleList.innerHTML="";
    tab1.forEach((text) => {
        handleList.innerHTML+=`<tr><td class="list_author">${text.author}</td><td class="list_message">${text.message}</td></tr>`;
    });


}


const searchMessage=(event)=>{
    event.preventDefault(); 
    const textValue=document.querySelector("#text").value;

    //odczyt z localStorage
    let tab1 = JSON.parse(localStorage.getItem('tabel'));

    const findMessage=tab1.filter((text) => {
        return text.message.includes(textValue);
    })

    

    handleList.innerHTML="";
      findMessage.forEach((text) => {
        
        handleList.innerHTML+=`<tr><td class="list_author">${text.author}</td><td class="list_message">${text.message}</td></tr>`;

    })

}

const resetSearch=(event)=>{

    //odczyt z localStorage
    let tab1 = JSON.parse(localStorage.getItem('tabel'));
    
    handleList.innerHTML="";
    tab1.forEach((element) => {
        handleList.innerHTML+=`<li>author: ${element.author}<br>message: ${element.message}</li>`;
    });    

}

handleFormchat.addEventListener('submit',sendMessage);
handleSearchForm.addEventListener('submit',searchMessage);
handleResetForm.addEventListener('submit',resetSearch);