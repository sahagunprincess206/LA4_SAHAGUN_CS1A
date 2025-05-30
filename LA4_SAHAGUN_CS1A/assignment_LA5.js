// List of the customers
let customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];
const TABLE_SIZE = 5;

// Create an empty hash table with a 5 slots
let hashTable = new Array(TABLE_SIZE).fill(null);

// A simple hash function to find position for a name in each customers
function hash(name) {
  let sum = 0;

  for (let char of name) {
    sum += char.charCodeAt(0);
  }
  // Return a number between 0 and 4
  return sum % TABLE_SIZE;
}

// Put each customer into the hash table
for (let name of customers) {
  let index = hash(name);
  // If slot is taken, go to the next slot
  while (hashTable[index] !== null) {
    index = (index + 1) % TABLE_SIZE;
  }
  hashTable[index] = name;
}

// Show the hash table to the user
function showTable() {
  let result = "";
  for (let i = 0; i < TABLE_SIZE; i++) {

    result += (i + 1) + ": " + (hashTable[i] || "[empty]") + "\n";
  }
  alert(result);
}

// Keep serving customers while there are any left
while (hashTable.some(c => c !== null)) {
  showTable();
  console.log("Current Hash Table: " + hashTable.map(x => x || "[empty]").join(", "));
  
  // Ask the user which customer number to be serve
  let input = prompt("Enter customer number to service (1 to 5):");
  let num = parseInt(input) - 1;
  
  //Then check if number is valid and slot is not empty
  if (num >= 0 && num < TABLE_SIZE && hashTable[num] !== null) {
    alert("Now serving: " + hashTable[num]);
    hashTable[num] = null; //Then remove served customer
  } else {
    alert("Invalid number or empty slot.");
  }
}

alert("All customers have been served.");