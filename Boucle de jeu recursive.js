let jaugeBanque = 20;
let jaugePeuple = 10;
let jaugeReligion = 24;
let jaugeArmee = 17;
let ageJoueur = 50;

const tour_max = 3;
function Jeu(num_tour, num_max) {
    const carteChoisie = piocher(cartes_jouables);
    alert("Carte obtenue : " + ` ${carteChoisie.getname()}`);
    let finish = false; // Le joueur n'a pas encore appuyé sur un bouton
    
    changeButtonTxt(carteChoisie);

    d = document.getElementsByClassName("right"); // ByClassName renvoie une liste avec un seul élément d'où le g[0]
    g = document.getElementsByClassName("left");

    
    d[0].addEventListener("click", function() {
        carteChoisie.enclencheEffetsD();
        num_tour ++;
        if (num_tour != num_max) {Jeu(num_tour, num_max);} // Comme ça la programme attend naturellement que user appuie sur un bouton
        else {alert("Game Over");}
    });
    
    g[0].addEventListener("click", function() {
        carteChoisie.enclencheEffetsG();
        num_tour ++;
        if (num_tour != num_max) {Jeu(num_tour, num_max);} // Comme ça la programme attend naturellement que user appuie sur un bouton
        else {alert("Game Over");}
    });
}

function changeButtonTxt(carte) {
    d = document.getElementById("txtD");  // On trouve p
    g = document.getElementById("txtG");
    d.innerText = carte.getactionD();    // On modifie p
    g.innerText = carte.getactionG();
}

Jeu(0, tour_max);
