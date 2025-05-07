function getNumber() {
  let num;
  do {
    num = prompt("Enter a number:");
  } while (isNaN(num) || num === null || num.trim() === "");
  num = parseInt(num);

  let output = `Number inputted: ${num}\n\n`;

  if (num % 2 === 1) {
    // Rectangle
    for (let i = num; i >= 1; i--) {
      output += `${i} `.repeat(num).trim() + '\n';
    }
  } else {
    // Triangle
    for (let i = num; i >= 1; i--) {
      output += `${i} `.repeat(i).trim() + '\n';
    }
  }

  document.getElementById("output").textContent = output.trim();
}

// Contact list
let contacts = [];

function addContact() {
  const nameInput = document.getElementById("contactName");
  const name = nameInput.value.trim();

  if (name === "") return;

  if (contacts.length >= 7) {
    contacts.shift(); // remove first
  }
  contacts.push(name);
  nameInput.value = "";
  renderContacts();
}

function removeContact() {
  contacts.pop(); // remove last
  renderContacts();
}

function renderContacts() {
  document.getElementById("contactsList").textContent = contacts.join(", ");
}
