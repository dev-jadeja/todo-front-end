import React from "react";
import { Divider, Icon } from "semantic-ui-react";
import "./RemainingTodo.css";
import { connect } from "react-redux";
import * as actions from "../../actions/index";

const RemainingTodo = (props) => {
	const handleDeleteTodo = () => {
		props.deleteTodo(props.todoId);
	};

	const handleCheckTodo = () => {
		props.checkTodo(props.todoId);
	};

	return (
		<div>
			<Divider />
			<Icon
				name="check circle"
				className="task-complete-icon"
				onClick={() => handleCheckTodo()}
			/>
			<Icon
				name="delete"
				className="task-delete-icon"
				onClick={() => handleDeleteTodo()}
			/>
			<div className="task-title">{props.title}</div>
			<div className="task-description">{props.description}</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		deleteTodo: (id) => dispatch(actions.deleteTodo(id)),
		checkTodo: (id) => dispatch(actions.checkTodo(id)),
	};
};

export default connect(null, mapDispatchToProps)(RemainingTodo);
