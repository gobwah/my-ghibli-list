import { useCallback, useState } from "react";
import { AiFillCalendar } from "react-icons/ai";
import CustomImage from "../CustomImage/CustomImage";
import Loader from "../Loader/Loader";

type MovieHeroProps = {
	img: {
		src: string;
		alt: string;
	};
	rt_score: number;
	release_date: number;
	running_time: number;
};

const getRtScoreBgColor = (score: number) => {
	if (score > 75) {
		return "rgba(0,255,0,0.5)";
	} else if (score <= 75 && score > 50) {
		return "rgba(255,255,0,0.5)";
	} else if (score <= 50 && score > 25) {
		return "rgba(255, 127, 0, 0.5)";
	} else {
		return "rgba(255,0,0,0.5)";
	}
};

const MovieHero = ({
	img,
	rt_score,
	release_date,
	running_time,
}: MovieHeroProps) => {
	const [imgLoaded, setImgLoaded] = useState(false);

	const handleLoaded = useCallback(() => {
		setImgLoaded(true);
	}, []);

	return (
		<section className='relative w-full'>
			<CustomImage
				src={img.src}
				alt={img.alt}
				imgClass='w-full h-[100px] md:h-[200px] object-cover blur-sm'
				loaded={imgLoaded}
				handleLoad={handleLoaded}
			/>

			{imgLoaded ? (
				<ul
					className={`${
						imgLoaded ? "absolute" : "hidden"
					} top-0 right-0 bottom-0 left-0 flex justify-between sm:justify-around items-center`}
				>
					<li
						className='flex justify-center items-center p-2 aspect-square rounded-full text-xs md:text-xl gap-1'
						style={{ backgroundColor: getRtScoreBgColor(rt_score) }}
					>
						{rt_score}
						<sub>/100</sub>
					</li>
					<li className='flex justify-center items-center p-2 aspect-square rounded-full text-xs md:text-xl bg-gray-600 bg-opacity-50 gap-1'>
						<AiFillCalendar color='blue' />
						{release_date}
					</li>
					<li className='flex justify-center items-center p-2 aspect-square rounded-full text-xs md:text-xl bg-gray-600 bg-opacity-50 gap-1'>
						<p>{running_time}</p>
						<p>min</p>
					</li>
				</ul>
			) : (
				<Loader />
			)}
		</section>
	);
};

export default MovieHero;
