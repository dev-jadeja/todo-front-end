import React from "react";
import "./RemainingTodos.css";
import { Header } from "semantic-ui-react";
import RemainingTodo from "../RemainingTodo/RemainingTodo";
import { connect } from "react-redux";

const RemainingTodos = (props) => {
	const allRemainingTodos = props.remainingTodos.map((todo) => (
		<RemainingTodo
			title={todo.title}
			description={todo.description}
			todoId={todo.id}
			key={todo.id}
		/>
	));

	return (
		<div className="remaining-todos-container">
			<Header as="h4">Remaining Tasks 📃</Header>
			{allRemainingTodos}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		remainingTodos: state.todo.remainingTodos,
	};
};

export default connect(mapStateToProps)(RemainingTodos);
