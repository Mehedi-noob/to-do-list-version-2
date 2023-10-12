import React from "react";
import styled from "styled-components";
import Todo from "./Todo";

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 16px;
  margin: 10px;
`;

const List = ({ list, removeTodoListProp, editTodoListProp }) => {
  const renderedList = list.map((item) => (
    <Card key={item.title}>
      <Todo
        title={item.title}
        completed={item.completed}
        removeTodoItemProp={(e) => removeTodoListProp(item._id)}
        editTodoItemProp={(updatedItem) => editTodoListProp(item._id, updatedItem)}
      />
    </Card>
  ));

  return (
    <div className="ui grid center aligned">
      {renderedList}
    </div>
  );
};

export default List;
