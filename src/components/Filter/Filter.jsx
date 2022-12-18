import { nanoid } from 'nanoid';
import React from 'react';
import { FilterInput, FilterP } from './Filter.styled';

const filterId = nanoid();
export const Filter = ({ value, onChange }) => {
  return (
    <>
      <FilterP>Find contacts by name</FilterP>
      <label htmlFor={filterId}></label>
      <FilterInput
        id={filterId}
        type="text"
        value={value}
        onChange={onChange}
      ></FilterInput>
    </>
  );
};
