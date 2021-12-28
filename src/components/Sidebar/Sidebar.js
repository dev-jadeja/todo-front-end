import React, { useState, useEffect } from "react";
import { Menu, Icon } from "semantic-ui-react";
import "./Sidebar.css";
import { connect } from "react-redux";
import DeleteBoardModal from "../DeleteBoardModal/DeleteBoardModal";
import * as actions from "../../actions/index";

const AppSidebar = (props) => {
	const [activeItem, setActiveItem] = useState(-1);
	const [deleteId, setDeleteId] = useState(-1);
	const [showModal, setShowModal] = useState(false);

	const handleItemClick = (e, name) => {
		setActiveItem(name);
		props.changeActiveBoard(parseInt(name));
	};

	const handleDeleteBoard = (boardId) => {
		setDeleteId(boardId);
		setShowModal(true);
	};

	useEffect(() => {
		props.fetchBoards();
	}, [props.boardUpdateWatcher]);

	let allboards = null;

	if (!props.loading) {
		allboards = props.boards.map((board) => (
			<Menu.Item
				key={board.id}
				name={board.id.toString()}
				active={activeItem === board.id.toString()}
				onClick={(e, { name }) => handleItemClick(e, name)}
			>
				{board.boardName}
				<Icon name="close" onClick={() => handleDeleteBoard(board.id)} />
			</Menu.Item>
		));
	}

	return (
		<>
			<Menu
				secondary
				vertical
				className={`app-sidebar ${props.showSidebar ? "active" : ""}`}
			>
				{allboards}
			</Menu>
			<DeleteBoardModal
				showModal={showModal}
				setShowModal={setShowModal}
				deleteId={deleteId}
			/>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		showSidebar: state.sidebar.showSidebar,
		boards: state.board.boards,
		loading: state.board.loading,
		boardUpdateWatcher: state.board.boardUpdateWatcher,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchBoards: () => dispatch(actions.fetchBoards()),
		changeActiveBoard: (boardId) =>
			dispatch(actions.changeActiveBoard(boardId)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AppSidebar);
