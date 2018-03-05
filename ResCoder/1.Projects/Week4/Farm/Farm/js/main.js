document.getElementById('bulbasaur').onclick=bulbasaurMoves;
document.getElementById('charmander').onclick=charmanderMoves;
document.getElementById('psyduck').onclick=psyduckMoves;
document.getElementById('jigglypuff').onclick=jigglypuffMoves;
document.getElementById('slowpoke').onclick=slowpokeMoves;
document.getElementById('pikachu').onclick=pikachuMoves;
document.getElementById('snorlax').onclick=snorlaxMoves;
document.getElementById('magikarp').onclick=magikarpMoves;
document.getElementById('pidgeot').onclick=pidgeotMoves;
document.getElementById('squirtle').onclick=squirtleMoves;

var tonoBulbasaur = document.getElementById('tonoBulbasaur')
var tonoCharmander = document.getElementById('tonoCharmander')
var tonoJigglypuff = document.getElementById('tonoJigglypuff')
var tonoMagikarp = document.getElementById('tonoMagikarp')
var tonoPidgeot = document.getElementById('tonoPidgeot')
var tonoPikachu = document.getElementById('tonoPikachu')
var tonoPsyduck = document.getElementById('tonoPsyduck')
var tonoSlowpoke = document.getElementById('tonoSlowpoke')
var tonoSnorlax = document.getElementById('tonoSnorlax')
var tonoSquirtle = document.getElementById('tonoSquirtle')

function bulbasaurMoves(){
  var x = Math.floor(Math.random()*300);
  var y = Math.floor(Math.random()*300);
  bulbasaur.style.top = x + 'px';
  bulbasaur.style.left = y + 'px';
  tonoBulbasaur.play()
};

function charmanderMoves(){
  var x = Math.floor(Math.random()*300);
  var y = Math.floor(Math.random()*300);
  charmander.style.top = x + 'px';
  charmander.style.left = y + 'px';
  tonoCharmander.play()
};
function psyduckMoves(){
  var x = Math.floor(Math.random()*300);
  var y = Math.floor(Math.random()*300);
  psyduck.style.top = x + 'px';
  psyduck.style.left = y + 'px';
  tonoPsyduck.play()
};

function jigglypuffMoves(){
  var x = Math.floor(Math.random()*300);
  var y = Math.floor(Math.random()*300);
  jigglypuff.style.top = x + 'px';
  jigglypuff.style.left = y + 'px';
  tonoJigglypuff.play()
};
function slowpokeMoves(){
  var x = Math.floor(Math.random()*300);
  var y = Math.floor(Math.random()*300);
  slowpoke.style.top = x + 'px';
  slowpoke.style.left = y + 'px';
  tonoSlowpoke.play()
};

function pikachuMoves(){
  var x = Math.floor(Math.random()*300);
  var y = Math.floor(Math.random()*300);
  pikachu.style.top = x + 'px';
  pikachu.style.left = y + 'px';
  tonoPikachu.play()
};
function snorlaxMoves(){
  var x = Math.floor(Math.random()*300);
  var y = Math.floor(Math.random()*300);
  snorlax.style.top = x + 'px';
  snorlax.style.left = y + 'px';
  tonoSnorlax.play()
};

function magikarpMoves(){
  var x = Math.floor(Math.random()*300);
  var y = Math.floor(Math.random()*300);
  magikarp.style.top = x + 'px';
  magikarp.style.left = y + 'px';
  tonoMagikarp.play()
};
function pidgeotMoves(){
  var x = Math.floor(Math.random()*300);
  var y = Math.floor(Math.random()*300);
  pidgeot.style.top = x + 'px';
  pidgeot.style.left = y + 'px';
  tonoPidgeot.play()
};

function squirtleMoves(){
  var x = Math.floor(Math.random()*300);
  var y = Math.floor(Math.random()*300);
  squirtle.style.top = x + 'px';
  squirtle.style.left = y + 'px';
  tonoSquirtle.play()
};
