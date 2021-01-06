//Initialisation après chargement du DOM : HYPER IMPORTANT
document.addEventListener("DOMContentLoaded", function() {

    let tour_fin = 5;

    function jouer(tour) {
        if ((tour>=tour_fin) || (jaugeBanque==0) || (jaugeBanque==100) || (jaugeArmee==0) || (jaugeArmee==100) || (jaugePeuple==0) || (jaugePeuple==100) || (jaugeReligion==0) || (jaugeReligion==100)){
            console.log("FIN DU JEU")
        } else {
            console.log("tour en cours =",tour);
            carteChoisie = piocher(cartes_jouables);
            console.log(carteChoisie.getname());
            changeCarte(carteChoisie);

            d = document.getElementsByClassName("right"); // ByClassName renvoie une liste avec un seul élément d'où le g[0]
            g = document.getElementsByClassName("left");

            const listenerG = function() {
                enclencheG(carteChoisie, tour, g, d);
            }
            const listenerD = function() {
                enclencheD(carteChoisie, tour, g, d);
            }

            const enclencheG = function(carte, tour, g, d) { // On donne un nom à cette fonction pour enelever l'eventlistener
                carte.enclencheEffetsG(); // Test avec ça quand ça marche
                g[0].removeEventListener("click", listenerG);
                d[0].removeEventListener("click", listenerD);
                jouer(tour + 1);
            }
        
            const enclencheD = function(carte, tour, g, d) {
                carte.enclencheEffetsD();
                g[0].removeEventListener("click", listenerG);
                d[0].removeEventListener("click", listenerD);
                jouer(tour + 1);
            }

            g[0].addEventListener("click", listenerG);
            d[0].addEventListener("click", listenerD);
        } 
    } 
    jouer(0);
});