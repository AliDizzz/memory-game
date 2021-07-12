const divResultat = document.querySelector("#resultat");

var tabJeu = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

var tabResultat = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

var oldSelection = [] ;
var nbAffiche = 0 ;
var ready = true ;

afficherTableau();

function afficherTableau() {
    var txt = "";
    // i = ma ligne et j = ma colonne
    for (let i = 0; i < tabJeu.length; i++) {
        txt += "<div>";
        for (let j = 0; j < tabJeu[i].length; j++) {
            if (tabJeu[i][j] === 0) {
                txt += "<button class='btn btn-primary m-2' style='width:100px;height:100px' onClick='verif(\""+i+"-"+j+"\")'>Afficher</button>";
            } else {
                txt += "<img src='"+getImage(tabJeu[i][j])+"' style='width:100px;height:100px' class='m-2'>";
            }
            
        }
        txt += "</div>";
    }

    divResultat.innerHTML = txt;
}

function getImage(valeur) {
    var imgTxt = "image/";
    switch (valeur) {
        case 1: imgTxt += "elephant.png";
            break;
        case 2: imgTxt += "giraffe.png";
            break;
        case 3: imgTxt += "hippo.png";
            break;
        case 4: imgTxt += "monkey.png";
            break;
        case 5: imgTxt += "panda.png";
            break;
        case 6: imgTxt += "parrot.png";
            break;
        case 7: imgTxt += "penguin.png";
            break;
        case 8: imgTxt += "pig.png";
            break;
        default: console.log("cas non pris en compte");
            break;
    }
    return imgTxt;
}

function verif(bouton) {
    if (ready) {
        nbAffiche++; // 1er click on ne rentrera pas dans la function ci-dessou, mais au 2eme

    var ligne = bouton.substr(0, 1);
    var colonne = bouton.substr(2, 1);
    tabJeu[ligne][colonne] = tabResultat[ligne][colonne];
    afficherTableau();

        if (nbAffiche > 1) {
            ready = false;

            setTimeout(() => {
                //verfication
                if (tabJeu[ligne][colonne] !== tabResultat[oldSelection[0]][oldSelection[1]]) {
                    tabJeu[ligne][colonne] = 0;
                    tabJeu[oldSelection[0]][oldSelection[1]] = 0;
                }
                afficherTableau();
                ready = true;
                nbAffiche = 0;
                oldSelection = [ligne,colonne];
            }, 1000);
    } else {
        oldSelection = [ligne,colonne];
    }


    }
    
}