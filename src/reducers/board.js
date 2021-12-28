import * as actionTypes from "../actions/actionTypes";

const initialState = {
	boards: [],
	loading: false,
	board: null,
	boardUpdateWatcher: false,
};

const setStart = (state, payload) => {
	return {
		...state,
		loading: true,
	};
};

const newBoardSuccess = (state, payload) => {
	return {
		...state,
		loading: false,
		boardUpdateWatcher: !state.boardUpdateWatcher,
	};
};

const newBoardFail = (state, payload) => {
	return {
		...state,
		loading: false,
		boards: [],
		board: null,
	};
};

const fetchBoardsSuccess = (state, payload) => {
	return {
		...state,
		loading: false,
		boards: [...payload],
	};
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case actionTypes.SET_START:
			return setStart(state, payload);
		case actionTypes.NEW_BOARD_SUCCESS:
		case actionTypes.DELETE_BOARD_SUCCESS:
			return newBoardSuccess(state, payload);
		case actionTypes.NEW_BOARD_FAIL:
		case actionTypes.FETCH_BOARDS_FAIL:
		case actionTypes.DELETE_BOARD_FAIL:
			return newBoardFail(state, payload);
		case actionTypes.FETCH_BOARDS_SUCCESS:
			return fetchBoardsSuccess(state, payload);
		default:
			return state;
	}
};

export default reducer;
