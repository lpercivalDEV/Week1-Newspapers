var guy= document.getElementById("guy");
var container= document.getElementById("container");

var guyLeft = 0

function anim(e){

  if(e.keyCode==39){
      guyLeft +=7;
      guy.style.left = guyLeft + 'px';
  }
  if(e.keyCode==37){
    guyLeft -=7;
    guy.style.left = guyLeft + 'px';
  }
}

function anom(e){
  
}
document.onkeydown =anim;
