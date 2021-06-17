function PigDice (player, total, score, turn) {
  this.player = player;
  this.total = total;
  this.score = score;
  this.turn = turn;
}

let randomNum = Math.floor(Math.random(1, 7) * (7-1) + 1);
console.log(randomNum)
PigDice.prototype.roll = function() {
  console.log(this.player)
  if (this.player === 'Masha') {
    this.scoreP1 = randomNum;
    this.total += this.scoreP1;
}
if (this.player === 'Lisa') {
  this.scoreP2 = randomNum;  
  this.total += this.score;
}
}

PigDice.prototype.hold = function() {
  this.score = randomNum;
  
}

//UI
$(document).ready(function () {
  let playerName1 = 'Masha';
  let playerName2 = 'Lisa'
  let scoreP1 = 0;
  let scoreP2 = 0;
  let turnPlayer1 = true;
  let turnPlayer2 = false;
  let booleanVal = true;
  console.log('hellow')

  $('#roll').click(function(){ 
  console.log('rolled')
  let gameStartP1 = new PigDice(playerName1, 0, scoreP1, turnPlayer1)
  let gameStartP2 = new PigDice(playerName2, 0, scoreP2, turnPlayer2)
  if (turnPlayer1 === true) {
    gameStartP1.roll()
    turnPlayer1 = !booleanVal;
    console.log('masha rolled')
    console.log(gameStartP1)
    $('#score').append(turnPlayer1.score)
    $('.result').append(turnPlayer1.total)
  } 
  else if (turnPlayer2 === true) {
    gameStartP2.roll()
    turnPlayer2 = !booleanVal;
    console.log('lisa rolled')
    console.log(gameStartP2)
    $('#score').append(turnPlayer2.score)
    $('.result').append(turnPlayer2.total)
  }
  });

  $('#hold').click(function(){
    this.turn =! this.turn
    this.total += this.score; 
    this.turn = false;
})

});
