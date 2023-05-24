const fs = require("fs").promises;
const path = require("path");

const contactsPath = require(path.basename("./db/contacts.json"));
function listContacts() {
  fs.readFile(contactsPath)
    .then((data) => console.log(data.toString()))
    .catch((err) => console.log(err.message));
}

function getContactById(contactId) {
  fs.readFile(contactsPath)
    .then((contacts) => console.log(contacts.toString()))
    .catch((err) => console.log(err.message));
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
