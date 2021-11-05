//Dati utente
const km = prompt('Inserisci quanti km vuoi percorrere');

const eta = prompt('Inserisci la tua età');

//Prezzo biglietto
const prezzoBiglietto = km * 0.21;

console.log(prezzoBiglietto)

//Sconto Minorenni
const scontoMin = ((prezzoBiglietto * 20) / 100);

console.log(scontoMin);

//Sconto Over 65
const scontoOver = ((prezzoBiglietto * 40) / 100);

console.log(scontoOver);

//--Calcolo prezzo finale--
let bigliettoFinale;

if( eta < 18 ){
  bigliettoFinale = (prezzoBiglietto - scontoMin)
} else if( eta > 65 ) {
  bigliettoFinale = (prezzoBiglietto - scontoOver)
}
else {
    bigliettoFinale = prezzoBiglietto
}

    console.log (bigliettoFinale);

//Inserimento prezzo in HTML
document.getElementById('ticket').innerHTML = bigliettoFinale + '€';