import * as actionTypes from "../actions/actionTypes";

const initialState = {
	completedTodos: [],
	remainingTodos: [],
	loading: false,
	todoUpdateWatcher: false,
};

const setStartTodos = (state, payload) => {
	return {
		...state,
		loading: true,
	};
};

const addTodoSuccess = (state, payload) => {
	return {
		...state,
		loading: false,
		todoUpdateWatcher: !state.todoUpdateWatcher,
	};
};

const fetchTodosSuccess = (state, payload) => {
	return {
		...state,
		loading: false,
		completedTodos: [
			...payload.todos.filter((todo) => todo.completed === true),
		],
		remainingTodos: [
			...payload.todos.filter((todo) => todo.completed === false),
		],
	};
};

const fetchTodosFail = (state, payload) => {
	return {
		...state,
		loading: false,
		completedTodos: [],
		remainingTodos: [],
	};
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case actionTypes.SET_START_TODOS:
			return setStartTodos(state, payload);
		case actionTypes.FETCH_TODOS_SUCCESS:
			return fetchTodosSuccess(state, payload);
		case actionTypes.ADD_TODO_SUCCESS:
		case actionTypes.DELETE_TODO_SUCCESS:
		case actionTypes.CHECK_TODO_SUCCESS:
			return addTodoSuccess(state, payload);
		case actionTypes.FETCH_TODOS_FAIL:
		case actionTypes.ADD_TODO_FAIL:
		case actionTypes.DELETE_TODO_FAIL:
		case actionTypes.CHECK_TODO_FAIL:
			return fetchTodosFail(state, payload);
		default:
			return state;
	}
};

export default reducer;
