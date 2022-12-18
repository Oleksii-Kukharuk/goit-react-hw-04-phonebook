import { nanoid } from 'nanoid';
import React from 'react';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const storage = localStorage.getItem('contacts');
    const parsedStorage = JSON.parse(storage);

    if (parsedStorage !== null) {
      this.setState({ contacts: parsedStorage });
    }
    return;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }

    // console.log(localStorage.getItem('contacts', JSON.parse));
  }

  addContact = ({ name, number }) => {
    let contact = {
      id: nanoid(),
      name,
      number,
    };

    const arrayOfcontactsNames = this.state.contacts.map(
      contact => contact.name
    );

    if (arrayOfcontactsNames.includes(name)) {
      alert(`${name} already in your phonebook`);
    } else
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onChangeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  filteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filtredContacts = this.filteredContacts();

    return (
      <>
        <Form onSubmit={this.addContact} />
        <Filter value={filter} onChange={this.onChangeFilter} />
        <ContactList contacts={filtredContacts} onDelete={this.deleteContact} />
      </>
    );
  }
}
