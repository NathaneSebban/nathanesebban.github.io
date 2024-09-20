var mise = parseInt($('#miseUtilisateur').val());
var cagnotte = parseInt($('#cagnotteUtilisateur').val());

function LancerRoulette()
{
    var mise = parseInt($('#miseUtilisateur').val());
    var cagnotte = parseInt($('#cagnotteUtilisateur').val());

    if( $('#cagnotteUtilisateur').val() === "0" )
    {
        alert("VOUS N'AVEZ PLUS D'ARGENT");
    }

    else if( $('#miseUtilisateur').val() === "" || mise > cagnotte || mise < 1)
    {
        alert("Veuillez saisir une valeur correct !");
    }
    else
    {
        $('#resultat').attr('src',"../IMAGES/image-vide.png");
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
        // alert("C'EST LE GROS JACKPOT");
        
        $('#resultat').attr('src',"../IMAGES/new-jackpot.gif");

        $('#cagnotteUtilisateur').val(parseInt($('#cagnotteUtilisateur').val()) + parseInt(($('#miseUtilisateur').val()))*5);
    }
    else if(($('#aGauche').css('top')) == ($('#milieu').css('top')) || ($('#milieu').css('top')) == ($('#aDroite').css('top')) || ($('#aGauche').css('top')) == ($('#aDroite').css('top')))
    {
        // alert("C'EST GAGNE");

        $('#resultat').attr('src',"../IMAGES/bravo.gif");
        
        $('#cagnotteUtilisateur').val(parseInt($('#cagnotteUtilisateur').val()) + parseInt(($('#miseUtilisateur').val()))*2);
    }
    else
    {
        // alert("ZUT C'EST PERDU");

        $('#resultat').attr('src',"../IMAGES/perdu.png");
        
        $('#cagnotteUtilisateur').val(parseInt($('#cagnotteUtilisateur').val()) - parseInt(($('#miseUtilisateur').val())));
    }
    if( $('#cagnotteUtilisateur').val() === "0" )
    {
        alert("VOUS N'AVEZ PLUS D'ARGENT");
    }
}