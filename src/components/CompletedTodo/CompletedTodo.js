import React from "react";
import { Divider, Icon } from "semantic-ui-react";
import "./CompletedTodo.css";
import { connect } from "react-redux";
import * as actions from "../../actions/index";

const CompletedTodo = (props) => {
	const handleDeleteTodo = () => {
		props.deleteTodo(props.todoId);
	};
	return (
		<div>
			<Divider />
			<Icon
				name="delete"
				className="completed-task-delete-icon"
				onClick={() => handleDeleteTodo()}
			/>
			<div className="completed-task-title">{props.title}</div>
			<div className="completed-task-description">{props.description}</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		deleteTodo: (id) => dispatch(actions.deleteTodo(id)),
	};
};

export default connect(null, mapDispatchToProps)(CompletedTodo);
