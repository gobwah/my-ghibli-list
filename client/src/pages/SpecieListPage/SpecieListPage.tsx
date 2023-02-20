import React, { useState } from "react";
import { FaPaw } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import Filter from "../../components/Filter/Filter";
import Wrapper from "../../components/Wrapper/Wrapper";
import { useFetch } from "../../constants/hooks";
import { links } from "../../constants/links";
import { GhibliSpecie } from "../../constants/types";
import ErrorPage from "../ErrorPage/ErrorPage";
import LoadingPage from "../LoadingPage/LoadingPage";

const SpecieListPage = () => {
	const { data, error } = useFetch<GhibliSpecie[]>(
		links.api + "/species?fields=id,name,url"
	);
	const [filter, setFilter] = useState("");
	const { specieId } = useParams();

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
					placeholder='Search a specie...'
					filter={filter}
					setFilter={setFilter}
				/>

				<section className='w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-10 my-5'>
					{data
						.filter((specie) =>
							specie.name.toLowerCase().includes(filter.toLowerCase())
						)
						.sort((m1, m2) => m1.name.localeCompare(m2.name))
						.map((specie) => (
							<Card
								key={`${specie.id}`}
								icon={<FaPaw className='text-4xl' />}
								element={specie}
								open={specie.id === specieId}
							/>
						))}
				</section>
			</main>
		</Wrapper>
	);
};

export default SpecieListPage;
