type CustomImageProps = {
	src: string;
	alt: string;
	loaded: boolean;
	handleLoad: () => void;
	imgClass?: string;
};

const CustomImage = ({
	src,
	alt,
	loaded,
	handleLoad,
	imgClass,
}: CustomImageProps) => {
	return (
		<img
			src={src}
			alt={alt}
			className={`${imgClass} ${loaded ? "" : "hidden"}`}
			onLoad={handleLoad}
		/>
	);
};

export default CustomImage;
