var boton = document.getElementById('boton');
boton.addEventListener("click", bloquea, false); 

function bloquea(){
  if(boton.disabled == false){
     boton.disabled = true;
     
     setTimeout(function(){
        boton.disabled = false;
    }, 14400000)
  }
}