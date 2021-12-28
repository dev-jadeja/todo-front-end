import * as actionTypes from "../actions/actionTypes";

const initialState = {
	showSidebar: true,
	activeBoardId: -1,
};

const toggleSidebar = (state, payload) => {
	return {
		...state,
		showSidebar: payload,
	};
};

const changeActiveBoard = (state, payload) => {
	return {
		...state,
		activeBoardId: payload,
	};
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case actionTypes.TOGGLE_SIDEBAR:
			return toggleSidebar(state, payload);
		case actionTypes.CHANGE_ACTIVE_BOARD:
			return changeActiveBoard(state, payload);
		default:
			return state;
	}
};

export default reducer;
