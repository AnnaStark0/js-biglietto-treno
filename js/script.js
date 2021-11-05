
//Dati utente
const km = prompt ('Inserisci quanti km vuoi percorrere');

const eta = prompt ('Inserisci la tua età');

//Calcolo prezzo biglietto
const prezzoBiglietto = km * 0.21;

console.log (prezzoBiglietto)

//Sconto Minorenni
const scontoMin = ((prezzoBiglietto * 20) / 100);

console.log (scontoMin);

//Sconto Over 65
const scontoOver = ((prezzoBiglietto * 40) / 100);

console.log (scontoOver);