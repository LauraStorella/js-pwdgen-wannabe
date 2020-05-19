// Richiesta Nome Utente
var nomeUtente = prompt('Inserisci il tuo nome (in minuscolo)');
console.log(nomeUtente);

// Richiesta Cognome Utente
var cognomeUtente = prompt('Inserisci il tuo cognome (in minuscolo)');
console.log(cognomeUtente);

// Richiesta colore preferito Utente
var coloreUtente = prompt('Inserisci il tuo colore preferito (in minuscolo)');
console.log(coloreUtente);

// Richiesta anno corrente
var annoCorrente = prompt('Inserisci le ultime due cifre dell anno in corso');
console.log(annoCorrente);

// Genera Password
var psdUtente = nomeUtente+cognomeUtente+coloreUtente+annoCorrente;
console.log(psdUtente);
document.getElementById('psdGenerator').innerHTML = psdUtente;

// Conferma Login Utente
alert('Login esuguito con successo!');

// Saluto Utente
var salutoUtente = 'Ciao ' + nomeUtente + '!';
console.log(salutoUtente);
document.getElementById('hello').innerHTML = salutoUtente;

var welcomeUtente = 'Benvenuto/a sul tuo profilo.';
console.log(welcomeUtente);
document.getElementById('welcome').innerHTML = welcomeUtente;
