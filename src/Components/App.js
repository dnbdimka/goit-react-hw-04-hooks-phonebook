import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";

const initialState = {
  contacts: JSON.parse(localStorage.getItem("contacts")) || [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  filter: "",
};

const App = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(state.contacts));
  });

  const removeContactById = (id) => {
    setState((prev) => ({
      ...prev,
      contacts: [...prev.contacts.filter((contact) => contact.id !== id)],
    }));
  };

  const onFilterInput = (e) => {
    const { value, name } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onAddNewContact = (contact) => {
    if (
      state.contacts.some((contactState) =>
        contactState.name.toLowerCase().includes(contact.name.toLowerCase())
      )
    ) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    setState((prev) => ({
      ...prev,
      contacts: [
        ...prev.contacts,
        { name: contact.name, number: contact.number, id: uuidv4() },
      ],
    }));
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddNewContact={onAddNewContact} />

        <h2>Contacts</h2>
        {state.contacts.length !== 0 && (
          <Filter onFilterInput={onFilterInput} filter={state.filter} />
        )}

        <ContactList
          contacts={state.contacts}
          filterValue={state.filter}
          removeContactById={removeContactById}
        />
      </div>
    </>
  );
};

export default App;
