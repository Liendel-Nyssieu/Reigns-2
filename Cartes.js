/* Ce fichier contient la définition de toute les cartes pour pouvoir les utiliser
dans les autres fichier JS*/

// Définition de l'objet Carte et des méthodes associées
function carte(nom, descriptif,action_droite,action_gauche,effet_droite, effet_gauche, image) {

    this.name = nom;
    this.descriptif = descriptif;
    this.actionD = action_droite; 
    this.actionG = action_gauche;

    //Effets de chaque coté -> des listes de fonctions
    this.effetD = effet_droite;
    this.effetG = effet_gauche;

    this.image=image;
}

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
carte.prototype.recupimage = function(){
    return this.image;
};



//je les definis ici pour pouvoir les utiliser dans les effetes des cartes après
let toutes_les_cartes = [];
let cartes_jouables = [];

// effets bandit
let effetD_bandit = [PeuplePasContent, BanquePASContent];
let effetG_bandit = [PeupleContent, MilitairePASContent];

// effets bonne recolte
let effetD_bonne_recolte = [PeupleContent];
let effetG_bonne_recolte = [BanqueContent];

// effets mauvaise recolte
let effetD_mauvaise_recolte = [MilitairePASContent, PeupleContent];
let effetG_mauvaise_recolte = [PeuplePasContent, MilitaireContent];

// effets tempete
let effetD_tempete = [PeupleContent];
let effetG_tempete = [PeuplePasContent,BanqueContent];

// effets revolution
let effetD_revolution = [PeuplePasContent,MilitaireContent]; // si un effet contient l'ajout d'une carte, il faut le définir après la création de la carte en question
let effetG_revolution = [PeupleContent];

// effets potion1
let effetD_potion1 = [empoisonné];
let effetG_potion1 = [hallucine];

// effets potion 2
let effetD_potion2 = [hallucine];
let effetG_potion2 = [empoisonné];

// effets potion 3
let effetD_potion3 = [hallucine, empoisonné];
let effetG_potion3 = [hallucine, empoisonné];

// on créée les cartes
const tempete = new carte("tempete", "une tempete s'abat sur le pays", "aider le peuple", "se cacher", effetD_tempete, effetG_tempete,"./monroe.jpg");
const revolution = new carte("revolution", "Le peuple se revolte", "laisser l'armée gerer", "ecouter leurs revendication", effetD_revolution, effetG_revolution,"./Famous-people-minimalism-04.jpg");
const bonne_recolte = new carte("Bonnes récoltes", "Bonne nouvelle ! Les récoltes ont été fructueuses votre altesse. Nous pourrions en faire profiter le peuple, ou entreposer les excédents pour nous constituer des réserves.", "Nourire le peuple", "Garder les recoltes pour soit", effetD_bandit, effetG_bandit,"./Famous-people-minimalism-04.jpg")
const bandit = new carte("Bandits !", "Un groupe de bandits pille nos terres et terrorise notre peuple. Nous devons envoyer notre armée !", "Ne rien faire.", "Envoyer l'armée pour arréter les bandits", effetD_bonne_recolte, effetG_bonne_recolte,"./maradona.jpg")
const mauvaise_recolte = new carte("Mauvaises récoltes", "Monseigneur ! Les récoltes sont mauvaises cette année... Nous pourrions donner moins de pain au peuple ou réduire les rations de la garde, mais il faut choisir.", "Nourrir le peuple", "Nourrir la garde", effetD_mauvaise_recolte, effetG_mauvaise_recolte, "./monroe.jpg")
const potion2 = new carte("Potion 2", "Souhaiteriez-vous être un leader charismatique monseigneur ? Ou préférez-vous une force surhumaine ? J'ai justement deux potions pour ça...", "Devenir un leader carismatique", "Avoir une force surhumaine", effetD_potion2, effetG_potion2,"./maradona.jpg")
const potion1 = new carte("Potion 1", "Cher roi, j'ai préparé deux potions pour vous, laquelle désirez-vous boire ?", "Choisir la potion rouge", "Choisir la potion bleu", effetD_potion1, effetG_potion1,"./maradona.jpg")
const potion3 = new carte("Potion 3", "Monseigneur, j'ai ici deux potions. L'une pourrait faire disparaître à jamais la marque du temps de votre corps, et l'autre pourrait vous transformer en chien. Choisissez attentivement.", "Choisir la potion de droite", "Choisir la potion de gauche", effetD_potion3, effetG_potion3,"./Famous-people-minimalism-04.jpg")


toutes_les_cartes = [bandit, bonne_recolte, mauvaise_recolte];
cartes_jouables = [bonne_recolte, mauvaise_recolte, bandit];
const nbcartestotales = toutes_les_cartes.length;
