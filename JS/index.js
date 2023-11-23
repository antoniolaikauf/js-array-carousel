
// creazione dell'array con dentro le immagini
let gruppoImmagini = document.getElementsByClassName("js-img");
// console.log(gruppoImmagini[0]);
// creazione della variabile che aggiorna l'immagine
let upgrade = 0;

// creazione dell'evento click
let buttonAvanti = document.getElementById("scorrere-avanti");
buttonAvanti.addEventListener("click", function () {
    if (upgrade <= gruppoImmagini.length -1) {
        gruppoImmagini[upgrade].classList.remove("d-compari")      
        upgrade++;

        gruppoImmagini[upgrade].classList.add("d-compari")

    }
})
