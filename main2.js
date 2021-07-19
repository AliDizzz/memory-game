console.log("coucou");

var puissance4 = [];
var nbColonne = 7;
var nbLigne = 6;

var joueur1car = "x";
var joueur2car = "o";

puissance4 = initialiserTableauVide(nbLigne, nbColonne, 0);
console.log(puissance4);

/**
 * Permet d'initialiser un tableau de tableau en fonction d'un nombre de ligne et de colonne passé en param
 * @param {*} nbLigne 
 * @param {*} nbColonne 
 * @param {*} car 
 * @returns 
 */

function initialiserTableauVide(nbLigne, nbColonne, car = '') {
    var tab = [];
    for (let i = 0; i < nbLigne; i++) {
        const ligne = [];
        for (let j = 0; j < nbColonne; j++) {
            ligne.push(car);
            
        }
        tab.push(ligne);
    }
    return tab;
}

function afficherPuissance4(tab) {
    for (let i = 0; i < tab.length; i++) {
        const ligne = "";
        for (let j = 0; j < tab[i].length; j++) {
            if (tab[i][j] === 0) {
                ligne += "_";
            } else if(tab[i][j] === 1) {
                ligne += joueur1car;
            } else if(tab[i][j] === 2) {
                ligne += joueur2car;
            }
            
        }
        console.log(ligne);
    }
}