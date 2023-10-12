import React, { useEffect, useState } from "react";
import todos from "./apis";
import Form from "./components/Form";
import List from "./components/List";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import { filteredToDoList, navInput } from "./utils/utilities";



const appTitle = "To-Do App";

const App = () => {
    const [todoList, setTodoList] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");

    useEffect(() => {
        async function fetchData() {
            const { data } = await todos.get("/todos");
            setTodoList(data);
        }

        fetchData();
    }, []);

    const addTodo = async (item) => {
        const { data } = await todos.post("/todos", item);
        setTodoList((oldList) => [...oldList, data]);
    };

    const removeTodo = async (id) => {
        await todos.delete(`/todos/${id}`);
        setTodoList((oldList) => oldList.filter((item) => item._id !== id));
    };

    const editTodo = async (id, item) => {
        await todos.put(`/todos/${id}`, item);
    };
    console.log(todoList)


    return (
        <div className="ui container center aligned">
            <Navbar setSelectedDate={setSelectedDate} list={navInput(todoList)} />
            <Section>
                <h1>{appTitle}</h1>
            </Section>

            <Section>
                <Form addTodo={addTodo} />
            </Section>

            <Section>
                {selectedDate ?
                <List
                    editTodoListProp={editTodo}
                    removeTodoListProp={removeTodo}
                    list={filteredToDoList(todoList, selectedDate)}
                />
            :
            <div>
                <h1>To see your list Please select a date from above first</h1>
            </div>
            }
            </Section>
        </div>
    );
};

export default App;