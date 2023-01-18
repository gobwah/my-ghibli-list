import { useCallback, useState } from "react";
import CustomImage from "../CustomImage/CustomImage";

type MovieImageProps = {
	src: string;
	alt: string;
};

const MovieImage = ({ src, alt }: MovieImageProps) => {
	const [imgLoaded, setImgLoaded] = useState(false);

	const handleLoaded = useCallback(() => {
		setImgLoaded(true);
	}, [imgLoaded]);

	return (
		<div className='flex justify-center items-center w-full my-5'>
			<CustomImage
				src={src}
				alt={alt}
				loaded={imgLoaded}
				handleLoad={handleLoaded}
				imgClass='w-5/6 max-w-[600px]'
			/>
		</div>
	);
};

export default MovieImage;
