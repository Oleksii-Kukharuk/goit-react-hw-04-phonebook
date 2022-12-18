import React from 'react';
import { ButtonDelete, Title, ListItem } from './ContactList.syled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <Title>Contacts</Title>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            {name}: {number}
            <ButtonDelete onClick={() => onDelete(id)} type="button">
              {' '}
              Delete
            </ButtonDelete>
          </ListItem>
        ))}
      </ul>
    </div>
  );
};
