import { useParams } from "react-router-dom";
import MovieHero from "../../components/MovieHero/MovieHero";
import MovieMeta from "../../components/MovieMeta/MovieMeta";
import MovieTitle from "../../components/MovieTitle/MovieTitle";
import Wrapper from "../../components/Wrapper/Wrapper";
import { useFetch } from "../../constants/hooks";
import { links } from "../../constants/links";
import { GhibliMovie } from "../../constants/types";
import ErrorPage from "../ErrorPage/ErrorPage";
import LoadingPage from "../LoadingPage/LoadingPage";

const MoviePage = () => {
	const { movieId } = useParams();
	const { data, error } = useFetch<GhibliMovie>(
		`${links.ghibliApi}/films/${movieId}`
	);

	if (error) {
		return <ErrorPage customText='An error occured...' />;
	}

	if (!data) {
		return <LoadingPage />;
	}

	return (
		<Wrapper>
			<main className='relative w-full'>
				<MovieTitle
					title={data.title}
					original_title={data.original_title}
					original_title_romanised={data.original_title_romanised}
				/>

				<MovieHero
					img={{ src: data.movie_banner, alt: data.title }}
					release_date={data.release_date}
					rt_score={data.rt_score}
					running_time={data.running_time}
				/>

				<MovieMeta
					img={{ src: data.image, alt: data.title }}
					director={data.director}
					producer={data.producer}
					description={data.description}
				/>
			</main>
		</Wrapper>
	);
};

export default MoviePage;
