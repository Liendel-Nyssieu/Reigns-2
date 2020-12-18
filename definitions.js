function carte(nom, descriptif,action_droite,action_gauche,effet_droite, effet_gauche) {
    //nom de la carte
    this.name = nom;

    //descriptif principale de la carte
    this.descriptif= descriptif;

    //descriptif du choix si on va a gauche ou a droite 
    this.actionD=action_droite; 
    this.actionG=action_gauche;

    //Effets de chaque coté -> des listes
    this.effetD=effet_droite;
    this.effetG=effet_gauche;

    // ajouter un champs image ?
}

//Les fonctions pour recuperer le champs de la structure carte
//je sais pas si ça va servir mais je les creer au cas ou
carte.prototype.getname = function() {
    return this.name ;
};
carte.prototype.getdescriptifs = function() {
    return this.descriptif;
};
carte.prototype.getactionD = function() {
    return this.actionD;
};
carte.prototype.getactionG = function() {
    return this.actionG;
};
carte.prototype.geteffetD = function() {
    return this.effetD;
};
carte.prototype.geteffetG = function() {
    return this.effetG;
};
carte.prototype.enclencheEffetsG = function() {
    this.effetG.forEach(element => element());
};
carte.prototype.enclencheEffetsD = function() {
    this.effetD.forEach(element => element());
};

// Définition des variable de jauge (titre indicatif pour tester ensuite)
let jaugeBanque = 20;
let jaugePeuple = 10;
let jaugeReligion = 24;
let jaugeArmee = 17;
let ageJoueur = 50;

// Définition des effets -- PENSER A MODIFIER LES FONCTIONS DE JAUGE 
// JE VEUX DES FONCTION ON PUISSE CHOISIR DE COMBIEN ON AUGMENTE OU DIMINUE LA JAUGE 

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

//je les definis ici pour pouvoir les utiliser dans les effetes des cartes après
let toutes_les_cartes=[];
let cartes_jouables=[];

//nom, descriptif,action_droite,action_gauche,effet_droite, effet_gauche
//description pour bandit
const description_bandit = "Un groupe de bandits pille nos terres et terrorise notre peuple. Nous devons envoyer notre armée !"
const description_effetD_bandit = "Ne rien faire.";
const description_effetG_bandit = "Envoyer l'armée pour arréter les bandits";
let effetD_bandit =[PeuplePasContent,BanquePASContent];
let effetG_bandit =[PeupleContent,MilitairePASContent];

//description pour recolte bonne
const description_bonne_recolte = "Bonne nouvelle ! Les récoltes ont été fructueuses votre altesse. Nous pourrions en faire profiter le peuple, ou entreposer les excédents pour nous constituer des réserves."
const description_effetD_bonne_recolte = "Nourire le peuple";
const description_effetG_bonne_recolte = "Garder les recoltes pour soit";
let effetD_bonne_recolte =[PeupleContent];
let effetG_bonne_recolte =[BanqueContent];

//description pour mauvaise récolte
const description_mauvaise_recolte = "Monseigneur ! Les récoltes sont mauvaises cette année... Nous pourrions donner moins de pain au peuple ou réduire les rations de la garde, mais il faut choisir."
const description_effetD_mauvaise_recolte = "Nourrir le peuple";
const description_effetG_mauvaise_recolte = "Nourrir la garde";
let effetD_mauvaise_recolte =[MilitairePASContent, PeupleContent];
let effetG_mauvaise_recolte =[PeuplePasContent, MilitaireContent];

//description pour potion1
const description_potion1 = "Cher roi, j'ai préparé deux potions pour vous, laquelle désirez-vous boire ?"
const description_effetD_potion1 = "Choisir la potion rouge";
const description_effetG_potion1 = "Choisir la potion bleu";
let effetD_potion1 =[];
let effetG_potion1 =[];

//description pour potion2
const description_potion2 = "Souhaiteriez-vous être un leader charismatique monseigneur ? Ou préférez-vous une force surhumaine ? J'ai justement deux potions pour ça..."
const description_effetD_potion2 = "Devenir un leader carismatique";
const description_effetG_potion2 = "Avoir une force surhumaine";
let effetD_potion2 =[];
let effetG_potion2 =[];

//description pour potion3
const description_potion3 = "Monseigneur, j'ai ici deux potions. L'une pourrait faire disparaître à jamais la marque du temps de votre corps, et l'autre pourrait vous transformer en chien. Choisissez attentivement."
const description_effetD_potion3 = "Choisir la potion de droite";
const description_effetG_potion3 = "Choisir la potion de gauche";
let effetD_potion3 =[];
let effetG_potion3 =[];

//il nous qu'on repertorie toutes les cartes
const tempete = new carte("tempete","une tempete s'abat sur le pays","aider le peuple","se cacher",[PeupleContent],[PeuplePasContent]);
const revolution = new carte("revolution","Le peuple se revolte","laisser l'armée gerer","ecouter leurs revendication",[PeuplePasContent],[PeupleContent,Ajout(cartes_jouables,tempete)]);
const invasion = new carte("invasion","des extraterestes debarquent","les capturer pour les etudier","les laisser rejoindre la population",[PeuplePasContent],[PeupleContent,Ajout(cartes_jouables,tempete)]);
const bandit = new carte("bandit", description_bandit,description_effetD_bandit,description_effetG_bandit,effetD_bandit,effetG_bandit)
const bonne_recolte = new carte("Bonnes récoltes", description_bonne_recolte,description_effetD_bonne_recolte,description_effetG_bonne_recolte,effetD_bonne_recolte,effetG_bonne_recolte)
const mauvaise_recolte = new carte("Mauvaises récoltes", description_mauvaise_recolte,description_effetD_mauvaise_recolte,description_effetG_mauvaise_recolte,effetD_mauvaise_recolte,effetG_mauvaise_recolte)
const potion1 = new carte("Potion 1",description_potion1, description_effetD_potion1,description_effetG_potion1,effetD_potion1,effetG_potion1)
const potion2 = new carte("Potion 2",description_potion2, description_effetD_potion2,description_effetG_potion2,effetD_potion2,effetG_potion2)
const potion3 = new carte("Potion 3",description_potion3, description_effetD_potion3,description_effetG_potion3,effetD_potion3,effetG_potion3)


// console.log(tempete);
// console.log(revolution);
// console.log(invasion);


toutes_les_cartes=[tempete,revolution,invasion,bonne_recolte,mauvaise_recolte];
const nbcartestotales=toutes_les_cartes.length;
//console.log(toutes_les_cartes)
// console.log(toutes_les_cartes[2]);

cartes_jouables=[bonne_recolte,mauvaise_recolte];
//console.log(cartes_jouables);

// //il qu'on repertorie tous les effets de chaques cartes
// let effet_tempete_D = [Ajout(cartes_jouables,invasion), PeupleContent];
// let effet_tempete_G = [PeuplePasContent];
// let effet_invasion_D = [PeuplePasContent];
// let effet_invasion_G = [PeupleContent,Ajout(cartes_jouables,tempete)];
// let effet_revolution_D = [PeuplePasContent];
// let effet_revolution_G = [PeupleContent,Ajout(cartes_jouables,tempete)];

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


//Ajout(cartes_jouables,invasion);
//Supp(cartes_jouables,tempete);
//console.log(cartes_jouables); //ok ça marche