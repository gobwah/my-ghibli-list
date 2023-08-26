import { useNavigate } from "react-router-dom";
import { useFetch } from "../../constants/hooks";
import { links } from "../../constants/links";
import { GhibliMovie } from "../../constants/types";

import Button from "../Button/Button";
import Loader from "../Loader/Loader";

const random = (min: number, max: number) => {
	// min and max included
	return Math.floor(Math.random() * (max - min + 1) + min);
};

const Hero = () => {
	const navigate = useNavigate();

	const { data, error } = useFetch<GhibliMovie[]>(
		links.api + "/films?fields=id"
	);

	return (
		<main className='flex flex-1 flex-col justify-center items-center w-full my-5'>
			<h2 className='font-bold text-3xl leading-snug text-center w-full m-3 mb-28'>
				Let's start exploring Ghibli universe!
			</h2>
			<div className='flex justify-around gap-5 items-center w-full'>
				{!data ? (
					<Loader />
				) : (
					<>
						<Button text='See list' onClick={() => navigate("/movies")} />
						{error ? null : (
							<Button
								text='Pick random'
								onClick={() =>
									navigate(`/movies/${data[random(0, data.length - 1)].id}`)
								}
							/>
						)}
					</>
				)}
			</div>
		</main>
	);
};

export default Hero;
