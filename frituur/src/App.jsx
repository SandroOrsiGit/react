import { useState } from "react";
import Header from "./Header";
import SnackList from "./SnackList";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<Outlet />
			</main>
		</div>
	);
}

export default App;
