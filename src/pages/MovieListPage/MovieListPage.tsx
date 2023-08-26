import { useState } from "react";

import MovieCard from "../../components/MovieCard/MovieCard";
import Wrapper from "../../components/Wrapper/Wrapper";
import { useFetch } from "../../constants/hooks";
import { GhibliMovie } from "../../constants/types";
import { links } from "../../constants/links";
import LoadingPage from "../LoadingPage/LoadingPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import Filter from "../../components/Filter/Filter";

const MovieListPage = () => {
	const { data, error } = useFetch<GhibliMovie[]>(
		links.api + "/films?fields=id,title,image"
	);
	const [filter, setFilter] = useState("");

	if (error) {
		return <ErrorPage customText='An error occured' />;
	}

	if (!data) {
		return <LoadingPage />;
	}

	return (
		<Wrapper>
			<main className='flex flex-col justify-start items-center w-full'>
				<Filter
					placeholder='Search a movie...'
					filter={filter}
					setFilter={setFilter}
				/>

				<section className='flex flex-col xs:flex-row flex-wrap justify-start items-center w-full'>
					{data
						.filter((movie) =>
							movie.title.toLowerCase().includes(filter.toLowerCase())
						)
						.sort((m1, m2) => m1.title.localeCompare(m2.title))
						.map((movie) => (
							<MovieCard key={movie.id} movie={movie} />
						))}
				</section>
			</main>
		</Wrapper>
	);
};

export default MovieListPage;
