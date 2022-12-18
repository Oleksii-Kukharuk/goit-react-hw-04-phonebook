import styled from 'styled-components';

export const Title = styled.h2`
  display: block;
  margin-left: 20px;
`;

export const ButtonDelete = styled.button`
  margin-left: 8px;
  margin-bottom: 8px;
  display: inline-block;
  padding: 5px 15px;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: darkred;
  border: none;
  border-radius: 15px;
  box-shadow: 0 4px #999;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover {
    background-color: red;
  }
  &:active {
    background-color: red;

    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export const ListItem = styled.li`
  font-weight: 500;
`;
