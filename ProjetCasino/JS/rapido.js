var mise = parseInt($('#miseUtilisateur').val());
var cagnotte = parseInt($('#cagnotteUtilisateur').val());
var gain = 0;


var chifreSelectione =[];
var chifreOrdinateur =[];
var lesChiffresCommuns =[];
var choixB = 0;
var counter2 = 0;
var counter = 0;
var attenteBouton = true;
var nbCommun = 0;



function chifreAleatoire()
{
    if(attenteBouton == true)
    {
            
         if( $('#cagnotteUtilisateur').val() === "0" )
            {
                alert("Vous n'avez plus de sous !!");
            }



        else if( $('#miseUtilisateur').val() === "" || mise > cagnotte || mise < 1)
            {
                alert("Veuillez saisir une valeur correct !");
            }


        else
        {
            if(nbchoix== 8)
            {
                
                for (var i = 1; i <= 8; i++) 
                {

                    counter = Math.round(Math.random()*20);
                    
                    if (chifreOrdinateur.includes(counter))
                        {
                            i--;
                            // chifreAleatoire()
                            // chifreOrdinateur.filter(!=counter)
                        }
                    else
                    {
                        chifreOrdinateur.push(counter)
                    }
                        
                        
                        
                    
                }
                if(nbchoixB== 1)
                {
                
                        counter2 = Math.round(Math.random()*4);
                        compareListe()
                        $('.grisB').each(function(){

                            if (chifreOrdinateur.includes(parseInt($(this).html())))
                            {
                                $(this).removeClass('grisB').addClass('rose');
                            }
                            
                        });
                        $('.grilleBordinateur').each(function(){
                    
                            if (counter2 == parseInt($(this).html()))
                            {
                                $(this).removeClass('grilleBordinateur').addClass('rose');
                            }
                            
                        });
                        for (var i = 0; i < lesChiffresCommuns.length; i++)
                        {
                            $("#tableauCommun").append('<td>'+lesChiffresCommuns[i]+'</td>');
                        }
                        attenteBouton = false;
                        }
                        
                else
                {
                alert('Remplissez votre case bonus !!!')
                chifreOrdinateur =[];
                i = 0 ;
                counter = 0;
                counter2= 0;
                }
            }
            else
            {
                alert('Remplissez vos 8 cases !!!')
            }
        }
           

            
        
            
            
    }
   
    
    
}




var nbchoix = 0 ;

function choixDuJoueureA()
{
   
    
    if($(this).attr('class')=="orange")
    {
        
        $(this).removeClass('orange').addClass('gris')
        
            nbchoix =nbchoix - 1
        

            chifreSelectione.pop();
            // pas entierement fonctionelle car retire le dernier element de la liste et pas celui souhaiter

            // test avec splice non fonctionelle non plus
            
            // for (i=0; i < 8 ; i++){
            //     if (chifreSelectione.includes($(this).html())){
                    
            //         chifreSelectione.splice($.inArray($(this).html(),chifreSelectione))
            //     }
            // }
        
   
    }
   
    
    else
    {
        if (nbchoix<8)
        {
            $(this).removeClass('gris').addClass('orange');
            nbchoix =nbchoix + 1


            // chifreSelectione.push($(this).val())

            // chifreSelectione.push($('#mytable .gris')) ;

            chifreSelectione.push(parseInt($(this).html()));

        }
       
    }
    
    
    
}
var nbchoixB = 0 ;
function choixDuJoueureB()
{

    if($(this).attr('class')=="orange")
        {
            
            $(this).removeClass('orange').addClass('grilleB')
            
                nbchoixB =nbchoixB - 1

                choixB = 0;
            
            
       
        }
       
        
        else
        {
            if (nbchoixB<1)
            {
                $(this).removeClass('grilleB').addClass('orange');
                nbchoixB =nbchoixB + 1

                choixB = parseInt($(this).html());
            }
           
        }
    
}

function compareListe()
{
   
    for (i=0; i < 8 ; i++){
        if (chifreOrdinateur.includes(chifreSelectione[i])){
            nbCommun++;
            lesChiffresCommuns.push(chifreSelectione[i])
        }
    }
    // console.log(nbCommun);

    if(nbCommun == 6)
    {
        if(choixB == counter2 )
        {
            // nbCommun = nbCommun + 1;
            // // gain = mise * nbCommun;

            $('#cagnotteUtilisateur').val(parseInt($('#cagnotteUtilisateur').val()) + parseInt($('#miseUtilisateur').val()) * 4);
            $("#resultat").append('<p>Vous avez gagnez ' +$('#miseUtilisateur').val()+'*4'+'='+parseInt($('#miseUtilisateur').val()) * 4+'</p>');
        }
        else
        {
            $('#cagnotteUtilisateur').val(parseInt($('#cagnotteUtilisateur').val()) + parseInt($('#cagnotteUtilisateur').val()) * 3);
            $("#resultat").append('<p>Vous avez gagnez ' +$('#miseUtilisateur').val()+'*3'+'='+parseInt($('#miseUtilisateur').val()) * 3+'</p>');
        }
    }
    else if(nbCommun == 7)
    {
        if(choixB == counter2 )
        {
            // nbCommun = nbCommun + 1;
            $('#cagnotteUtilisateur').val(parseInt($('#cagnotteUtilisateur').val()) + parseInt($('#cagnotteUtilisateur').val()) * 6);
            $("#resultat").append('<p>Vous avez gagnez ' +$('#miseUtilisateur').val()+'*6'+'='+parseInt($('#miseUtilisateur').val()) * 6+'</p>');
        }
        else
        {
            $('#cagnotteUtilisateur').val(parseInt($('#cagnotteUtilisateur').val()) + parseInt($('#cagnotteUtilisateur').val()) * 5);
            $("#resultat").append('<p>Vous avez gagnez ' +$('#miseUtilisateur').val()+'*5'+'='+parseInt($('#miseUtilisateur').val()) * 5+'</p>');
        }
    }
    else if(nbCommun == 8)
    {
        if(choixB == counter2 )
        {
            // nbCommun = nbCommun + 1;
            $('#cagnotteUtilisateur').val(parseInt($('#cagnotteUtilisateur').val()) + parseInt($('#cagnotteUtilisateur').val()) * 8);
            $("#resultat").append('<p>Vous avez gagnez ' +$('#miseUtilisateur').val()+'*8'+'='+parseInt($('#miseUtilisateur').val()) * 8+'</p>');
        }
        else
        {
            $('#cagnotteUtilisateur').val(parseInt($('#cagnotteUtilisateur').val()) + parseInt($('#cagnotteUtilisateur').val()) * 7);
            $("#resultat").append('<p>Vous avez gagnez ' +$('#miseUtilisateur').val()+'*7'+'='+parseInt($('#miseUtilisateur').val()) * 7+'</p>');
        }
    }
    else if(nbCommun < 6)  
    {
        $('#cagnotteUtilisateur').val(parseInt($('#cagnotteUtilisateur').val()) - parseInt($('#miseUtilisateur').val()));
        $("#resultat").append('<p>Vous avez perdue !!!</p>');
    }
    if( $('#cagnotteUtilisateur').val() === "0" )
    {
        alert("Vous n'avez plus de sous !!");
        $('#resultat').attr('src',"../IMAGES/fin.gif");
    }
    // $('#cagnotteUtilisateur').val(gain)
}
function effacer()
{
    chifreSelectione =[];
    chifreOrdinateur =[];
    lesChiffresCommuns =[];
    choixB = 0;
    counter2 = 0;
    counter = 0;
    i = 0;
    nbchoix = 0;
    nbchoixB = 0;
    nbCommun = 0;
    attenteBouton = true;

    // if($('td').attr('class')=="orange")
    // {
    //     $(this).removeClass('orange').addClass('gris');
    // }
    // else
    // {
    //     $(this).removeClass('rose').addClass('grilleB');
    // }
    
        $('#mytableA1 td').removeClass('orange').addClass('gris');
        $('#mytableA2 td').removeClass('rose').addClass('grisB');
        $('#mytableB1 td').removeClass('orange').addClass('grilleB');
        $('#mytableB2 td').removeClass('rose').addClass('grilleBordinateur');
   
        // $('td').removeClass('rose').addClass('grilleB');
    

        $('#tableauCommun').empty()
        $('#resultat').empty()
        

    // location.reload(true);

    
    

}