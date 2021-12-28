import React from "react";
import AppHeader from "./components/Header/Header";
import AppSidebar from "./components/Sidebar/Sidebar";
import Todos from "./components/Todos/Todos";
import LandingPage from "./components/LandingPage/LandingPage";
import { connect } from "react-redux";

function App(props) {
	return (
		<>
			<AppHeader />
			<AppSidebar />
			{props.activeBoardId === -1 ? <LandingPage /> : <Todos />}
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		activeBoardId: state.sidebar.activeBoardId,
	};
};

export default connect(mapStateToProps)(App);
