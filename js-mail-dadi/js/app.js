//EMAIL


let scelta = prompt("Premi 1 per le email, 2 per i dadi");
if(scelta == 1){
    
    let arreyEmail = ["ruspa@gmail.com", "lezzo@gmail.com", "brutto@gmail.com"];
    
    personalEmail = prompt("Inserisci la tua email");
    arreyEmail.push(personalEmail)
    console.log('array'+arreyEmail);
    
    researchEmail = prompt("Quale email stai cercando?");
    let risultato = arreyEmail.includes(researchEmail);
    console.log(risultato); 
    
    let printEmail = document.querySelector('body');
    if(risultato==true){
        printEmail.innerHTML = ('<h1>Email: '+researchEmail+' è presente</h1>');
    }else{
        printEmail.innerHTML = ('<h1>Email: '+researchEmail+' non è presente</h1>');
    }

    //DADI
}else if(scelta == 2){
   
    for(let i=0 ; i<=1 ; i++){
        
        let utenteRandom = Math.floor(Math.random()*6);
        console.log('numero utente:'+utenteRandom);
        let pcRandom = Math.floor(Math.random()*6);
        console.log('numero pc:'+pcRandom);
       
        if(utenteRandom==pcRandom){
            alert('PARI')
        }else if(utenteRandom>pcRandom){
            alert('HAI VINTO')
        }else{
            alert('HAI PERSO')
        }
        i = prompt("Premi 0 per riprovare o 1 per chiudere");
    }
    console.log('fine')
}