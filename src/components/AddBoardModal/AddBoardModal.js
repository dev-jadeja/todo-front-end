import React, { useState } from "react";
import { Modal, Button, Input } from "semantic-ui-react";
import "./AddBoardModal.css";
import { connect } from "react-redux";
import * as actions from "../../actions/index";

const AddBoardModal = (props) => {
	const [boardName, setBoardName] = useState("");

	const onChange = (e) => {
		setBoardName(e.target.value);
	};

	const onClickSubmit = () => {
		if (boardName === "") {
			alert("Board's name cannot be empty.");
			return;
		}
		props.newBoard(boardName);
		props.setShowModal(false);
	};

	return (
		<Modal
			size="mini"
			open={props.showModal}
			onClose={() => props.setShowModal(false)}
		>
			<Modal.Header>Add Board Name</Modal.Header>
			<Modal.Content>
				<Input placeholder="board name..." onChange={(e) => onChange(e)} />
			</Modal.Content>
			<Modal.Actions>
				<Button negative onClick={() => props.setShowModal(false)}>
					Cancel
				</Button>
				<Button positive onClick={() => onClickSubmit()}>
					Submit
				</Button>
			</Modal.Actions>
		</Modal>
	);
};

const mapStateToProps = (state) => {
	return {
		loading: state.board.loading,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		newBoard: (title) => dispatch(actions.newBoard(title)),
		// setAlert: (msg, alertType) => dispatch(actions.setAlert(msg, alertType)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBoardModal);
