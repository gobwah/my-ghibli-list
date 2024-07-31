import { Link } from "react-router-dom";
import { useFetch } from "../../constants/hooks";
import { links } from "../../constants/links";

type DialogUrlFieldProps = {
	url: string;
};

export const DialogUrlField = ({ url }: DialogUrlFieldProps) => {
	const { data, error } = useFetch<any>(`${url}?fields=id,name,title`);

	if (error || !data) {
		return null;
	}

	let type = url.substring(links.api.length + 1);
	type = type.substring(0, type.indexOf("/"));
	type = type === "films" ? "movies" : type;

	return (
		<Link
			className='text-xs underline sm:hover:text-primary'
			to={`/${type}/${data.id}`}
		>
			{data.name || data.title}
		</Link>
	);
};
