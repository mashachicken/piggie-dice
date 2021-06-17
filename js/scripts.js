function PigDice (player, total, score, turn) {
  this.player = player;
  this.total = total;
  this.score = score;
  this.turn = turn;
}


PigDice.prototype.roll = function() {
  let randomNum = Math.floor(Math.random(1, 7) * (7-1) + 1);
  console.log(this.player)
  if (this.player === 'Masha' && this.turn === true) {
    this.score = randomNum;
    this.total += this.score;
    console.log(this.total)
}
if (this.player === 'Lisa') {
  this.score = randomNum;  
  this.total += this.score;
}
}

PigDice.prototype.hold = function() {
  this.total = this.score;
  
}

//UI
$(document).ready(function () {
  let playerName1 = 'Masha';
  let playerName2 = 'Lisa'
  let total1 = 0;
  let total2 = 0;
  let scoreP1 = 0;
  let scoreP2 = 0;
  let turnPlayer1 = true;
  let turnPlayer2 = false;
  console.log('hellow')

  let gameStartP1 = new PigDice(playerName1, total1, scoreP1, turnPlayer1)
  let gameStartP2 = new PigDice(playerName2, total2, scoreP2, turnPlayer2)
  $('#roll').click(function(){ 
    if (gameStartP2.turn === true ) {
    gameStartP2.roll()
    gameStartP2.turn = !turnPlayer1; 
    gameStartP1.turn = !turnPlayer2;  
    console.log('lisa rolled')
    $('#score2').html(gameStartP2.score)
    $('#result2').html(gameStartP2.total)
  }
  else if (gameStartP1.turn === true) {
    console.log(gameStartP2.turn)
    gameStartP1.roll()
    gameStartP1.turn = !turnPlayer1;
    gameStartP2.turn = !turnPlayer2;
    console.log(gameStartP2.turn)
    $('#score1').html(gameStartP1.score)
    console.log(gameStartP1.score)
    $('#result1').html(gameStartP1.total)
  } 
  });

  $('#hold').click(function(){
    this.turn =! this.turn;
    this.total += this.score; 
    this.turn = false;
})

});
