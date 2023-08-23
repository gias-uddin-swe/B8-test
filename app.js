// Get the reference to the <ol> element and the button
const olElement = document.getElementById("myList");
const addButton = document.getElementById("addItem");

// Function to add a new <li> item to the <ol>
function addListItem() {
  const newLi = document.createElement("li"); // Create a new <li> element
  newLi.textContent = "New Item"; // Set the text content of the <li>
  olElement.appendChild(newLi); // Append the new <li> to the <ol>
}

// Attach the addListItem function to the button's click event
addButton.addEventListener("click", addListItem);
