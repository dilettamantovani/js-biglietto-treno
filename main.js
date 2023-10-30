// età, km

const chilometri = parseInt(prompt("Quanti km devi percorrere?", "100"));
const età = parseInt (prompt("Quanti anni hai?", "18"));


// controllo

if(isNaN(chilometri) || isNaN(età)) {
    console.log("input non valido")
    document.getElementById("age").innerHTML = "input non valido";
    document.getElementById("km").innerHTML = "input non valido";
}

else {
    console.log("Devi percorrere $(chilometri) km e hai $(età) anni");
    document.getElementById("age").innerHTML = " " + età + "anni";
    document.getElementById("km").innerHTML = " " + chilometri + "km";
}

// prezzo standard

const prezzoKm = chilometri * 0.21;
console.log("Il prezzo base del bisglietto è" + prezzoKm + "€");

// sconto

let prezzoFinale = prezzoKm.toFixed(2);
let sconto = "%"

if (isNaN(chilometri)) {
    console.log ("Errore");
    document.getElementById("price").innerHTML = "Impossibile calcolare il prezzo";
}

else if (età < 18) {
    prezzoFinale = prezzoKm.toFixed(2); - ((prezzoKm / 100) * 20);
    console.log("Il prezzo finale è di" + prezzoFinale + "€");
    document.getElementById("discount").innerHTML = "20" + sconto;
    document.getElementById("price").innerHTML = prezzoFinale + "€";
}

else if (età >= 65) {
    prezzoFinale = prezzoKm.toFixed(2); - ((prezzoKm / 100) * 40);
    console.log("Il prezzo finale è di" + prezzoFinale + "€");
    document.getElementById("discount").innerHTML = "40" + sconto;
    document.getElementById("price").innerHTML = prezzoFinale + "€";
}

else if (età >= 18 || età >= 65) {
    document.getElementById("price").innerHTML = prezzoFinale + "€";
}

else {
    console.log("Errore");
    document.getElementById("price").innerHTML = "Impossibile calcolare il prezzo";
}