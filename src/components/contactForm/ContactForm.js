import React from "react";

export const ContactForm = ({
  name,
  setName,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
        required
      ></input>
      <input
        type="tel"
        name="phoneNumber"
        value={phoneNumber}
        onChange={(e) => {
          const phoneNumber = e.target.value;
          setPhoneNumber(phoneNumber);
        }}
        placeholder="0000000000"
        maxLength="10"
        minLength="10"
        required
      ></input>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        required
      ></input>
      <input type="submit"></input>
    </form>
  );
};
