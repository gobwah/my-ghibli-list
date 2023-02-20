import React, { useState } from "react";
import { AiFillCar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import Filter from "../../components/Filter/Filter";
import Wrapper from "../../components/Wrapper/Wrapper";
import { useFetch } from "../../constants/hooks";
import { links } from "../../constants/links";
import { GhibliCharacter, GhibliVehicle } from "../../constants/types";
import ErrorPage from "../ErrorPage/ErrorPage";
import LoadingPage from "../LoadingPage/LoadingPage";

const VehicleListPage = () => {
	const { data, error } = useFetch<GhibliVehicle[]>(
		links.api + "/vehicles?fields=id,name,url"
	);
	const [filter, setFilter] = useState("");
	const { vehicleId } = useParams();

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
					placeholder='Search a vehicle...'
					filter={filter}
					setFilter={setFilter}
				/>

				<section className='w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-10 my-5'>
					{data
						.filter((vehicle) =>
							vehicle.name.toLowerCase().includes(filter.toLowerCase())
						)
						.sort((m1, m2) => m1.name.localeCompare(m2.name))
						.map((vehicle) => (
							<Card
								key={`${vehicle.id}`}
								icon={<AiFillCar className='text-4xl' />}
								element={vehicle}
								open={vehicle.id === vehicleId}
							/>
						))}
				</section>
			</main>
		</Wrapper>
	);
};

export default VehicleListPage;
