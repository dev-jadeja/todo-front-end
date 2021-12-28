import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchTodos = (id) => {
	return async (dispatch) => {
		dispatch({
			type: actionTypes.SET_START_TODOS,
		});
		try {
			const res = await axios.get(`http://localhost:1337/api/todo/${id}`);
			dispatch({
				type: actionTypes.FETCH_TODOS_SUCCESS,
				payload: res.data,
			});
		} catch (err) {
			console.log(err);
			dispatch({
				type: actionTypes.FETCH_TODOS_FAIL,
			});
		}
	};
};

export const addTodo = (title, description, boardId) => {
	return async (dispatch) => {
		dispatch({
			type: actionTypes.SET_START_TODOS,
		});
		try {
			const res = await axios.post("http://localhost:1337/api/todo/", {
				title: title,
				description: description,
				board: boardId,
			});
			dispatch({
				type: actionTypes.ADD_TODO_SUCCESS,
				payload: res.data,
			});
		} catch (err) {
			console.log(err);
			dispatch({
				type: actionTypes.ADD_TODO_FAIL,
			});
		}
	};
};

export const deleteTodo = (id) => {
	return async (dispatch) => {
		dispatch({
			type: actionTypes.SET_START_TODOS,
		});
		try {
			const res = await axios.delete(`http://localhost:1337/api/todo/${id}`);
			dispatch({
				type: actionTypes.DELETE_TODO_SUCCESS,
			});
		} catch (err) {
			console.log(err);
			dispatch({
				type: actionTypes.DELETE_TODO_FAIL,
			});
		}
	};
};

export const checkTodo = (id) => {
	return async (dispatch) => {
		dispatch({
			type: actionTypes.SET_START_TODOS,
		});
		try {
			const res = await axios.patch("http://localhost:1337/api/todo", {
				id: id,
				completed: true,
			});
			dispatch({
				type: actionTypes.CHECK_TODO_SUCCESS,
			});
		} catch (err) {
			console.log(err);
			dispatch({
				type: actionTypes.CHECK_TODO_FAIL,
			});
		}
	};
};
