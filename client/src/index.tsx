import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./style.css";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import MovieListPage from "./pages/MovieListPage/MovieListPage";
import MoviePage from "./pages/MoviePage/MoviePage";
import PeopleListPage from "./pages/PeopleListPage/PeopleListPage";
import LocationListPage from "./pages/LocationListPage/LocationListPage";
import SpecieListPage from "./pages/SpecieListPage/SpecieListPage";
import VehicleListPage from "./pages/VehicleListPage/VehicleListPage";

const router = createBrowserRouter(
	[
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
		{
			path: "/people",
			element: <PeopleListPage />,
			errorElement: <ErrorPage />,
		},
		{
			path: "/people/:peopleId",
			element: <PeopleListPage />,
			errorElement: <ErrorPage />,
		},
		{
			path: "/locations",
			element: <LocationListPage />,
			errorElement: <ErrorPage />,
		},
		{
			path: "/locations/:locationId",
			element: <LocationListPage />,
			errorElement: <ErrorPage />,
		},
		{
			path: "/species",
			element: <SpecieListPage />,
			errorElement: <ErrorPage />,
		},
		{
			path: "/species/:specieId",
			element: <SpecieListPage />,
			errorElement: <ErrorPage />,
		},
		{
			path: "/vehicles",
			element: <VehicleListPage />,
			errorElement: <ErrorPage />,
		},
		{
			path: "/vehicles/:vehicleId",
			element: <VehicleListPage />,
			errorElement: <ErrorPage />,
		},
	],
	{ basename: "/my-ghibli-list" }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
