import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./style.css";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import MovieListPage from "./pages/MovieListPage/MovieListPage";
import MoviePage from "./pages/MoviePage/MoviePage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/movies",
		element: <MovieListPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/movies/:movieId",
		element: <MoviePage />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
