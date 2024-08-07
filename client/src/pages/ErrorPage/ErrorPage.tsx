import { useCallback, useState } from "react";
import { Link, useRouteError } from "react-router-dom";

import totoro from "../../assets/totoro.png";
import CustomImage from "../../components/CustomImage/CustomImage";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function ErrorPage({ customText = "" }) {
	const error: any = useRouteError();
	const [imgLoaded, setImgLoaded] = useState(false);

	const handleLoaded = useCallback(() => {
		setImgLoaded(true);
	}, []);

	return (
		<div className='h-screen flex flex-col justify-start items-center p-3'>
			<Header />
			<main className='flex flex-1 flex-col justify-center items-center sm:flex-row'>
				<section className='flex flex-col justify-start items-center sm:items-start'>
					<h2 className='font-semibold text-8xl font-poppins'>404.</h2>
					<p className='font-poppins text-2xl m-3 text-center sm:text-left sm:m-0 sm:my-2'>
						{`${customText ? customText : "You might have lost yourself..."}`}
						<br />
						Go back{" "}
						<Link to='/client/public' className='decoration-solid underline'>
							home
						</Link>
						?
					</p>
					{error && (
						<p className='font-poppins text-base m-5 sm:m-0 sm:my-2'>
							<i>{error.statusText || error.message}</i>
						</p>
					)}
				</section>
				<div className='flex flex-1 justify-center items-center max-w-[125px] max-h-[175px] sm:max-w-[300px] sm:max-h-[500px]'>
					<CustomImage
						src={totoro}
						alt='Totoro'
						imgClass='h-full w-full object-contain'
						loaded={imgLoaded}
						handleLoad={handleLoaded}
					/>
				</div>
			</main>
			<Footer />
		</div>
	);
}
