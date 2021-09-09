import React from "react";

export const ContactPicker = ({ contacts, setContact }) => {
  return (
    <select onChange={(e) => setContact(e.target.value)} required>
      <option value="">Select contact</option>
      {contacts.map((contact, index) => (
        <option key={index} value={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );
};
