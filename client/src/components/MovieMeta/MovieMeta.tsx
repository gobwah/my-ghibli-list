import { useCallback, useState } from "react";
import CustomImage from "../CustomImage/CustomImage";

type MovieMetaProps = {
	img: {
		src: string;
		alt: string;
	};
	director: string;
	producer: string;
	description: string;
};

const MovieMeta = ({
	img,
	director,
	producer,
	description,
}: MovieMetaProps) => {
	const [imgLoaded, setImgLoaded] = useState(false);

	const handleLoaded = useCallback(() => {
		setImgLoaded(true);
	}, [imgLoaded]);

	return (
		<section className='flex flex-col sm:flex-row sm:gap-5 sm:mx-3 justify-center items-center sm:items-start my-5'>
			{/* <MovieImage src={img.src} alt={img.alt} /> */}

			<CustomImage
				src={img.src}
				alt={img.alt}
				loaded={imgLoaded}
				handleLoad={handleLoaded}
				imgClass='w-5/6 sm:w-1/4'
			/>

			<div className='flex flex-col justify-center sm:justify-around items-center mx-5 sm:mx-0'>
				<ul className='my-5 sm:flex sm:justify-around sm:w-full'>
					{[
						{ key: "Director", value: director },
						{ key: "Producer", value: producer },
					].map((meta) => (
						<li
							key={`meta${meta.key}`}
							className='flex justify-start items-baseline gap-1 m-2 sm:m-0'
						>
							<h3 className='text-base md:text-xl font-semibold'>
								{meta.key}:
							</h3>
							<p className='text-sm md:text-lg'>{meta.value}</p>
						</li>
					))}
				</ul>

				<article className='flex flex-col justify-start align-middle gap-2'>
					<h3 className='text-base md:text-xl font-semibold'>Synopsis</h3>
					<p className='text-xs md:text-base px-2'>{description}</p>
				</article>
			</div>
		</section>
	);
};

export default MovieMeta;
