
// creazione dell'array con dentro le immagini
let gruppoImmagini = document.getElementsByClassName("js-img");
console.log(gruppoImmagini);

let gruppoImmagini1 = document.getElementsByClassName("js-img1")
// creazione della variabile che aggiorna l'immagine

let upgrade=2;
// creazione dell'evento click per andare avanti
let buttonAvanti = document.getElementById("scorrere-avanti");
buttonAvanti.addEventListener("click", function () {
    if (upgrade <= gruppoImmagini.length -1) {
       
        // togliere classe 
        gruppoImmagini1[upgrade].classList.remove("d-compari")
        gruppoImmagini[upgrade].classList.remove("non-sfocatura") 
         //incremento   
        upgrade++;
        // aggiungere la classe 
        gruppoImmagini[upgrade].classList.add("non-sfocatura")
        gruppoImmagini1[upgrade].classList.add("d-compari")
        
        // bottone opposto rimossa classe quando ritorni indietro
        buttonindietro.classList.remove("d-nascosta")
        if (upgrade === gruppoImmagini.length -1 ){
            buttonAvanti.classList.add("d-nascosta")
        }
    }
})
// creazione dell'evento click per tornare indietro
let buttonindietro = document.getElementById("scorrere-indietro");
buttonindietro.addEventListener("click", function () {
    if (upgrade <= gruppoImmagini.length -1) {
        // togliere classe 
        gruppoImmagini1[upgrade].classList.remove("d-compari")
        gruppoImmagini[upgrade].classList.remove("non-sfocatura")  
        // decremento    // 
        upgrade--;
        // aggiungere la classe
        gruppoImmagini[upgrade].classList.add("non-sfocatura") 
        gruppoImmagini1[upgrade].classList.add("d-compari")
         // bottone opposto rimossa classe quando vai avanti indietro
        buttonAvanti.classList.remove("d-nascosta")
        if (upgrade === 0 ){
            buttonindietro.classList.add("d-nascosta")
         }
         console.log(upgrade);
    }
})




