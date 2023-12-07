import fs from "fs/promises";
import { nanoid } from "nanoid";

import path from "path";

const contactsPath = path.resolve("db", "contact.json");

export const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

export const getContactById = async (contactId) => {
  const allContact = await listContacts();
  const result = allContact.find((item) => item.id === contactId);
  return result || null;
};

export const removeContact = async (contactId) => {
  const allContact = await listContacts();
  const index = allContact.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = allContact.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(allContact, null, 2));
  return result;
};

export const addContact = async (name, email, phone) => {
  const allContact = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  allContact.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(allContact, null, 2));

  return newContact;
};
