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

    // To make bug move, it just need to change its x-cordinates or columns number
    // it needs to remember every enengy's state of which column# it is in
    // So that it can move the column in each render loop
    // Make the starting Column a random number between 0-5 so that each enemy can appear
    // Moving in different speed/pace.

    //Load all the bug

    // Resources.load([this.sprite]);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {

    //Check the current column then, move it
    // if(this.currentCol <= 5)
    // {
      ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
      // this.currentCol++;
    // }else {
      // this.currentCol = 0;
    // }


};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-pink-girl.png';
    this.x = 2;
    this.y = 5;
};

Player.prototype.update = function() {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

Player.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
    /* var image = new Image(60, 45);
    image.src = 'images/char-pink-girl.png';

    ctx.drawImage(image, col * 101, row * 83); */
};

Player.prototype.handleInput = function(key) {
  console.log(key);
  if ((key == 'left') && (this.x != 0)){
    this.x -= 1;
  }
  else if ((key == 'right') && (this.x != 4)){
    this.x += 1;
  }
  else if ((key == 'up') && (this.y != 0)){
    this.y -= 1;
  }
  else if ((key == 'down') && (this.y != 5)){
    this.y += 1;
  }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy(0, 1, 5);
var enemy2 = new Enemy(0, 2, 1);
var enemy3 = new Enemy(0, 3, 12);
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
