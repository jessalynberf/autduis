const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

// Move the pen to a starting point (e.g., 10, 10)
context.moveTo(10, 10);

// Draw a line to another point (e.g., 100, 100)
context.lineTo(100, 100);

// Stroke or fill the path to actually draw the line
context.stroke();  // or context.fill();
