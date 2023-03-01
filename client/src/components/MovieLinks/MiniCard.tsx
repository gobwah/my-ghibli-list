import { BsFillPersonFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaPaw } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import { useFetch } from "../../constants/hooks";
import {
	GhibliCharacter,
	GhibliLocation,
	GhibliSpecie,
	GhibliVehicle,
} from "../../constants/types";
import Loader from "../Loader/Loader";
import Card from "../Card/Card";

type MiniCardProps = {
	url: string;
};

export const MiniCardCharacter = ({ url }: MiniCardProps) => {
	const { data, error } = useFetch<GhibliCharacter>(`${url}?fields=name`);

	if (!data) {
		return <Loader />;
	} else if (error) {
		return null;
	}

	return (
		<Card
			element={{ ...data, url: url }}
			icon={<BsFillPersonFill className='text-2xl' />}
			open={false}
		/>
	);
};

export const MiniCardLocation = ({ url }: MiniCardProps) => {
	const { data, error } = useFetch<GhibliLocation>(`${url}?fields=name`);

	if (!data) {
		return <Loader />;
	} else if (error) {
		return null;
	}

	return (
		<Card
			element={{ ...data, url: url }}
			icon={<MdLocationOn className='text-2xl' />}
			open={false}
		/>
	);
};

export const MiniCardSpecie = ({ url }: MiniCardProps) => {
	const { data, error } = useFetch<GhibliSpecie>(`${url}?fields=name`);

	if (!data) {
		return <Loader />;
	} else if (error) {
		return null;
	}

	return (
		<Card
			element={{ ...data, url: url }}
			icon={<FaPaw className='text-2xl' />}
			open={false}
		/>
	);
};

export const MiniCardVehicle = ({ url }: MiniCardProps) => {
	const { data, error } = useFetch<GhibliVehicle>(`${url}?fields=name`);

	if (!data) {
		return <Loader />;
	} else if (error) {
		return null;
	}

	return (
		<Card
			element={{ ...data, url: url }}
			icon={<AiFillCar className='text-2xl' />}
			open={false}
		/>
	);
};
