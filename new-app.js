// OOP Tic Tac Toe boilerplate code

$(function(){
  function Game() {
    //Create a new instance of player 1
    this.player1 = new Player('X');

    //Do the same for a player 2
    this.player2 = new Player('O');
    
    // Current Player
    this.currentPlayer = this.player1;

    //Create the board
    this.board = new Board();

    // Update score

  }

  // Remember: prototypes are shared functions between all game instances
  Game.prototype.switchPlayer = function(thePlayer) {
    //Switch players
    if (thePlayer === 'X'){
    	return 'O';
    } else {
    	return 'X';
    }
  };

  // `Game.prototype.init` kicks off a new game with a board and two players
  Game.prototype.init = function() {
  	// console.log('start game in init')

    // this.board.makeMove(this.player1.team, $(".square").first());
    var accessBoard = this.board;
    var access = this;
    var accessPlayer = this.currentPlayer;
    $(this.board.$cells).click(function(event){ //the event is the click itself and the target is the cell clicked
    	accessBoard.makeMove(accessPlayer.team, $(event.target));

      var isWin = accessBoard.checkWinner(accessPlayer);
      if (isWin) {
        alert("Winner");
        accessPlayer.wins = accessPlayer.wins + 1;
        $("#player_" + accessPlayer.team).html(accessPlayer.wins);
      }
    	accessPlayer.team = access.switchPlayer(accessPlayer.team);
    })
  };

  // A starter Player constructor.

  function Player(team) {
    //Is the player X or O?
    this.team = team;
    this.wins = 0;
  };

  // A starter Board constructor.
  function Board() {
    //Tracks the cells of the board instance
    this.$cells = $(".square");

    Board.prototype.makeMove = function(player, $specificSquare){
    	// console.log('inside makeMove')
    	// console.log($specificSquare)
    	$specificSquare.html(player);
    }

    // checkWinner()
    Board.prototype.checkWinner = function(player){
      var mark = player.team;
      var win = mark + mark + mark;
      var isWin = false;
      // check rows
      for (var i = 0; i < this.$cells.length; i += 3) { 
         isWin = isWin || (this.$cells[i].innerHTML + 
         this.$cells[i + 1].innerHTML  +
         this.$cells[i + 2].innerHTML === win);

      }

      //check cols
      for (var i = 0; i < 3; i += 1) { 
        isWin = isWin || (this.$cells[i].innerHTML + 
         this.$cells[i + 3].innerHTML  +
         this.$cells[i + 6].innerHTML === win);

      }
      isWin = isWin || (this.$cells[0].innerHTML + 
         this.$cells[4].innerHTML  +
         this.$cells[8].innerHTML === win);

      isWin = isWin || (this.$cells[2].innerHTML +
        this.$cells[4].innerHTML +
        this.$cells[6].innerHTML === win);

      return isWin;
    }

    // Reset the board
    Board.prototype.reset = $(".reset").click(function(event){
    	location.reload();
    });

  };

  // Start the game!

  var game = new Game();
  game.init();
})