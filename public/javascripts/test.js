$(function() {

  $( "#btnStart" ).click(function() {
    contador_s =0;
	  contador_m =0;
    s = document.getElementById("segundos");
	  m = document.getElementById("minutos");
	  cronometro = setInterval(function(){
      if(contador_s==60){
        contador_s=0;
        contador_m++;
        if(contador_m < 10){
          m.innerHTML = '0' + contador_m;
        }else {
          m.innerHTML = contador_m;
        }
        if(contador_m==60){
          contador_m=0;
        }
      }
      if(contador_s < 10){
        s.innerHTML = '0' + contador_s;
      }else {
        s.innerHTML = contador_s;
      }
      contador_s++;
	  },1000);
  });


});
