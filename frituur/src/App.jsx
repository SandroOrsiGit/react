import { useState } from "react";
import Header from "./Header";
import SnackList from "./SnackList";
import { NavLink, Outlet } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Header />
			<SnackList />
		</div>
	);
}

export default App;
