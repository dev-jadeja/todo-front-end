import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import sidebarReducer from "./reducers/sidebar";
import boardReducer from "./reducers/board";
import todoReducer from "./reducers/todo";

const initialState = {};

const middleware = [thunk];

const rootReducer = combineReducers({
	sidebar: sidebarReducer,
	board: boardReducer,
	todo: todoReducer,
});

const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
