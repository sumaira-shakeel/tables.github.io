
// Get the table number from the user
let tableNumber = prompt("Which table do you want to print?");

// Validate the input
if (isNaN(tableNumber) || tableNumber <= 0) {
  alert("Invalid input. Please enter a positive integer.");
} else {
  // Print the table
  for (let i = 1; i <= 12; i++) { // Loop 10 times
    console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
  }
}