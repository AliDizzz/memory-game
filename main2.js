console.log("coucou");

var puissance4 = [];
var nbColonne = 7;
var nbLigne = 6;

var joueur1car = "x";
var joueur2car = "o";

puissance4 = initialiserTableauVide(nbLigne, nbColonne, 0);
afficherPuissance4(puissance4, joueur1car, joueur2car);
puissance4[3][3] = 1;
puissance4[4][4] = 2;
afficherPuissance4(puissance4, joueur1car, joueur2car);

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

/**
 * Permet d'afficher un tableau de puissance 4
 * @param {array<String>} tab 
 */
function afficherPuissance4(tab, joueur1car, joueur2car) {
    for (let i = 0; i < tab.length; i++) {
        const ligne = "";
        for (let j = 0; j < tab[i].length; j++) {
            ligne += "| ";
            if (tab[i][j] === 0) {
                ligne += "_";
            } else if (tab[i][j] === 1) {
                ligne += joueur1car;
            } else if (tab[i][j] === 2) {
                ligne += joueur2car;
            }
            ligne += "| ";
        }
        console.log(ligne);
    }
}