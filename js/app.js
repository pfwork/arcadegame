// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    // Enemy entities return to the game board after a run with a random row number
    if (this.x > 5) {
      this.x = 0;
      this.y = Math.floor(Math.random() * 3 + 1);
    }

    // console.log("player: " + player.x + " " + player.y);
    // console.log("enemy: " + this.x + " " + this.y);

    // Handle collision. When player encounters a enemy
    // Player return to the original location
    if (player.x * 101 < this.x * 101 + 80 &&
      player.x * 101 + 80 > this.x * 101 &&
      player.y * 83 < this.y * 83 + 83 &&
      player.y * 83 + 83 > this.y * 83) {
      player.x = 2;
      player.y = 5;
    }

    // if ((player.x === Math.ceil(this.x)) && (player.y === this.y)) {
      // player.x = 2;
      // player.y = 5;
    // }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {


    //Check the current column then, move it
      ctx.drawImage(Resources.get(this.sprite), this.x * 101, (this.y * 83 - 20));
      // loadText();
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {

    this.sprite = 'images/char-pink-girl.png';
    this.x = 2;
    this.y = 5;
    this.win = 0;
};

Player.prototype.update = function() {

  if (this.y === 0) {
    this.x = 2;
    this.y = 5;
    this.win++;
  }

};

Player.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x * 101, (this.y * 83 - 20));
    this.loadText();

};

Player.prototype.loadText = function() {

  ctx.font = "20pt sans-serif";
  ctx.fillText("Times of winning: " + this.win, 10, 40);
}


Player.prototype.handleInput = function(key) {
  console.log(key);
  if ((key === 'left') && (this.x !== 0)){
    this.x -= 1;
  }
  else if ((key === 'right') && (this.x !== 4)){
    this.x += 1;
  }
  else if ((key === 'up') && (this.y !== 0)){
    this.y -= 1;
  }
  else if ((key === 'down') && (this.y !== 5)){
    this.y += 1;
  }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy(0, 1, 3);
var enemy2 = new Enemy(0, 2, 2);
var enemy3 = new Enemy(0, 3, 1);
var allEnemies = [enemy1, enemy2, enemy3];
var player = new Player();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
