import { BsFillPersonFill } from "react-icons/bs";
import { useFetch } from "../../constants/hooks";
import Dialog from "../Dialog/Dialog";
import ErrorElement from "../ErrorElement/ErrorElement";
import Loader from "../Loader/Loader";
import { links } from "../../constants/links";

type CardProps = {
	element: any;
};

const Card = ({ element }: CardProps) => {
	return (
		<Dialog
			body={<DialogBody url={element.url} />}
			modalTitle={element.name || element.title}
			btnTxt={{ btnPrimary: "Ok" }}
		>
			<BsFillPersonFill className='text-4xl' />
			<h3 className='text-center font-semibold text-inherit'>
				{element.name || element.title}
			</h3>
		</Dialog>
	);
};

type DialogBodyProps = {
	url: string;
};

const DialogBody = ({ url }: DialogBodyProps) => {
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
						className='flex flex-col justify-center items-start gap-1'
					>
						<h4 className='font-semibold text-sm capitalize'>
							{title.replace("_", " ")}
						</h4>
						{isUrl(value) ? (
							<>
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
							</>
						) : (
							<p className='text-xs'>{String(value)}</p>
						)}
					</li>
				))}
		</ul>
	);
};

const isUrl = (value: any) => String(value).startsWith(links.api);

type DialogUrlFieldProps = {
	url: string;
};

const DialogUrlField = ({ url }: DialogUrlFieldProps) => {
	const { data, error } = useFetch<any>(`${url}?fields=id,name,title`);

	if (error) {
		return null;
	}

	if (!data) {
		return <Loader />;
	}

	let type = url.substring(links.api.length + 1);
	type = type.substring(0, type.indexOf("/"));
	type = type === "films" ? "movies" : type;

	return (
		<a className='text-xs underline' href={`/${type}/${data.id}`}>
			{data.name || data.title}
		</a>
	);
};

export default Card;
