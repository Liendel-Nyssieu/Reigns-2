let jaugeBanque = 20;
let jaugePeuple = 10;
let jaugeReligion = 24;
let jaugeArmee = 17;
let ageJoueur = 50;

let tour_en_cours = 0;
while (tour_en_cours < 1) {
    const carteChoisie = piocher(cartes_jouables)
    Active_Effets(carteChoisie);
    tour_en_cours ++;
}