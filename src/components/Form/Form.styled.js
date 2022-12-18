import styled from 'styled-components';

export const ContainerForm = styled.form`
  width: 300px;
  outline: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 20px;
  padding: 20px;
  gap: 8px;
`;

export const Input = styled.input`
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  padding: 12px 20px 12px 40px;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 5px 15px;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: green;
  border: none;
  border-radius: 15px;
  box-shadow: 0 4px #999;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover {
    background-color: darkgreen;
  }
  &:active {
    background-color: darkgreen;

    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export const Title = styled.h2`
  display: block;
  margin-left: 20px;
`;
