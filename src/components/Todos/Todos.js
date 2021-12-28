import React, { useEffect, useState } from "react";
import "./Todos.css";
import { connect } from "react-redux";
import { Input, Button, TextArea, Form } from "semantic-ui-react";
import RemainingTodos from "../RemainingTodos/RemainingTodos";
import CompletedTodos from "../CompletedTodos/CompletedTodos";
import * as actions from "../../actions/index";

const Todos = (props) => {
	const [todoTitle, setTodoTitle] = useState("");
	const [todoDescription, setTodoDescription] = useState("");

	const handleTodoTitle = (e) => {
		setTodoTitle(e.target.value);
	};

	const handleTodoDescription = (e) => {
		setTodoDescription(e.target.value);
	};

	const handleAddTask = () => {
    if(todoTitle==="" && todoDescription==="") {
      alert("Fill Task Title atleast.")
      return;
    }
		props.addTodo(todoTitle, todoDescription, props.activeBoardId);
		setTodoTitle("");
		setTodoDescription("");
	};

	useEffect(() => {
		if (props.activeBoardId === -1) return;
		props.fetchTodos(props.activeBoardId);
	}, [props.activeBoardId, props.todoUpdateWatcher]);

	return (
		<div
			className={`todos-container ${props.showSidebar ? "" : "no-left-margin"}`}
		>
			<div className="add-task-container">
				<Form>
					<Input
						value={todoTitle}
						placeholder="Add a new task..."
						onChange={(e) => handleTodoTitle(e)}
					/>
					<TextArea
						value={todoDescription}
						placeholder="Add task description..."
						style={{ minHeight: 100 }}
						onChange={(e) => handleTodoDescription(e)}
					/>
					<Button primary onClick={() => handleAddTask()}>
						Add Task
					</Button>
				</Form>
			</div>
			<RemainingTodos />
			<CompletedTodos />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		showSidebar: state.sidebar.showSidebar,
		activeBoardId: state.sidebar.activeBoardId,
		loading: state.todo.loading,
		todoUpdateWatcher: state.todo.todoUpdateWatcher,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchTodos: (id) => dispatch(actions.fetchTodos(id)),
		addTodo: (title, description, boardId) =>
			dispatch(actions.addTodo(title, description, boardId)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
