import { useParams } from "react-router-dom";
import { useFetch } from "../../constants/hooks";
import { links } from "../../constants/links";
import { GhibliMovie } from "../../constants/types";
import ErrorPage from "../ErrorPage/ErrorPage";
import LoadingPage from "../LoadingPage/LoadingPage";
import { MoviePageWrapper } from "./MoviePageWrapper";

const MoviePage = () => {
	const { movieId } = useParams();
	const { data, error } = useFetch<GhibliMovie>(
		`${links.api}/films/${movieId}`
	);

	if (error) {
		return <ErrorPage customText='An error occured...' />;
	}

	if (!data) {
		return <LoadingPage />;
	}

	return <MoviePageWrapper data={data} />;
};

export default MoviePage;
