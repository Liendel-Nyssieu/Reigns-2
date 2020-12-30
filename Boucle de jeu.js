//Initialisation après chargement du DOM : HYPER IMPORTANT
document.addEventListener("DOMContentLoaded", function() {

    let tour_en_cours = 0;
    let tour_fin = 5;

    function jouer(tour){
        if ((tour>=tour_fin) || (jaugeBanque==0) || (jaugeBanque==100) || (jaugeArmee==0) || (jaugeArmee==100) || (jaugePeuple==0) || (jaugePeuple==100) || (jaugeReligion==0) || (jaugeReligion==100)){
            console.log("FIN DU JEU")
        } else {
            console.log("tour en cours =",tour);
            carteChoisie = piocher(cartes_jouables);
            console.log(carteChoisie.getname());
            changeCarte(carteChoisie);

            d = document.getElementsByClassName("right"); // ByClassName renvoie une liste avec un seul élément d'où le g[0]
            g = document.getElementsByClassName("left");

            d[0].addEventListener("click",function() {
                carteChoisie.enclencheEffetsD();
                jouer(tour+1);
            });

            g[0].addEventListener("click",function() {
                carteChoisie.enclencheEffetsG();
                jouer(tour+1);
            });
        }   
    } 
    jouer(0)

});