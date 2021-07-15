console.log("coucou");

var puissance4 = [];
var nbColonne = 7;
var nbLigne = 6;

puissance4 = initialiserTableauVide(nbLigne, nbColonne, 0);
console.log(puissance4);

/**
 * Permet d'initialiser un tableau de tableau en fonction d'un nombre de ligne et de colonne passé en param
 * @param {*} nbLigne 
 * @param {*} nbColonne 
 * @param {*} car 
 * @returns 
 */

function initialiserTableauVide(nbLigne, nbColonne) {
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