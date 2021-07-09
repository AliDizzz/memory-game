const divResultat = document.querySelector("#resultat");

var tabJeu = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

afficherTableau();

function afficherTableau() {
    var txt = "";

    for (let i = 0; i < tabJeu.length; i++) {
        txt += "<div>";
        for (let j = 0; j < tabJeu[i].length; j++) {
            if (tabJeu[i][j] === 0) {
                txt += "<button class='btn btn-primary m-2' style='width:100px;height:100px;'>Afficher</button>";
            } else {
                txt += "<img src='image/elephant.png' style='width:100px;height:100px' class='m-2'>";
            }
            
        }
        txt += "</div>";
    }

    divResultat.innerHTML = txt;
}