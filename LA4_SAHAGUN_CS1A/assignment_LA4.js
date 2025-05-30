// List of 5 customers
let queue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// In each customer's will enter their name's and numbers
function costumerNumber() {
  for (let i = 0; i < queue.length; i++) {
    alert(queue[i] + " is customer number: " + (i + 1));
  }
}

// It will keep running while there are customers in the queue
while (queue.length > 0) {
  costumerNumber(); 
  
  console.log("Current Queue: " + queue.join(", ")); // Show the queue in console. log
  
  let number = prompt("Enter the customer number to service:"); // It ask who will be to serve
  let index = parseInt(number) - 1; // Convert into index
  
  // If number is valid, serve customer
  if (index >= 0 && index < queue.length) {
    alert("Now serving: " + queue[index]);
    queue.splice(index, 1); // Remove served customer
  } else {
    alert("Invalid number."); // Show error for the wrong input
  }
}

alert("All customers have been served."); // Then it will print out the End message