function MachineASous() 
{
btnJouer.addEventListener('click',()=>{
count =3;
mCase1.Jouer(9999);
mCase2.Jouer(9999);
mCase3.Jouer(9999);


});
btnStop.addEventListener('click',()=>{
switch(count){
case 3:
mCase1.stop();
break;
case 2:
mCase2.stop();
break;
case 3:
mCase.stop();
break;
}
count--;
});

}