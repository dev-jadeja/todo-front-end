import * as actionTypes from "./actionTypes";

export const toggleSidebar = (sidebarState) => {
	return (dispatch) => {
		dispatch({
			type: actionTypes.TOGGLE_SIDEBAR,
			payload: sidebarState,
		});
	};
};

export const changeActiveBoard = (boardId) => {
	return (dispatch) => {
		dispatch({
			type: actionTypes.CHANGE_ACTIVE_BOARD,
			payload: boardId,
		});
	};
};
