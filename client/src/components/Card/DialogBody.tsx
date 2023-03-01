import { useFetch } from "../../constants/hooks";
import ErrorElement from "../ErrorElement/ErrorElement";
import Loader from "../Loader/Loader";
import { links } from "../../constants/links";
import { DialogUrlField } from "./DialogUrlField";

type DialogBodyProps = {
	url: string;
};

const isUrl = (value: any) => String(value).startsWith(links.api);

export const DialogBody = ({ url }: DialogBodyProps) => {
	const { data, error } = useFetch<any>(`${url}`);

	if (error) {
		return <ErrorElement />;
	}

	if (!data) {
		return <Loader />;
	}

	return (
		<ul className='flex flex-col justify-center items-start gap-5'>
			{Object.entries(data)
				.map((entry) => ({ title: entry[0], value: entry[1] }))
				.filter(
					({ title }) =>
						title !== "id" &&
						title !== "url" &&
						title !== "name" &&
						title !== "title"
				)
				.map(({ title, value }) => (
					<li
						key={`char__${data.id}__field__${title}`}
						className='flex flex-col justify-center items-start gap-1 w-full'
					>
						<h4 className='font-semibold text-sm capitalize'>
							{title.replace("_", " ")}
						</h4>
						{isUrl(value) ? (
							<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-3 w-full'>
								{(Array.isArray(value) ? value : [value])
									.map((elt) => String(elt))
									.filter(
										(elt) => elt.substring(elt.lastIndexOf("/")).length > 1
									)
									.map((elt) => (
										<DialogUrlField
											key={`char__${
												data.id
											}__field__${title}__val__${elt.toString()}`}
											url={elt}
										/>
									))}
							</div>
						) : (
							<p className='text-xs'>{String(value)}</p>
						)}
					</li>
				))}
		</ul>
	);
};
