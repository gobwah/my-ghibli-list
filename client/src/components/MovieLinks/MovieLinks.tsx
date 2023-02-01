import { BsFillPersonFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaPaw } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import { links } from "../../constants/links";
import { useFetch } from "../../constants/hooks";
import {
	GhibliCharacter,
	GhibliLocation,
	GhibliSpecie,
	GhibliVehicle,
} from "../../constants/types";
import Loader from "../Loader/Loader";

type MovieLinksProps = {
	peopleUrls: string | string[];
	locationUrls: string | string[];
	specieUrls: string | string[];
	vehicleUrls: string | string[];
};

const formatLinkElement = (elt: string) => {
	if (
		elt === `${links.api}/people/` ||
		elt === `${links.api}/locations/` ||
		elt === `${links.api}/species/` ||
		elt === `${links.api}/vehicles/`
	) {
		return "";
	} else {
		return elt;
	}
};

const formatCollection = (elts: string | string[]) => {
	if (Array.isArray(elts)) {
		return elts.map(formatLinkElement).filter((elt) => elt.trim());
	} else {
		return [formatLinkElement(elts)].filter((elt) => elt.trim());
	}
};

const getMiniCard = (type: string, url: string) => {
	switch (type) {
		case "People":
			return <MiniCardCharacter url={url} />;

		case "Locations":
			return <MiniCardLocation url={url} />;

		case "Species":
			return <MiniCardSpecie url={url} />;

		case "Vehicles":
			return <MiniCardVehicle url={url} />;
	}
};

const MovieLinks = ({
	peopleUrls,
	locationUrls,
	specieUrls,
	vehicleUrls,
}: MovieLinksProps) => {
	const sections = [
		{
			title: "People",
			data: formatCollection(peopleUrls),
			icon: <BsFillPersonFill />,
		},
		{
			title: "Locations",
			data: formatCollection(locationUrls),
			icon: <MdLocationOn />,
		},
		{
			title: "Species",
			data: formatCollection(specieUrls),
			icon: <FaPaw />,
		},
		{
			title: "Vehicles",
			data: formatCollection(vehicleUrls),
			icon: <AiFillCar />,
		},
	];

	return (
		<ul className='flex flex-col sm:flex-row sm:flex-wrap justify-start items-start gap-5 sm:gap-0 m-5'>
			{sections.map(
				({ title, data, icon }) =>
					data &&
					data.length > 0 && (
						<li key={`${title}`} className='w-full sm:w-1/2 sm:p-3'>
							<h3 className='text-lg mb-3 text-primary font-semibold'>
								{title}
							</h3>
							<ul className='flex flex-wrap justify-start items-start'>
								{data.map((elt) => (
									<li
										key={`${title}-elt-${elt.substring(elt.lastIndexOf("/"))}`}
										className='flex flex-col justify-start items-center gap-3 w-1/4 sm:w-1/3 p-1'
									>
										<div>{icon}</div>
										{getMiniCard(title, elt)}
									</li>
								))}
							</ul>
						</li>
					)
			)}
		</ul>
	);
};

type MiniCardProps = {
	url: string;
};

const getJSX = (url: string, text: string) => {
	return (
		<p className='text-xs text-center'>
			<a href={url}>{text}</a>
		</p>
	);
};

const MiniCardCharacter = ({ url }: MiniCardProps) => {
	const { data, error } = useFetch<GhibliCharacter>(`${url}?fields=name`);

	if (!data) {
		return <Loader />;
	} else if (error) {
		return null;
	}

	return getJSX(url, data.name);
};

const MiniCardLocation = ({ url }: MiniCardProps) => {
	const { data, error } = useFetch<GhibliLocation>(`${url}?fields=name`);

	if (!data) {
		return <Loader />;
	} else if (error) {
		return null;
	}

	return getJSX(url, data.name);
};

const MiniCardSpecie = ({ url }: MiniCardProps) => {
	const { data, error } = useFetch<GhibliSpecie>(`${url}?fields=name`);

	if (!data) {
		return <Loader />;
	} else if (error) {
		return null;
	}

	return getJSX(url, data.name);
};

const MiniCardVehicle = ({ url }: MiniCardProps) => {
	const { data, error } = useFetch<GhibliVehicle>(`${url}?fields=name`);

	if (!data) {
		return <Loader />;
	} else if (error) {
		return null;
	}

	return getJSX(url, data.name);
};

export default MovieLinks;
