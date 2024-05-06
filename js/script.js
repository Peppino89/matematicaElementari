var num1 = document.getElementById('numero1');
var num2 = document.getElementById('numero2');
var numTabellina = document.getElementById('numTabellina');
var risultato = document.getElementById('risultato');
var risultatoTabellina = document.getElementById('risultatoTabellina');


function calcolaSomma() {
 
    var x = parseInt(num1.value);
    var y = parseInt(num2.value);
    var somma;

    if (isNaN(x) || isNaN(y)) {
        alert("Dati non validi inserisci dei valori numerici ");
    }
    else {
        if (document.getElementById('tabellina').style !== "50px") {
            document.getElementById('tabellina').style = "50px";
        }
        somma = x + y;
        risultato.innerText ="Risultato:  "+x+" + "+y+"= "+somma+" .";
    }


}

function calcolaDifferenza() {
 
    var x = parseInt(num1.value);
    var y = parseInt(num2.value);
    var differenza;

    if (isNaN(x) || isNaN(y)) {
        alert("Dati non validi inserisci dei valori numerici ");
    }
    else {
         if (document.getElementById('tabellina').style !== "50px") {
            document.getElementById('tabellina').style = "50px";
        }
        differenza = x - y;
        risultato.innerText ="Risultato:  "+x+" - "+y+"= "+differenza+" .";
    }


}

function calcolaProdotto() {
 
    var x = parseInt(num1.value);
    var y = parseInt(num2.value);
    var prodotto;

    if (isNaN(x) || isNaN(y)) {
        alert("Dati non validi inserisci dei valori numerici ");
    }
    else {
         if (document.getElementById('tabellina').style !== "50px") {
            document.getElementById('tabellina').style = "50px";
        }
        prodotto = x * y;
        risultato.innerText ="Risultato:  "+x+" x "+y+"= "+prodotto+" .";
    }


}

function calcolaDivisione() {
 
    var x = parseInt(num1.value);
    var y = parseInt(num2.value);
    var divisione;

    if (isNaN(x) || isNaN(y)) {
        alert("Dati non validi inserisci dei valori numerici ");
    }
    else {
        if (y === 0) {
            document.getElementById('tabellina').style.marginTop = "195px";
            risultato.innerText = "Non si può dividere per 0 spiegazione: Immagina che hai un sacchetto di caramelle e vuoi dividerle tra te e i tuoi amici. Se hai 6 caramelle e ci sono 2 amici con te, puoi darne 3 a ciascuno, giusto? Ma cosa succederebbe se volessi dividere le stesse caramelle tra te e 0 amici? Non potresti farlo perché non" +
                " hai nessuno con cui dividerle. Quindi, non si può dividere per zero perché non c'è nessun gruppo a cui assegnare le cose che vuoi dividere. È un po' come cercare di dare caramelle a persone che non ci sono! Sembra strano, vero? Ecco perché non possiamo dividere per zero.";
        }
        else {
             if (document.getElementById('tabellina').style !== "30px") {
            document.getElementById('tabellina').style = "30px";
        }
            divisione = x / y;
           risultato.innerText ="Risultato:  "+x+" / "+y+"= "+divisione+" .";
        }
        
    }


}

function stampaTabellina() {
    
    var x = parseInt(numTabellina.value);
    risultatoTabellina.innerText = "";

    if (isNaN(x)) {
        alert("Dato non valido inserisci un valore numerico ");
    }
    else {
        for (var i = 0; i <= 10; i++){
            var ris = x * i;
            risultatoTabellina.innerText += "\n" + x + " x " + i + " = " + ris + " .";
        }
    }
}



function resetta() {
 
    num1.value = "";
    num2.value = "";
    
    risultato.innerText = "";
   document.getElementById('tabellina').style.marginTop = "30px";


}


function resettaTabellina() {
    numTabellina.value = "";
     risultatoTabellina.innerText = "";
    document.getElementById('tabellina').style.marginTop = "30px";
}