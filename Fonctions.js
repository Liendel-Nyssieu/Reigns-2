// let ageJoueur = 18;


// Définition des fonctions pour gérer les cartes
function Ajout(list_cartes,nouvelle) {
    if (list_cartes.indexOf(nouvelle) == -1) {
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
const BanqueContent = function(value) {
    //jaugeBanque = jaugeBanque + parseInt(value); // Il comprenait pas que value est un entier
    //console.log("jauge banque = ", jaugeBanque)
    document.getElementById("bank").value = document.getElementById("bank").value + parseInt(value);
}

const MilitaireContent = function(value) {
    // jaugeArmee = jaugeArmee + parseInt(value);
    //console.log("jauge armée = ", jaugeArmee);
    document.getElementById("army").value = document.getElementById("army").value + parseInt(value);


}

const PeupleContent = function(value) {
    // jaugePeuple = jaugePeuple + parseInt(value);
    //console.log("jauge peuple = ", jaugePeuple);
    document.getElementById("people").value = document.getElementById("people").value + parseInt(value);

}

const ReligionContent = function(value) {
    // jaugeReligion = jaugeReligion + parseInt(value);
    //console.log("jauge religion =", jaugeReligion);
    document.getElementById("religion").value = document.getElementById("religion").value + parseInt(value);
}  


