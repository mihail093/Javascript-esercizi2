//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/*
for (let i = 0; i < numeri.length; i++) {if (numeri[i] <= numeri[i + 1]) {continue;}
else { console.log(numeri[i] + " è il numero cercato");}
break;}
*/

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/*
for (let i = 0; i < numeri.length; i++) {
    if (numeri[i] < 5) {
        console.log(numeri[i] + " - Tiny");
    } else if (numeri[i] < 10) {
        console.log(numeri[i] + " - Small");
    } else if (numeri[i] < 15) {
        console.log(numeri[i] + " - Medium");
    } else if (numeri[i] < 20) {
        console.log(numeri[i] + " - Large");
    } else {
        console.log(numeri[i] + " - Huge");
    }
}
*/

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/*
let numeri = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (i = 0; i < numeri.length; i++) {
if (numeri[i] === 3 || numeri[i] === 8) {
continue;}
else {
console.log(numeri[i]);}}
*/

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/*
numeri.push(11, 12, 13, 14, 15)
for (let i = 0; i < numeri.length; i++) {
	if (numeri[i] === 0) {
console.log(numeri[i] + " zero");
}
 	else if (numeri[i] % 2 === 0) {
console.log(numeri[i] + " è un numero pari");
}
else if (numeri[i] % 2 === 1) {
console.log(numeri[i] + " è un numero dispari");}}
*/

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*
if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || num1 - num2 === 8 || num2 - num1 === 8) {
  console.log("il valore di uno dei numeri è 8 oppure la loro somma/sottrazione è 8");
} else {
  console.log("non trovato");
}
*/

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*
let totalShoppingCart;
let checkout;
const shipping = 10;

if (totalShoppingCart > 50) {
checkout = totalShoppingCart;
}
else {
checkout = totalShoppingCart + shipping;
}
console.log("Il totale da pagare è " + checkout + " €")
*/

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/**/

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/*
let isMale = true;
let gender = isMale ? "male" : "female";
*/

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/*
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz")
    }
    else {console.log(i)}
}
*/