import React, { useState } from "react";
import styled from "styled-components";

const TodoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 10px 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TodoTitle = styled.h2`
  flex: 1;
  margin: 0;
  padding: 0;
  cursor: pointer;
  color: ${(props) => (props.completed ? "#008000" : "inherit")};
`;

const EditInput = styled.input`
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 0 10px;
`;

const ToggleButton = styled.button`
  background-color: ${(props) => (props.completed ? "#008000" : "#FF0000")};
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 10px;
  margin: 0 10px;
`;
const ToggleButtonText = styled.span`
  margin-left: 5px; /* Add some spacing between the icon and text */
`;

const RemoveButton = styled.button`
  background-color: #8B0000;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 10px;
`;

const Todo = ({ title, completed, removeTodoItemProp, editTodoItemProp }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(title);
  const [tempValue, setTempValue] = useState(title);
  const [completedState, setCompleted] = useState(completed);

  const handleDivDoubleClick = () => {
    setIsEditing(true);
  };

  const handleInputKeyDown = (e) => {
    const key = e.keyCode;

    if (key === 13) {
      editTodoItemProp({ title: tempValue });
      setValue(tempValue);
      setIsEditing(false);
    } else if (key === 27) {
      setTempValue(value);
      setIsEditing(false);
    }
  };

  const handleInputOnChange = (e) => {
    setTempValue(e.target.value);
  };

  const handleButtonClick = () => {
    setCompleted((oldCompleted) => {
      const newState = !oldCompleted;
      editTodoItemProp({ completed: newState });
      return newState;
    });
  };

  return (
    <TodoWrapper>
      {isEditing ? (
        <EditInput
          onChange={handleInputOnChange}
          onKeyDown={handleInputKeyDown}
          autoFocus={true}
          value={tempValue}
        />
      ) : (
        <>
          <TodoTitle
            completed={completedState}
            onDoubleClick={handleDivDoubleClick}
          >
            {value}
          </TodoTitle>

          <ToggleButton completed={completedState} onClick={handleButtonClick}>
            <i className="white check icon"></i>
            <ToggleButtonText>
              {completedState ? "Completed" : "Incomplete"}
            </ToggleButtonText>
          </ToggleButton>

          <RemoveButton onClick={removeTodoItemProp}>
            <i className="white remove icon">Remove</i>
          </RemoveButton>
        </>
      )}
    </TodoWrapper>
  );
};

export default Todo;
