// OOP Tic Tac Toe boilerplate code
$(function() {

var board = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: ""
}

var winners = [
  [0,1,2], [3,4,5], [5,6,7],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];


  function Game(squares) {
    this.board = new Board(squares);
    this.players = [];
    this.players[0] = new Player('Player 1', 'X'); // instances of players in the game
    this.players[1] = new Player('Player 2', 'O'); // instances of players in the game
    this.switchPlayers = function() {

    }
  }

  // Remember: prototypes are shared functions between all game instances
  Game.prototype.nextPlayer = function() {
    //Switch players
  };

  // `Game.prototype.init` kicks off a new game with a board and two players
  Game.prototype.init = function() {
    //
  };

  // Player constructor
  function Player(player, symbol) {
    this.player = player;
    this.symbol = symbol;
  }

  // Board constructor has empty squares
  function Board(size) {
    this.size = size;
    this.grid = [];
    this.filledSquares = 0;
  }

 // Square constructor is empty with no Xs or Os
  function Square() {
    this.symbol = "";
    this.isOccupied = false;
  }

  // Square sets the symbol X or O
  Square.prototype.setSymbol = function(value) {
    if(value !== 'X' || value !== 'O'){
      return 'Please enter X or O';
    } else if (this.isOccupied == true){
      return 'This square is already filled, choose another';
    } else {
      this.symbol = value;
    }
  };

  // Square gets the symbol X or O 
  Square.prototype.getSymbol = function(value) {
    return this.symbol;
  };

  // Start the game!
  var game = new Game();
  game.init();

});