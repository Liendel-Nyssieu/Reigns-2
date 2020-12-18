
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

function Active_Effets (cartes_select){
    alert("Carte obtenue : " + ` ${cartes_select.getname()}`);
    if (confirm(`${cartes_select.getdescriptifs()} \n OK = ${cartes_select.getactionD()} \n  Annuler = ${cartes_select.getactionG()}`)) {
        cartes_select.enclencheEffetsD();
    }
    else {cartes_select.enclencheEffetsG();}
}

// piochons une carte au hasard parmis les cartes valides
function piocher(list_cartes){
    const nb_cartes_jouables = list_cartes.length;
    const random = Math.floor(Math.random() * Math.floor(nb_cartes_jouables));
    return list_cartes[random]; // la carte pioché aleatoirement
} 

// Définition des effets déclenchés par les cartes
const BanqueContent = function() {
    jaugeBanque ++;
    console.log(jaugeBanque);
}

const BanquePASContent = function() {
    jaugeBanque --;
    console.log(jaugeBanque);
}

const MilitaireContent = function() {
    jaugeArmee ++;
    console.log(jaugeArmee);
}

const MilitairePASContent = function() {
    jaugeArmee --;
    console.log(jaugeArmee);
}

const PeupleContent = function() {
    jaugePeuple ++;
    console.log(jaugePeuple);
}

const PeuplePasContent = function() {
    jaugePeuple --;
    console.log(jaugePeuple);
}

const empoisonné = function() {
    console.log("poisoné");
}
const hallucine = function() {
    console.log("halluciné");
}

const ReligionContent = function() {
    console.log("La religion est contente");
    jaugeReligion ++;
}

const ReligionPASContent = function() {
    console.log("La religion est contente");
    jaugeReligion --;
}