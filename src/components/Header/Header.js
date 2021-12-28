import React, { useState } from "react";
import { Header, Segment, Icon } from "semantic-ui-react";
import "./Header.css";
import * as actions from "../../actions/index";
import { connect } from "react-redux";
import AddBoardModal from "../AddBoardModal/AddBoardModal";

const AppHeader = (props) => {
	const [showModal, setShowModal] = useState(false);

	const handleToggleClick = () => {
		props.toggleSidebar(!props.showSidebar);
	};

	const handleAddBoard = () => {
		setShowModal(true);
	};

	return (
		<Segment className="app-segment">
			<div className="buttons-container">
				<Icon
					name="angle double right"
					size="big"
					className={`toggle-button ${props.showSidebar ? "active" : ""}`}
					onClick={handleToggleClick}
				/>
				<div className="add-board-container" onClick={handleAddBoard}>
					<Header as="h4" className="app-header">
						Add Board
					</Header>
					<Icon name="plus" size="big" className="add-board-button" />
				</div>
				<AddBoardModal showModal={showModal} setShowModal={setShowModal} />
			</div>
			<div>
				<Icon name="check circle outline" />
				<Header as="h4" className="app-header">
					Todo App
				</Header>
			</div>
		</Segment>
	);
};

const mapStateToProps = (state) => {
	return {
		showSidebar: state.sidebar.showSidebar,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleSidebar: (sidebarState) =>
			dispatch(actions.toggleSidebar(sidebarState)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
