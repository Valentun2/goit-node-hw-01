import {program} from "commander"
import * as contactService from "./contact.js";










const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactService.listContacts();
      return console.log(allContacts);

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
//   invokeAction({action:"list"})
// invokeAction({action:'get', id:"1DEXoP8AuCGYc1YgoQ6hw"})
// invokeAction({action:'remove', id:"1DEXoP8AuCGYc1YgoQ6hw"})
// invokeAction({ action: "add", name: "Valik", email: "ofi@com", phone: "849746896" });




program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');




program.parse()
const options = program.opts()

invokeAction(options);

