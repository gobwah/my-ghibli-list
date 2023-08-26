import { Link } from "react-router-dom";
import { HiExternalLink } from "react-icons/hi";

import { GhibliMovie } from "../../constants/types";
import { useCallback, useState } from "react";
import CustomImage from "../CustomImage/CustomImage";

interface MovieCardProps {
	movie: GhibliMovie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
	const [imgLoaded, setImgLoaded] = useState(false);

	const handleLoaded = useCallback(() => {
		setImgLoaded(true);
	}, []);

	return (
		<article
			id={movie.id}
			className='w-full xs:w-1/2 ss:w-1/3 sm:w-1/4 md:w-1/5 aspect-[71/100] relative'
			title={movie.title}
		>
			<CustomImage
				src={movie.image}
				alt={movie.title}
				imgClass='w-full h-full object-cover'
				handleLoad={handleLoaded}
				loaded={imgLoaded}
			/>

			<Link
				to={`/movies/${movie.id}`}
				className='absolute top-0 bottom-0 right-0 left-0 flex justify-around items-center'
			/>

			<aside className='absolute top-0 bottom-0 right-0 left-0 hidden sm:block opacity-0 hover:opacity-100 bg-secondary bg-opacity-50 transition-opacity duration-500'>
				<Link
					to={`/movies/${movie.id}`}
					className='w-full h-full flex justify-center items-center'
				>
					<HiExternalLink size={48} className='fill-primary animate-bounce' />
				</Link>
			</aside>
		</article>
	);
};

export default MovieCard;
