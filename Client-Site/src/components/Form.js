import React, { useState } from "react";
import styled from 'styled-components';

const FormContainer = styled.form`
  margin-top: 20px;
  text-align: center;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Form = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") return;

    addTodo({ title: inputValue, completed: false });
    setInputValue("");
  };

  return (
    <FormContainer onSubmit={handleFormSubmit}>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        type="text"
        placeholder="Enter something to do..."
      />
      <SubmitButton type="submit">Add</SubmitButton>
    </FormContainer>
  );
};

export default Form;
