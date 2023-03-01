import { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import Filter from "../../components/Filter/Filter";
import Wrapper from "../../components/Wrapper/Wrapper";
import { useFetch } from "../../constants/hooks";
import { links } from "../../constants/links";
import { GhibliLocation } from "../../constants/types";
import ErrorPage from "../ErrorPage/ErrorPage";
import LoadingPage from "../LoadingPage/LoadingPage";

const LocationListPage = () => {
	const { data, error } = useFetch<GhibliLocation[]>(
		links.api + "/locations?fields=id,name,url"
	);
	const [filter, setFilter] = useState("");
	const { locationId } = useParams();

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
					placeholder='Search a location...'
					filter={filter}
					setFilter={setFilter}
				/>

				<section className='w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-10 my-5'>
					{data
						.filter((location) =>
							location.name.toLowerCase().includes(filter.toLowerCase())
						)
						.sort((l1, l2) => l1.name.localeCompare(l2.name))
						.map((location) => (
							<Card
								key={`${location.id}`}
								icon={<MdLocationOn className='text-4xl' />}
								element={location}
								open={location.id === locationId}
							/>
						))}
				</section>
			</main>
		</Wrapper>
	);
};

export default LocationListPage;
