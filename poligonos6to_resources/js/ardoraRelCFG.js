//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=6;
var score=0; scoreMax=8; scoreInc=1; scoreDec=0
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="INICIO";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#00FF00"; colorText="#0080FF"; colorSele="#FFFF00";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="FELICIDADES"; messageTime=""; messageError="ERROR"; messageErrorG="ERROR"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#0080FF"; borderTime="#00FF00";borderError="#FFFFFF"; borderAttempts="#FFFF00";
var wordsGame="cG9saWdvbm9zNnRv"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>TRIANGULO</p>","<p>CUADRADO</p>","<p>PENTÁGONO</p>","<p>OCTÁGONO</p>","<p>RECTÁNGULO</p>","<p>ROMBO</p>","<p>ROMBOIDE</p>","<p>TRIAMGULOISÓSCELES</p>"];
var iL=["<div  align='center'><img alt='' src='poligonos6to_resources/media/trianguloregular.jpeg'></div>","<div  align='center'><img alt='' src='poligonos6to_resources/media/cuadradoregular.jpeg'></div>","<div  align='center'><img alt='' src='poligonos6to_resources/media/pentagonoregular.jpeg'></div>","<div  align='center'><img alt='' src='poligonos6to_resources/media/octagonoregular.jpeg'></div>","<div  align='center'><img alt='' src='poligonos6to_resources/media/rectanguloirregular.jpeg'></div>","<div  align='center'><img alt='' src='poligonos6to_resources/media/romboirregular.jpeg'></div>","<div  align='center'><img alt='' src='poligonos6to_resources/media/romboideirregular.jpeg'></div>","<div  align='center'><img alt='' src='poligonos6to_resources/media/trianguloisosceles.jpeg'></div>"];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["<p>IRREGULAR</p>","<p>REGULAR</p>","<p>REGULAR</p>","<p>REGULAR</p>","<p>REGULAR</p>","<p>IRREGULAR</p>","<p>IRREGULAR</p>","<p>IRREGULAR</p>"]; ansRL=["MQ==","Mg==","Mw==","NA==","MA==","NQ==","Ng==","Nw=="];
var iR=["","","","","","","",""];
var auR=[5,1,2,3,4,6,7,8];
