const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.resolve("db", "contacts.json");

const updateContacts = async (contacts) =>
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);

    console.table(JSON.parse(data));
  } catch (err) {
    console.log(`Something went very wrong.. ${err.message}`);
  }
};

const getContactById = async (contactId) => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    const filterContacts = contacts.filter(
      (contact) => contact.id === contactId
    );

    console.table(filterContacts);
  } catch (err) {
    console.log(`Something went very wrong.. ${err.message}`);
  }
};

const removeContact = async (contactId) => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    const filterContacts = contacts.filter(
      (contact) => contact.id !== contactId
    );

    console.table(filterContacts);

    await fs.writeFile(contactsPath, JSON.stringify(filterContacts, null, 4));
    
  } catch (err) {
    console.log(`Something went very wrong.. ${err.message}`);
  }
};

const addContact = async (name, email, phone) => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    const newContact = {
      id: Math.floor(Math.random() * (999 - 100 + 1) + 100).toString(),
      name,
      email,
      phone,
    };
    const newContactsList = [...contacts, newContact];

    await updateContacts(newContactsList);

    console.table(newContactsList);
  } catch (err) {
    console.log(`Something went very wrong.. ${err.message}`);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};