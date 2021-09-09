import React, { useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, setContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if  thecontact name is not a duplicate
    */

    if (!contacts.includes((contact) => contact.name === name)) {
      setContact(name, phoneNumber, email);
      setName("");
      setPhoneNumber("");
      setEmail("");
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  const contactsFormProps = {
    name,
    setName,
    phoneNumber,
    setPhoneNumber,
    email,
    setEmail,
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          {...contactsFormProps}
          handleSubmit={handleSubmit}
        ></ContactForm>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList array={contacts}></TileList>
      </section>
    </div>
  );
};
