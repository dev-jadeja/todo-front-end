import * as actionTypes from "./actionTypes";
import axios from "axios";

export const newBoard = (title) => {
	return async (dispatch) => {
		dispatch({
			type: actionTypes.SET_START,
		});
		try {
			const res = await axios.post("http://localhost:1337/api/board", {
				boardName: title,
			});

			dispatch({
				type: actionTypes.NEW_BOARD_SUCCESS,
			});
		} catch (err) {
			console.log(err);
			dispatch({
				type: actionTypes.NEW_BOARD_FAIL,
			});
		}
	};
};

export const fetchBoards = () => {
	return async (dispatch) => {
		dispatch({
			type: actionTypes.SET_START,
		});
		try {
			const res = await axios.get("http://localhost:1337/api/board");
			dispatch({
				type: actionTypes.FETCH_BOARDS_SUCCESS,
				payload: res.data.boards,
			});
		} catch (err) {
			console.log(err);
			dispatch({
				type: actionTypes.FETCH_BOARDS_FAIL,
			});
		}
	};
};

export const deleteBoard = (id) => {
	return async (dispatch) => {
		dispatch({
			type: actionTypes.SET_START,
		});
		try {
			const res = await axios.delete(`http://localhost:1337/api/board/${id}`);

			dispatch({
				type: actionTypes.DELETE_BOARD_SUCCESS,
			});
		} catch (err) {
			console.log(err);
			dispatch({
				type: actionTypes.DELETE_BOARD_FAIL,
			});
		}
	};
};
