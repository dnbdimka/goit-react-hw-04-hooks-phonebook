import React, { useState } from "react";

const initialState = {
  name: "",
  number: "",
};

const ContactForm = ({ onAddNewContact }) => {
  const [contact, setContact] = useState(initialState);
  const onHandleChange = (e) => {
    const { value, name } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handelSubmitForm = (e) => {
    e.preventDefault();
    onAddNewContact(contact);
    setContact({ ...initialState });
  };

  return (
    <form onSubmit={handelSubmitForm}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={onHandleChange}
          value={contact.name}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={onHandleChange}
          value={contact.number}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
