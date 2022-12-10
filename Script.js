/*Variables pour tous les personnages reliées à leurs identité dans HTML*/
var Perso_arbre=document.getElementById("id_arbre")
var Monstre_caillou=document.getElementById("id_caillou")
var Perso_plante=document.getElementById("id_plante")
var Monstre_feu=document.getElementById("id_feu")
var Perso_souche=document.getElementById("id_souche")
var Monstre_tornade=document.getElementById("id_tornade")
var Perso_riviere=document.getElementById("id_riviere")
var attaque_arbre=document.getElementById("attaque_arbre")

/*Variables PV pour les personnages (héros)*/
var PV_Arbre=document.getElementById("PVArbre")
var PV_Plante=document.getElementById("PVPlante")
var PV_Souche=document.getElementById("PVSouche")
var PV_Riviere=document.getElementById("PVRiviere")

var pvArbre = 100;
var pvPlante = 100;
var pvSouche = 100;
var pvRiviere = 100;

var tourPerso = 0;
var persoVise = false;
var tourDesPersos = true;

function RandomInt(min, max){
    return (Math.floor(Math.random() * (max-min)) + min);
}

Monstre_caillou.onclick = degats_caillou;
Monstre_feu.onclick = degats_feu;
Monstre_tornade.onclick = degats_tornade;

/*Fonction attaquer*/
function attaquer(numeroPerso){
    if(tourDesPersos){
        if(numeroPerso == tourPerso){
            persoVise = true;
        }
    }
}

function ennemisAttaquent(){
    for(ennemi = 0; ennemi < 3; ennemi++){
        cible = RandomInt(0, 5);
        switch(cible){
            case 0:
                pvArbre -= 10;
                PV_Arbre.innerHTML = pvArbre;
                if(pvArbre <= 0){
                    Perso_arbre.style.display = "none";
                }
                break;
            case 1:
                pvPlante -= 10;
                PV_Plante.innerHTML = pvPlante;
                if(pvPlante <= 0){
                    Perso_plante.style.display = "none";
                }
                break;
            case 2:
                pvSouche -= 10;
                PV_Souche.innerHTML = pvSouche;
                if(pvSouche <= 0){
                    Perso_souche.style.display = "none";
                }
                break;
            case 3:
                pvRiviere -= 10;
                PV_Riviere.innerHTML = pvRiviere;
                if(pvRiviere <= 0){
                    Perso_riviere.style.display = "none";
                }
                break;
        }
    }
    tourDesPersos = true;
}

/*Fonctions dégats pour l'action attaque pour tous les monstres qui enlève 10PV*/
var pvTornadeHtml = document.getElementById("PVTornade");
var pvTornade = "100";

function degats_tornade(){
    if(persoVise){
        pvTornade -= 10;
        pvTornadeHtml.innerHTML = pvTornade;
        persoVise = false;
        tourPerso += 1;
        if(tourPerso >= 4){
            tourPerso = 0;
            tourDesPersos = false;
            ennemisAttaquent();
        }
    }
    if(pvTornade <= 0){
        Monstre_tornade.style.display = "none";
    }
}

var pvCaillouHtml = document.getElementById("PVCaillou");
var pvCaillou = "100";

function degats_caillou(){
    if(persoVise){
        pvCaillou -= 10;
        pvCaillouHtml.innerHTML = pvCaillou;
        persoVise = false;
        tourPerso += 1;
        if(tourPerso >= 4){
            tourPerso = 0;
            tourDesPersos = false;
            ennemisAttaquent();
        }
    }
    if(pvCaillou <= 0){
        Monstre_caillou.style.display = "none";
    }
}

var pvFeuHtml = document.getElementById("PVFeu");
var pvFeu = "100";

function degats_feu(){
    if(persoVise){
        pvFeu -= 10;
        pvFeuHtml.innerHTML = pvFeu;
        persoVise = false;
        tourPerso += 1;
        if(tourPerso >= 4){
            tourPerso = 0;
            tourDesPersos = false;
            ennemisAttaquent();
        }
    }
    if(pvFeu <= 0){
        Monstre_feu.style.display = "none";
    }
}

/*Fonction pour l'attaque spéciale vague du personnage rivière*/
function vague(){
    Monstre_caillou.onclick = degats_caillou_vague;
    Monstre_feu.onclick = degats_feu_vague;
    Monstre_tornade.onclick = degats_tornade_vague;
}

var pvTornadeHtml = document.getElementById("PVTornade");
var pvTornade = "100";

/*Fonction soigner pour l'attaque spéciale du perso arbre
function soigner(){
    Perso_arbre.onclick = ;
    Perso_plante.onclick = ;
    Perso_souche.onclick = ;
    Perso_riviere.onclick = 
}*/

var pvArbreHtml = document.getElementById("PVArbre");
var pvArbre = "100";

function soigner(){
    if(persoVise){
        pvArbre -= (-20);
        pvArbreHtml.innerHTML = pvArbre;
        persoVise = false;
        tourPerso += 1;
        if(tourPerso >= 4){
            tourPerso = 0;
            tourDesPersos = false;
            ennemisAttaquent();
        }
    }
    if(pvArbre <= 0){
        Perso_arbre.style.display = "none";
    }
}