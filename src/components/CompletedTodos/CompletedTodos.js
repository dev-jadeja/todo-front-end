import React from "react";
import { Header } from "semantic-ui-react";
import CompletedTodo from "../CompletedTodo/CompletedTodo";
import "./CompletedTodos.css";
import { connect } from "react-redux";

const CompletedTodos = (props) => {
	const allCompletedTodos = props.completedTodos.map((todo) => (
		<CompletedTodo
			title={todo.title}
			description={todo.description}
			todoId={todo.id}
			key={todo.id}
		/>
	));
	return (
		<div className="completed-todos-container">
			<Header as="h4">Completed Tasks 😎</Header>
			{allCompletedTodos}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		completedTodos: state.todo.completedTodos,
	};
};

export default connect(mapStateToProps)(CompletedTodos);
