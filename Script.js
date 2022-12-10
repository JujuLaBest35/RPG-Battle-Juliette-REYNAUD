/*Variables pour tous les personnages reliées à leurs identité dans HTML*/
var Perso_arbre=document.getElementById("id_arbre")
var Monstre_1=document.getElementById("id_tornade")
var Perso_plante=document.getElementById("id_plante")
var Monstre_2=document.getElementById("id_caillou")
var Perso_souche=document.getElementById("id_souche")
var Monstre_3=document.getElementById("id_feu")
var Perso_riviere=document.getElementById("id_riviere")
var attaque_arbre=document.getElementById("attaque_arbre")

/*Variables PV pour les personnages (héros)*/
var PV_Arbre=document.getElementById("PVArbre")
var PV_Plante=document.getElementById("PVPLante")
var PV_Souche=document.getElementById("PVPlante")
var PV_Riviere=document.getElementById["PvRiviere"]

var tourPerso = 0;

function RandomInt(min, max){
    return (Math.floor(Math.random() * (max-min)) + min);
}

/*Fonction attaquer*/
function attaquer(){
    tourPerso = 0;
    Monstre_caillou.onclick = degats_caillou;
    Monstre_feu.onclick = degats_feu;
    Monstre_tornade.onclick = degats_tornade;
}

/*Fonctions dégats pour l'action attaque pour tous les monstres qui enlève 10PV*/
var pvTornadeHtml = document.getElementById("PVTornade");
var pvTornade = "100";

function degats_tornade(){
    pvTornade -= 10;
    pvTornadeHtml.innerHTML = pvTornade;

    tonElement.style.visibility = "hidden"

    tonElement.style.visibility = "visible"
}

var pvCaillouHtml = document.getElementById("PVCaillou");
var pvCaillou = "100";

function degats_caillou(){
    pvCaillou -= 10;
    pvCaillouHtml.innerHTML = pvCaillou;
}

var pvFeuHtml = document.getElementById("PVFeu");
var pvFeu = "100";

function degats_feu(){
    pvFeu -= 10;
    pvFeuHtml.innerHTML = pvFeu;
}

/*Fonction pour l'attaque spéciale vague du personnage rivière*/
function vague(){
    Monstre_caillou.onclick = degats_caillou_vague;
    Monstre_feu.onclick = degats_feu_vague;
    Monstre_tornade.onclick = degats_tornade_vague;
}

var pvTornadeHtml = document.getElementById("PVTornade");
var pvTornade = "100";

function degats_tornade_vague(){
    pvTornade -= 20;
    pvTornadeHtml.innerHTML = pvTornade;
}

var pvCaillouHtml = document.getElementById("PVCaillou");
var pvCaillou = "100";

function degats_caillou_vague(){
    pvCaillou -= 20;
    pvCaillouHtml.innerHTML = pvCaillou;
}

var pvFeuHtml = document.getElementById("PVFeu");
var pvFeu = "100";

function degats_feu_vague(){
    pvFeu -= 20;
    pvFeuHtml.innerHTML = pvFeu;
}   

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
    pvArbre -= (-20);
    pvArbreHtml.innerHTML = pvArbre;
}