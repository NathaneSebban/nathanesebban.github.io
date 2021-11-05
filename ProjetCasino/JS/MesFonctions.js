// Rideau
$(
    function()
    {
        $('#div4').click(function(){
            $('#div4').animate({left:'-1500px'},2000,function(){
                $('#div5').animate({left:'1600px'},2000,function(){  
                });
            });
        });
        $('#div5').click(function(){
            $('#div5').animate({left:'1500px'},2000,function(){
                $('#div4').animate({left:'-1600px'},2000,function(){  
                });
            });
        });
                    
    }  
);   
