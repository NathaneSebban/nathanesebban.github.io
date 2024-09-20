function nb_aleatoire(nb)
{
    nombre = Math.floor(Math.random() * nb)+1;
}
var nbc;
var non_im="Pirate";
var tirage = new Array;
var place = new Array;
var choix = 0, nbim2 = 0, nbim3 = 0, choixim = 1;
var gain = 0;
var nombres = 0;
var divs;

var cpt=0;

function genererListe(){
    nb=nbc+1;
    divs=nbc/2;
    for (i=1 ;i<nb ;i++) {
        nb_aleatoire(nbc);
        tirage[i]= nombre;
        for (t=1 ; t<i ;t++){
            if (tirage[t]==nombre)
            {
                i=i-1;
            }
        }
    }
    for (i=1 ; i<nb ; i++)
    {
        if (tirage[i]>divs) {
            nbtire=tirage[i]-divs;
        }
        else {
            nbtire=tirage[i];
        }
            place[i]=nbtire;
    }
}


function change_im(nbim) { 
    if (place[nbim] !=0) {
        if (nbim==nbim2) nbim=0;
        else{
            if (nbim==nbim3) nbim=0;
            else{
            if (choixim==3)
            {
                if (val1==val2) {
                    efface(nbim2);
                    efface(nbim3);
                    gain++;
                }
                else {
                    no_efface(nbim2);
                    no_efface(nbim3);
                }
                choixim=1;
                nbim3=0;
                }
                if (choixim==1) {
                    nbim2=nbim;
                    val1=place[nbim];
                    choix++;
                }
                if (choixim==2) {
                    nbim3=nbim;
                    val2=place[nbim];
                }
                choixim++;
            }
        }
        document.images[nbim-1].src = non_im+place[nbim]+".jpg";
        if (choixim==3){if (gain==divs-1) {
            $('#dessinTableau').empty();gain++;
            $('#dessinTableau').append('<img src="onePiece2.gif" width="350" height="300" border="0">')
        }}
        document.form1.result.value = choix;
        if ($('img').attr('src').length == nbc){
            alert('Victoire');
        }
    }
}

function efface(eff) {
    document.images[eff-1].src = non_im+"00.jpg";
    place[eff]=0}

function no_efface(eff) {
    document.images[eff-1].src = non_im+"0.jpg";
}

function dessinerTableau() {
    $("#dessinTableau").empty()
    cpt=0;
    $("#dessinTableau").append('<table border="0" align="center">');
    var longueur, largeur;
    // dimensions du tableau :
    if (nbc == 18){
        longueur = 6;
        largeur = 3;
    } else if(nbc == 12){
        longueur = 6;
        largeur = 2;
    } else if(nbc == 6){
        longueur = 3;
        largeur = 2;
    }
    for (i=0 ; i<largeur ; i++){
        $("#dessinTableau").append('<tr>');
        for (t=0 ; t<longueur ; t++){
            cpt++;
            $("#dessinTableau").append('<td><a href="#" onClick="change_im('+(cpt)+')"><img src="'+non_im+'0.jpg" width="99" height="99" border="0"></a></td>');
        }
        $("#dessinTableau").append('</tr>');
    }
    $("#dessinTableau").append('</table><p>&nbsp;</p>'+
    '<form name="form1">'+
    '<table width="520" border="1" align="center" bgcolor="#1c1fe0">'+
    '<tr><td width="200" align="center">'+
    'Nombre de coups '+
    '<input name="result" type="text" id="result2" size="5">'+
    '</tr></table></form>');
}


