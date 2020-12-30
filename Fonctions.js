let jaugeBanque = 50;
let jaugePeuple = 50;
let jaugeReligion = 50;
let jaugeArmee = 50;
let ageJoueur = 18;


// Définition des fonctions pour gérer les cartes
function Ajout(list_cartes,nouvelle){
    if (list_cartes.indexOf(nouvelle)==-1){
        list_cartes.push(nouvelle);
    }   
}


function Supp(list_cartes,bye){
    var index = list_cartes.indexOf(bye);
    if (index > -1) {
        list_cartes.splice(index, 1);
    } 
}

// piochons une carte au hasard parmis les cartes valides
function piocher(list_cartes){
    const nb_cartes_jouables = list_cartes.length;
    const random = Math.floor(Math.random() * Math.floor(nb_cartes_jouables));
    return list_cartes[random]; // la carte pioché aleatoirement
} 

//met a jour la carte afficher
function changeCarte(carteChoisie){
    document.getElementById("image").src = carteChoisie.recupimage();
    document.getElementById("titre").innerText=carteChoisie.getname();
    document.getElementById("txtD").innerText = carteChoisie.getactionD(); 
    document.getElementById("txtG").innerText = carteChoisie.getactionG(); 
    document.getElementById("description").innerText = carteChoisie.getdescriptifs();
}

// Définition des effets déclenchés par les cartes
const BanqueContent = function() {
    jaugeBanque ++;
    console.log("jauge banque =",jaugeBanque);
}

const BanquePASContent = function() {
    jaugeBanque --;
    console.log("jauge banque =",jaugeBanque);
}

// Marche pas avec le activeeffet a cause du for each !!!

// //sens = "P" pour augmenter, ="M" pour descendre
// function BanqueModif(nombre,sens){
//     if(sens=="M"){
//         for(let i=0 ; i<nombre ; i++){
//             jaugeBanque --;
//         } 
//     } 
//     if(sens=="P"){
//         for(let i=0 ; i<nombre ; i++){
//             jaugeBanque --;
//         } 
//     } 
// } 

const MilitaireContent = function() {
    jaugeArmee ++;
    console.log("jauge armée =",jaugeArmee);
}

const MilitairePASContent = function() {
    jaugeArmee --;
    console.log("jauge armée =",jaugeArmee);
}

const PeupleContent = function() {
    jaugePeuple ++;
    console.log("jauge peuple =",jaugePeuple);
}

const PeuplePasContent = function() {
    jaugePeuple --;
    console.log("jauge peuple =",jaugePeuple);
}

const empoisonné = function() {
    console.log("poisoné");
}
const hallucine = function() {
    console.log("halluciné");
}

const ReligionContent = function() {
    console.log("jauge religion =",jaugeReligion);
    jaugeReligion ++;
}

const ReligionPASContent = function() {
    console.log("jauge religion =",jaugePeuple);
    jaugeReligion --;
}

