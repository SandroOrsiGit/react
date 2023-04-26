import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import About from "./About";
import Error from "./Error";
import reportWebVitals from "./reportWebVitals";
import reducer from "./redux/reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SnackList from "./SnackList";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <SnackList />,
			},
			{
				path: "about",
				element: <About />,
			},
		],
	},
]);

const store = configureStore({ reducer });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
