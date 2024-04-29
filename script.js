const ball = document.getElementById("ball");
let ballPos = { x: 100, y: 100 }; // Initial position
let velocity = { x: 2, y: 2 }; // Speed of the ball
const ballSize = 50; // Ball size (same as in CSS)

function update() {
  let screenWidth = window.innerWidth;
  let screenHeight = window.innerHeight;

  // Update ball position with current velocity
  ballPos.x += velocity.x;
  ballPos.y += velocity.y;

  // Check for collisions with screen edges and reverse velocity if collided
  if (ballPos.x <= 0 || ballPos.x + ballSize >= screenWidth) {
    velocity.x *= -1; // Reverse direction on the x-axis
  }
  if (ballPos.y <= 0 || ballPos.y + ballSize >= screenHeight) {
    velocity.y *= -1; // Reverse direction on the y-axis
  }

  // Apply updated position to ball element
  ball.style.left = ballPos.x + "px";
  ball.style.top = ballPos.y + "px";

  requestAnimationFrame(update); // Call update again for the next frame
}

update(); // Start the animation
