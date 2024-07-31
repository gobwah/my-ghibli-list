import { links } from "../../constants/links";
import {
	MiniCardCharacter,
	MiniCardLocation,
	MiniCardSpecie,
	MiniCardVehicle,
} from "./MiniCard";

type MovieLinksProps = {
	peopleUrls: string | string[];
	locationUrls: string | string[];
	specieUrls: string | string[];
	vehicleUrls: string | string[];
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
		},
		{
			title: "Locations",
			data: formatCollection(locationUrls),
		},
		{
			title: "Species",
			data: formatCollection(specieUrls),
		},
		{
			title: "Vehicles",
			data: formatCollection(vehicleUrls),
		},
	];

	return (
		<ul className='flex flex-col sm:flex-row sm:flex-wrap justify-start items-start gap-5 sm:gap-0 m-5'>
			{sections.map(
				({ title, data }) =>
					data &&
					data.length > 0 && (
						<li key={`${title}`} className='w-full sm:w-1/2 sm:p-3'>
							<h3 className='text-lg mb-3 text-primary font-semibold text-center'>
								{title}
							</h3>
							<ul className='flex flex-wrap justify-start items-start'>
								{data.map((elt) => (
									<li
										key={`${title}-elt-${elt.substring(elt.lastIndexOf("/"))}`}
										className='flex flex-col justify-start items-center gap-3 w-1/3 sm:w-1/2 p-1'
									>
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

export default MovieLinks;
