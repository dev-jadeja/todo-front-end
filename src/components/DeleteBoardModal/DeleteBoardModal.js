import React from "react";
import { Modal, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../../actions/index";

const DeleteBoardModal = (props) => {
	const handleDeleteBoard = () => {
		props.deleteBoard(props.deleteId);
		if (props.activeBoardId === props.deleteId) {
			props.changeActiveBoard(-1);
		}
		props.setShowModal(false);
	};

	return (
		<Modal
			size="mini"
			open={props.showModal}
			onClose={() => props.setShowModal(false)}
		>
			<Modal.Header>Do you want to delete the selected Board?</Modal.Header>
			<Modal.Actions>
				<Button negative onClick={() => props.setShowModal(false)}>
					No
				</Button>
				<Button positive onClick={() => handleDeleteBoard()}>
					Yes
				</Button>
			</Modal.Actions>
		</Modal>
	);
};

const mapStateToProps = (state) => {
	return {
		activeBoardId: state.sidebar.activeBoardId,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		deleteBoard: (id) => dispatch(actions.deleteBoard(id)),
		changeActiveBoard: (boardId) =>
			dispatch(actions.changeActiveBoard(boardId)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteBoardModal);
