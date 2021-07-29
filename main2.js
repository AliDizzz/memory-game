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

/*
Tant que pasTerminé
    jouer(J1)
    jouer(J2)
Fin Tant Que
*/
// var pasTermine = false;
// while (!pasTermine) {
//     if (jouerCase(1) || jouerCase(2)) {
//         pasTermine = true;
//     }
// }


while (true) {
    if (jouerCase(1)){
        console.log("Joueur 1 à gagné");
        return;
    }
    if (jouerCase(2)) {
        console.log("Joueur 2 à gagné");
        return;
    }
}

function jouerCase(joueur) {
    console.log("Le joueur %d joue", joueur)
    if (joueur === 1) {
        return true;
    } else {
        return false;
    }
}
/**
 * Permet d'afficher un tableau de puissance 4
 * @param {Array<String>} tab tableau de car
 * @param {String} j1c 
 * @param {String} j2c 
 */
function afficherPuissance4(tab, j1c, j2c) {
    for (let i = 0; i < tab.length; i++) {
        const ligne = "";
        for (let j = 0; j < tab[i].length; j++) {
            ligne += "| ";
            if (tab[i][j] === 0) {
                ligne += "_";
            } else if (tab[i][j] === 1) {
                ligne += j1c;
            } else if (tab[i][j] === 2) {
                ligne += j2c;
            }
            ligne += "| ";
        }
        console.log(ligne);
    }
}