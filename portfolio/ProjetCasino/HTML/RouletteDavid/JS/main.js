var mise = parseInt($('#miseUtilisateur').val());
var cagnotte = parseInt($('#cagnotteUtilisateur').val());

function LancerRoulette()
{
    var mise = parseInt($('#miseUtilisateur').val());
    var cagnotte = parseInt($('#cagnotteUtilisateur').val());
    

    if( $('#cagnotteUtilisateur').val() === "0" )
    {
        alert("Vous n avez plus de sous !!");
    }



    else if( $('#miseUtilisateur').val() === "" || mise > cagnotte || mise < 1)
    {
        alert("Veuillez saisir une valeur correct !");
    }
    else
    {
        $('#resultat').attr('src',"../IMAGES/enCours.png");
        $('#roulette ul').playSpin({
            onFinish : function(){
                Calculer();
            }
        });
    }
}

function Calculer()
{

    if(($('#aGauche').css('top')) == ($('#milieu').css('top')) && ($('#milieu').css('top')) == ($('#aDroite').css('top')))
    {
       
        // alert("jack pot !!!");
        $('#resultat').attr('src',"../IMAGES/jackpot.gif");

        $('#cagnotteUtilisateur').val(parseInt($('#cagnotteUtilisateur').val()) + parseInt(($('#miseUtilisateur').val()))*5);
    }
    else if(($('#aGauche').css('top')) == ($('#milieu').css('top')) || ($('#milieu').css('top')) == ($('#aDroite').css('top')) || ($('#aGauche').css('top')) == ($('#aDroite').css('top')))
    {
        // alert("C'EST GAGNE");
        $('#resultat').attr('src',"../IMAGES/victoire.gif");
        
        
        $('#cagnotteUtilisateur').val(parseInt($('#cagnotteUtilisateur').val()) + parseInt(($('#miseUtilisateur').val()))*2);
    }
    else
    {
        // alert("ZUT C'EST PERDU");
        $('#resultat').attr('src',"../IMAGES/defaite.gif");
        
        $('#cagnotteUtilisateur').val(parseInt($('#cagnotteUtilisateur').val()) - parseInt(($('#miseUtilisateur').val())));
    }
     if( $('#cagnotteUtilisateur').val() === "0" )
    {
        alert("Vous n avez plus de sous !!");
        $('#resultat').attr('src',"../IMAGES/fin.gif");
    }
}