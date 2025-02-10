/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* STRINGA
e' come un quaderno pieno di lettere e parole, se vuoi scrivere il tuo nome o una frase usi le stringhe.
NUMERO
è un righello che misura con i numeri, se vuoi sapere quanti giochi hai, o contare i biscotti, usi i numeri.
BOOLEANO
è come un interruttore della luce, se è acceso(vero) e se è spento(falso). Se vuoi sapere se il cielo è blu(vero o falso) usi i booleani
UNDEFINED
è una scatola vuota, ci sta ma dentro non c'è niente. Hai una scatola ma non sai cosa metterci, usi "undefined"
NULL
è una stanza vuota, senza niente. Prima c'era una scatola nella stanza, se poi la togli diventa "null"

/* ESERCIZIO 2*/
let myName
myName = "Roberto"
console.log(myName)

/* ESERCIZIO 3*/
let number = 12
let number2 = 20
let addition = number + number2
console.log(addition)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.*/
 let x
 x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.*/
  myName = "Marino"
  /* const myName 
  myName = "Marino" */
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).*/
 addition = x - 4
 console.log(addition)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1
name1 = "john"
let name2
name2 = "John"
console.log(name1 !== name2)
/* EXTRA */
console.log(name1 === name2.toLowerCase())

