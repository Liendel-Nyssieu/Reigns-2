/* Ce fichier contient la définition de toute les cartes pour pouvoir les utiliser
dans les autres fichier JS*/

// Définition de l'objet Carte et des méthodes associées
function carte(nom, descriptif, action_droite, action_gauche, effet_droite, effet_gauche, argumentD, argumentG, image) {

    this.name = nom;
    this.descriptif = descriptif;
    this.actionD = action_droite; 
    this.actionG = action_gauche;

    //Effets de chaque coté -> des listes de fonctions
    this.effetD = effet_droite;
    this.effetG = effet_gauche;
    //Les fonctions peuvent avoir des arguments
    this.argD = argumentD;
    this.argG = argumentG;

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
    for (let i=0; i < this.effetG.length; i++) {
        this.effetG[i](this.argG);
    }
    // Abandonné car on ne peut pas mettre d'arguments aux fonctions : this.effetG.forEach(element => element());
};
carte.prototype.enclencheEffetsD = function() {
    for (let i=0; i < this.effetD.length; i++) {
        this.effetD[i](this.argD);
    }
};
carte.prototype.recupimage = function(){
    return this.image;
};



//je les definis ici pour pouvoir les utiliser dans les effetes des cartes après
let toutes_les_cartes = [];
let cartes_jouables = [];

// effets bandit
let effetD_bandit = [PeupleContent, BanqueContent];
let effetG_bandit = [PeupleContent, MilitaireContent];
let argD_bandit = [-10, -10];
let argG_bandit = [5, -20];


// effets bonne recolte
let effetD_bonne_recolte = [PeupleContent];
let effetG_bonne_recolte = [BanqueContent];
let argG_bonne_recolte = [10];
let argD_bonne_recolte = [10];

// effets mauvaise recolte
let effetD_mauvaise_recolte = [MilitaireContent, BanqueContent];
let effetG_mauvaise_recolte = [PeupleContent, BanqueContent];
let argG_mauvaise_recolte = [-10,-10]; //nourire le peuple
let argD_mauvaise_recolte = [-10,-10]; //nourir la garde

// effets tempete - carte TEST
let effetD_tempete = [PeupleContent];
let effetG_tempete = [PeupleContent,BanqueContent];
let argD_tempete = [NULL];
let argG_tempete = [NULL];

// effets revolution - carte TEST
let effetD_revolution = [PeupleContent, MilitaireContent]; // si un effet contient l'ajout d'une carte, il faut le définir après la création de la carte en question
let effetG_revolution = [PeupleContent];
let argG_revolution = [NULL];
let argD_revolution = [NULL];

// effets potion1 - PAS DE FONCTION POUR LE MOMENT
let effetD_potion1 = [empoisonné];
let effetG_potion1 = [hallucine];
let argG_potion1 = [NULL];
let argD_potion1 = [NULL];

// effets potion 2 
let effetD_potion2 = [PeupleContent]; //augmente peuple
let effetG_potion2 = [MilitaireContent]; //augmente armée
let argG_potion2 = [10];
let argD_potion2 = [10];

// effets potion 3 - - PAS DE FONTION POUR LE MOMENT
let effetD_potion3 = [hallucine, empoisonné];
let effetG_potion3 = [hallucine, empoisonné];
let argG_potion3 = [NULL];
let argD_potion3 = [NULL];

// effets chasse
let effetD_chasse = [PeupleContent]; 
let effetG_chasse = [BanqueContent];
let argD_chasse = [10];
let argG_chasse = [10];

//effets dragon
let effetD_dragon = [ReligionContent, PeupleContent];
let effetG_dragon = [PeupleContent, MilitaireContent, ReligionContent];
let argD_dragon = [10,-5];
let argG_dragon = [10,5,-10];

//effets guerre
let effetD_guerre = [MilitaireContent, PeupleContent];
let effetG_guerre = [BanqueContent];
let argD_guerre = [-20,5];
let argG_guerre = [-10];

//effets investissement
let effetD_investissement = [BanqueContent, PeupleContent, ReligionContent];
let effetG_investissement = [BanqueContent, PeupleContent, ReligionContent];
let argD_investissement = [5, 10, -20];
let argG_investissement = [-5, -5, 10];

//effets pêche
let effetD_peche = [PeupleContent, BanqueContent];
let effetG_peche = [PeupleContent, BanqueContent];
let argD_peche = [10, -5];
let argG_peche = [-5, 10];

//effets relique
let effetD_relique = [ReligionContent, BanqueContent];
let effetG_relique = [ReligionContent, BanqueContent];
let argD_relique = [20, -20];
let argG_relique = [-5, -5];

//effets troubadour
let effetD_troubadour = [BanqueContent, PeupleContent];
let effetG_troubadour = [PeupleContent];
let argD_troubadour = [5, 5];
let argG_troubadour = [10];

//effets trahison général
let effetD_trahison_general = [MilitaireContent];
let effetG_trahison_general = [BanqueContent, MilitaireContent];
let argD_trahison_general = [-20];
let argG_trahison_general = [-5, 5];

//effets barbares
let effetD_barbares = [ReligionContent, MilitaireContent];
let effetG_barbares = [ReligionContent];
let argD_barbares = [20, -10];
let argG_barbares = [-20];

//effets voleur
let effetD_voleur = [PeupleContent, ReligionContent];
let effetG_voleur = [ReligionContent, PeupleContent];
let argD_voleur = [-20, 10];
let argG_voleur = [-20, 20];

//effets joutes
let effetD_joutes = [PeupleContent, BanqueContent];
let effetG_joutes = [PeupleContent, BanqueContent];
let argD_joutes = [10, -10];
let argG_joutes = [-5, 10];

//effets gisement
let effetD_gisement = [BanqueContent];
let effetG_gisement = [MilitaireContent];
let argD_gisement = [10];
let argG_gisement = [10];

//effets académie magie
let effetD_academie_magie = [PeupleContent, BanqueContent, ReligionContent];
let effetG_academie_magie = [ReligionContent, BanqueContent];
let argD_academie_magie = [5, 5, -10];
let argG_academie_magie = [5, -5];

//effets banque
let effetD_banque = [BanqueContent, PeupleContent];
let effetG_banque = [PeupleContent];
let argD_banque = [10, -5];
let argG_banque = [5];

//effets cachots
let effetD_cachots = [MilitaireContent, PeupleContent];
let effetG_cachots = [MilitaireContent];
let argD_cachots = [10, -10];
let argG_cachots = [-10];

//effets caserne
let effetD_caserne = [MilitaireContent, BanqueContent, PeupleContent];
let effetG_caserne = [MilitaireContent];
let argD_caserne = [20, -5, -5];
let argG_caserne = [-10];

//effets cathédrale
let effetD_cathedrale = [ReligionContent, BanqueContent];
let effetG_cathedrale = [ReligionContent];
let argD_cathedrale = [20, -20];
let argG_cathedrale = [-10];

//effets grenier
let effetD_grenier = [PeupleContent, BanqueContent];
let effetG_grenier = [PeupleContent];
let argD_grenier = [10, -5];
let argG_grenier = [-5];

//effets taverne
let effetD_taverne = [PeupleContent, BanqueContent, ReligionContent];
let effetG_taverne = [PeupleContent];
let argD_taverne = [10, 5, -10];
let argG_taverne = [-10];

//effets tour de guet
let effetD_tour_guet = [MilitaireContent, BanqueContent];
let effetG_tour_guet = [MilitaireContent];
let argD_tour_guet = [10, -10];
let argG_tour_guet = [-10];

// on créée les cartes
const tempete = new carte("Tempete", "Une tempete s'abat sur le pays", "Aider le peuple", "Se cacher", effetD_tempete, effetG_tempete, argD_tempete, argG_tempete, "./monroe.jpg");
const revolution = new carte("Révolution", "Le peuple se revolte", "Laisser l'armée gerer", "Ecouter leurs revendication", effetD_revolution, effetG_revolution, argD_revolution, argG_revolution, "./Famous-people-minimalism-04.jpg");
const bonne_recolte = new carte("Bonnes récoltes", "Bonne nouvelle ! Les récoltes ont été fructueuses votre altesse. Nous pourrions en faire profiter le peuple, ou entreposer les excédents pour nous constituer des réserves.", "Nourire le peuple", "Garder les recoltes pour soit", effetD_bandit, effetG_bandit, argD_bandit, argG_bandit, "./Famous-people-minimalism-04.jpg");
const bandit = new carte("Bandits", "Un groupe de bandits pille nos terres et terrorise notre peuple. Nous devons envoyer notre armée !", "Ne rien faire.", "Envoyer l'armée pour arréter les bandits", effetD_bonne_recolte, effetG_bonne_recolte, argD_bonne_recolte, argG_bonne_recolte, "./maradona.jpg");
const mauvaise_recolte = new carte("Mauvaises récoltes", "Monseigneur ! Les récoltes sont mauvaises cette année... Nous pourrions donner moins de pain au peuple ou réduire les rations de la garde, mais il faut choisir.", "Nourrir le peuple", "Nourrir la garde", effetD_mauvaise_recolte, effetG_mauvaise_recolte, argD_mauvaise_recolte, argG_mauvaise_recolte, "./monroe.jpg");
const potion2 = new carte("Potion 2", "Souhaiteriez-vous être un leader charismatique monseigneur ? Ou préférez-vous une force surhumaine ? J'ai justement deux potions pour ça...", "Devenir un leader carismatique", "Avoir une force surhumaine", effetD_potion2, effetG_potion2, argD_potion2, argG_potion2, "./maradona.jpg");
const potion1 = new carte("Potion 1", "Cher roi, j'ai préparé deux potions pour vous, laquelle désirez-vous boire ?", "Choisir la potion rouge", "Choisir la potion bleu", effetD_potion1, effetG_potion1, argD_potion1, argG_potion1, "./maradona.jpg");
const potion3 = new carte("Potion 3", "Monseigneur, j'ai ici deux potions. L'une pourrait faire disparaître à jamais la marque du temps de votre corps, et l'autre pourrait vous transformer en chien. Choisissez attentivement.", "Choisir la potion de droite", "Choisir la potion de gauche", effetD_potion3, effetG_potion3, argD_potion3, argG_potion3, "./Famous-people-minimalism-04.jpg");
const chasse = new carte("Chasse", "La chasse est un succès monseigneur ! Souhaitez-vous organiser un banquet pour célébrer l'occasion ? Nous pourrions inviter le peuple afin d'améliorer votre image ou plutôt le réserver à la bourgeoisie des pays voisins.", "Inviter le peuple", "Inviter la bourgeoisie étrangère", effetD_chasse, effetG_chasse, argD_chasse, argG_chasse, "./Famous-people-minimalism-04.jpg");
const dragon = new carte("Dragon", "Un dragon sévit dans les montagnes au Nord. Nous devons le chasser ! Nous pourrions demander de l'aide à l'Elgise en déclarant le dragon comme une créature maléfique. Elle se chargerait de former une armée de croisés, mais notre peuple en pâtirait.", "Demander l'aide de l'Eglise", "Envoyer l'armée", effetD_dragon, effetG_dragon, argD_dragon, argG_dragon, "./Famous-people_minimalism-04.jpg");
const guerre = new carte("Guerre", "Des rapports de nos espions nous informent que la nation voisine renforçait dangereusement son armée près de notre frontière. Nous pourrions leur déclarer la guerre de manière préventive au risque de fragiliser notre propre armée, ou essayer de parlementer.", "Déclarer la guerre", "Parlementer", effetD_guerre, effetG_guerre, argD_guerre, argG_guerre, "./Famous-people_minimalism-04.jpg");
const investissement = new carte("Investissement", "Monsseigneur, je voudrais ouvrir une taverne, mais il me manque quelques fonds pour le droit de propriété. Si vous vouliez bien investir dans mon projet, nous pourrions tous deux en tirer un sacré bénéfice. Qu'en dites-vous ?", "Investir", "Ne rien faire", effetD_investissement, effetG_investissement, argD_investissement, argG_investissement, "./Famous-people_minimalism-04.jpg");
const peche = new carte("Pêche", "Mon roi, nous devrions profiter de ce beau temps pour organiser une grande pêche. Cela permettrait d'offrir une distraction au peuple, mais les éloignerait des champs et de leur travail.", "Partir pêcher", "Laisser le peuple travailler", effetD_peche, effetG_peche, argD_peche, argG_peche, "./Famous-people_minimalism-04.jpg");
const relique = new carte("Relique", "Une expédition envoyé pour explorer la région boisée au Nord-Est a découvert une étrange boîte dorée. D'après notre abbé il s'agirait de la relique de Saint Roland. Nous devrions organiser une grande procession pour l'entreposer dans notre cathédrale. Désirez-vous laisser l'Eglise s'en charger ?", "Laisser l'Eglise s'en charger", "Tout organiser", effetD_relique, effetG_relique, argD_relique, argG_relique, "./Famous-people_minimalism-04.jpg");
const troubadour = new carte("Troubadour", "Messire ! Permettez-moi de me présenter. Je suis le grand Jean de Boër, troubadour itinérant. Je souhaitais me produire ici quelques temps. Je pourrais vous proposer une partie de mes recettes...", "Accepter sa proposition", "Lui laisser l'intégralité de ses recettes", effetD_troubadour, effetG_troubadour, argD_troubadour, argG_troubadour, "./Famous-people_minimalism-04.jpg");
const trahison_general = new carte("Trahison du général", "Mon roi ! Votre général a comploté contre vous ! Il a rallié plusieurs officiers à sa cause et s'apprête à vous renverser. Nous devons agir !", "Exécuter les traîtres", "Envoyer le général à la guerre dans une contrée lointaine", effetD_trahison_general, effetG_trahison_general, argD_trahison_general, argG_trahison_general, "./Famous-people_minimalism-04.jpg");
const barbares = new carte("Barbares", "Des barbares pillent nos églises et tuent nos prêtres ! Envoyez immédiatement l'armée pour les protéger !", "Protéger les prêtres", "Ignorer leur problème", effetD_barbares, effetG_barbares, argD_barbares, argG_barbares, "./Famous-people-minimalism-04.jpg");
const voleur = new carte("Voleur", "Nous avons surpris un voleur qui s'était introduit dans notre cathédrale. Il tenait dans ses mains une de nos reliques, et son sac était rempli d'argenterie. Il semblerait que cet homme soit une sorte de héro du peuple qui volerait aux riches. Un certain Borin des forêts. Nous devrions l'enfermer dans nos geôles pour l'exemple...", "Emprisonner Borin des Forêts", "Relâcher Borin des Forêts", effetD_voleur, effetG_voleur, argD_voleur, argG_voleur, "./Famous-people_minimalism-04.jpg");
const joutes = new carte("Joutes", "C'est le festival du printemps seigneur ! Bien que cela représente un coût, nous pourrions organiser des joutes pour divertir le peuple.", "Organiser les joutes", "Ne rien organiser", effetD_joutes, effetG_joutes, argD_joutes, argG_joutes, "./Famous-people-minimalism-04.jpg");
const gisement = new carte("Gisement", "Nous avons découvert un gisement de minerai. Vous pourriez utiliser le métal ainsi extrait pour équiper l'armée ou pour notre économie.", "Créer de la monnaie", "Créer des armes et de l'équipement", effetD_gisement, effetG_gisement, argD_gisement, argG_gisement, "./Famous-people-minimalism-04.jpg");
const academie_magie = new carte("Construction d'une académie de magie", "Nous pourrions construire une académie de magie et d'alchimie mon seigneur. Evidemment, nous ferions profiter la couronne des profits générés par l'alchimie...", "Construire l'académie", "Ne rien construire", effetD_academie_magie, effetG_academie_magie, argD_academie_magie, argG_academie_magie, "./Famous-people-minimalism-04.jpg");
const banque = new carte("Construction d'une banque", "Nous pourrions construire une banque pour vous monseigneur. Elle vous permettrait de réaliser un bon profit.", "Construire la banque", "Ne rien construire", effetD_banque, effetG_banque, argD_banque, argG_banque, "./Famous-people-minimalism-04.jpg");
const cachots = new carte("Construction de cachots", "Le taux de criminalité dans nos villes est trop élevé. Vous devriez ordonner la création de cachots pour emprisonner les criminels.", "Construire les cachots", "Ne rien construire", effetD_cachots, effetG_cachots, argD_cachots, argG_cachots, "./Famous-people-minimalism-04.jpg");
const caserne = new carte("Construction d'une caserne", "Mon roi, nous pourrions construire une caserne et enroler de nouvelles recrues pour renforcer nos défense.", "Construire une caserne", "Ne rien construire", effetD_caserne, effetG_caserne, argD_caserne, argG_caserne, "./Famous-people-minimalism-04.jpg");
const cathedrale = new carte("Construction d'une cathédrale", "La foi du peuple est vascillante, je le sens ! Nous devrions ordonner la construction d'une grande cathédrale à la gloire des dieux.", "Construire la cathédrale", "Ne rien construire", effetD_cathedrale, effetG_cathedrale, argD_cathedrale, argG_cathedrale, "./Famous-people-minimalism-04.jpg");
const grenier = new carte("Construction d'une grenier", "Nos récoltes sont régulièrement à l'origine de surplus, mais sans moyen de les entreposer, ils sont perdus. Nous devrions construire un grenier pour les entreposer.", "Construire un grenier", "Ne rien construire", effetD_grenier, effetG_grenier, argD_grenier, argG_grenier, "./Famous-people-minimalism-04.jpg");
const taverne = new carte("Construction d'une taverne", "Le peuple s'ennuie monseigneur... Nous pourrions construire une taverne afin de leur changer les idées.", "Construire une taverne", "Ne rien construire", effetD_taverne, effetG_taverne, argD_taverne, argG_taverne, "./Famous-people-minimalism-04.jpg");
const tour_guet = new carte("Construction d'une tour de guet", "Nous subissons trop souvet des incursions des pays voisins ou des barbares qui profitent d'une faible sécurité aux frontières pour les traverser. Nous devrions construire des tours de guet afin de surveiller les limites de notre territoire.", "Construire une tour de guet", "Ne rien construire", effetD_tour_guet, effetG_tour_guet, argD_tour_guet, argG_tour_guet, "./Famous-people-minimalism-04.jpg");


toutes_les_cartes = [bandit, bonne_recolte, mauvaise_recolte,chasse, dragon, guerre, investissement, peche, relique, troubadour, trahison_general];
cartes_jouables = [bonne_recolte, mauvaise_recolte, bandit, chasse, dragon, guerre, investissement, peche, relique, troubadour, trahison_general];
const nbcartestotales = toutes_les_cartes.length;
