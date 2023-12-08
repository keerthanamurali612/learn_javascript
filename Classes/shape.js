// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area.
// triangle  formula A = 1/2 × base × height
// area of circle formula A=3.14*r(pow(2))

class Shape {
    // Triangle area calculation method
    static calculateTriangleArea(base, height) {
      return 0.5 * base * height;
    }
  
    // Circle area calculation method
    static calculateCircleArea(radius) {
      return Math.PI * Math.pow(radius, 2);
    }
  }
  
  // Example usage
  const triangleArea = Shape.calculateTriangleArea(5, 8);
  console.log(`Area of Triangle: ${triangleArea.toFixed(2)}`);
  
  const circleArea = Shape.calculateCircleArea(4);
  console.log(`Area of Circle: ${circleArea.toFixed(2)}`);
  
