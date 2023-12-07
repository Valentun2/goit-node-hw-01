import {program} from "commander"
import * as contactService from "./contact.js";


const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactService.listContacts();
      return console.table(allContacts);

    case "get":
      const contactById = await contactService.getContactById(id);
      return console.log(contactById);

    case "add":
      const newContact = await contactService.addContact(name, email, phone);
      return console.log(newContact);

    case "remove":
      const deleteContact = await contactService.removeContact(id);
      return console.log(deleteContact);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};


program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');




program.parse()
const options = program.opts()

invokeAction(options);

