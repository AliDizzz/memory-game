console.log("coucou");

var puissance4 = [];
var nbColonne = 7;
var nbLigne = 6;

puissance4 = initialiserTableauVide(nbLigne, nbColonne);
console.log(puissance4)

function initialiserTableauVide(nbLigne, nbColonne) {
    var tab = [];
    for (let i = 0; i < nbLigne; i++) {
        const ligne = [];
        for (let j = 0; j < nbColonne; j++) {
            ligne.push(0);
            
        }
        tab.push(ligne);
    }
    return tab;
}