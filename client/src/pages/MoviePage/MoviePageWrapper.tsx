import { useState } from "react";
import MovieHero from "../../components/MovieHero/MovieHero";
import MovieLinks from "../../components/MovieLinks/MovieLinks";
import MovieMeta from "../../components/MovieMeta/MovieMeta";
import MovieTitle from "../../components/MovieTitle/MovieTitle";
import Wrapper from "../../components/Wrapper/Wrapper";
import { GhibliMovie } from "../../constants/types";
import LoadingPage from "../LoadingPage/LoadingPage";

type MoviePageWrapperProps = {
	data: GhibliMovie;
};
export const MoviePageWrapper = ({ data }: MoviePageWrapperProps) => {
	const [imageLoaded, setImageLoaded] = useState(false);
	const [bannerLoaded, setBannerLoaded] = useState(false);

	const img = new Image();
	img.onload = () => {
		setImageLoaded(true);
	};
	img.src = data.image;

	const banner = new Image();
	banner.onload = () => {
		setBannerLoaded(true);
	};
	banner.src = data.movie_banner;

	if (!imageLoaded || !bannerLoaded) {
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

				<MovieLinks
					locationUrls={data.locations}
					peopleUrls={data.people}
					specieUrls={data.species}
					vehicleUrls={data.vehicles}
				/>
			</main>
		</Wrapper>
	);
};
