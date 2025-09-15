// Exercise 1 – Naming: Refactor Poorly Named Variables
/*
Goal:
Use meaningful names for function and variables.
Output object should clearly show area and perimeter.*/
// poor code

function c(a, b) {
  let x = a * b;
  let y = 2 * (a + b);
  return { x, y };
}

// good code

function getAreaAndPerimeterOfRectangle(length, breadth) {
  let area = length * breadth;
  let perimeter = 2 * (length + breadth);
  return { area, perimeter };
}
