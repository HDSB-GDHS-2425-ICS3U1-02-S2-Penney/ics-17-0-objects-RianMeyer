/**** SETUP CODE ****/

// Call the init function when the HTML window loads
window.onload = init;

function init() {
  // Init function that sets up our canvas. 
  canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext('2d');
  // Start the first frame request to begin the game loop
  window.requestAnimationFrame(gameLoop);

}

/**** OBJECT CREATION FUNCTIONS ****/

// Write the circle object function here
function Circle(radius) {
  this.radius = radius;

  // Method to calculate area
  this.area = function() {
    return Math.PI * this.radius * this.radius;
  };

  // Method to calculate circumference
  this.circumference = function() {
    return 2 * Math.PI * this.radius;
  };

  // Method to describe the circle
  this.describe = function() {
    return `Circle with radius ${this.radius}`;
  };
}

// Example usage:
const myCircle = new Circle(5);
console.log(myCircle.describe()); // "Circle with radius 5"
console.log(myCircle.area()); // 78.53981633974483
console.log(myCircle.circumference()); // 31.41592653589793




// Write the createCircle function here. 
function createCircle(radius) {
  return {
    radius: radius,
    area: function() {
      return Math.PI * this.radius * this.radius;
    },
    circumference: function() {
      return 2 * Math.PI * this.radius;
    },
    describe: function() {
      return `Circle with radius ${this.radius}`;
    }
  };
}

// Example usage:
const circle = createCircle(5);
console.log(circle.describe());         // "Circle with radius 5"
console.log(circle.area());             // 78.53981633974483
console.log(circle.circumference());    // 31.41592653589793




// Write the randomInteger function here. 
// Returns a random integer between min and max (inclusive)
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
console.log(randomInteger(1, 10)); // Could log any integer from 1 to 10
console.log(randomInteger(5, 5));  // Always logs 5
console.log(randomInteger(0, 100)); // Any integer from 0 to 100




/**** GAMELOOP ****/

function gameLoop(timestamp) {

  // Call the createCircle function here.
  const myCircle = createCircle(10);
console.log(myCircle.describe());      // "Circle with radius 10"
console.log(myCircle.area());          // 314.1592653589793
console.log(myCircle.circumference()); // 62.83185307179586



  // This causes the game to loop every frame (Do not change this)
  window.requestAnimationFrame(gameLoop);
}



