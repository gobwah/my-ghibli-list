import Dialog from "./Dialog";
import { DialogBody } from "./DialogBody";

type CardProps = {
	element: any;
	icon: JSX.Element;
	open: boolean;
};

const Card = ({ element, icon, open }: CardProps) => {
	return (
		<Dialog
			body={<DialogBody url={element.url} />}
			modalTitle={element.name || element.title}
			btnTxt={{ btnPrimary: "Ok" }}
			open={open}
		>
			{icon}
			<h3 className='text-center font-semibold text-inherit'>
				{element.name || element.title}
			</h3>
		</Dialog>
	);
};

export default Card;
