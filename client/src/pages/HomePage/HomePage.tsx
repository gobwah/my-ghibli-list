import { useCallback, useState } from "react";
import CustomImage from "../../components/CustomImage/CustomImage";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Loader from "../../components/Loader/Loader";
import { images } from "../../constants/images";

const HomePage = () => {
	const [imgLoaded, setImgLoaded] = useState(false);

	const handleLoaded = useCallback(() => {
		setImgLoaded(true);
	}, []);

	return (
		<>
			<div className='h-screen w-screen brightness-50 blur-sm flex justify-start items-center'>
				<CustomImage
					src={images.ghibliHero}
					alt='Ghibli Wallpaper'
					imgClass='h-[100%] w-[100%] object-cover'
					loaded={imgLoaded}
					handleLoad={handleLoaded}
				/>
			</div>

			{imgLoaded ? (
				<div className='absolute top-0 right-0 left-0 bottom-0 flex flex-col justify-start items-center p-3'>
					<Header />
					<Hero />
					<Footer />
				</div>
			) : (
				<Loader />
			)}
		</>
	);
};

export default HomePage;
