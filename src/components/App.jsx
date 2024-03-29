import { nanoid } from 'nanoid';
import React from 'react';
import { useState, useEffect } from 'react';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? [
      {
        id: 'id-1',
        name: 'Rosie Simpson',
        number: '459-12-56',
      },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    let contact = {
      id: nanoid(),
      name,
      number,
    };

    const arrayOfcontactsNames = contacts.map(contact => contact.name);

    if (arrayOfcontactsNames.includes(name)) {
      alert(`${name} already in your phonebook`);
    } else setContacts([contact, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const onChangeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      <Form onSubmit={addContact} />
      <Filter value={filter} onChange={onChangeFilter} />
      <ContactList contacts={filteredContacts()} onDelete={deleteContact} />
    </>
  );
};
