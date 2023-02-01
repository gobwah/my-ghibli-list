import { HiExternalLink } from "react-icons/hi";
import { useState } from "react";

import { links } from "../../constants/links";
import { images } from "../../constants/images";
import Separator from "../Separator/Separator";

const footerLinks = [
	{
		href: links.github,
		alt: "Github",
		img: images.github,
	},
	{
		href: links.ghibli,
		alt: "Ghibli",
		img: images.ghibli,
	},
];

const Footer = () => {
	const [hover, setHover] = useState(false);

	return (
		<>
			<Separator />
			<footer className='flex justify-between items-center w-full'>
				<ul className='list-none flex justify-start items-center gap-1'>
					{footerLinks.map((link) => (
						<li key={`flink-${link.alt}`} className='w-[25px] h-[25px]'>
							<a
								href={link.href}
								target='_blank'
								rel='noreferrer'
								className='text-lg'
							>
								<img
									src={link.img}
									alt={link.alt}
									title={link.alt}
									className='w-[100%] h-[100%] object-contain'
								/>
							</a>
						</li>
					))}
				</ul>

				<p className='text-[0.5rem] sm:text[1.25rem] text-center'>
					@2022 GOBWAH <br className='sm:hidden' />
					All rights reserved
				</p>

				<a
					href={links.api}
					target='_blank'
					rel='noreferrer'
					className='text-xs flex items-center'
				>
					<p
						className='hover:text-primary flex items-center'
						onMouseOver={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
					>
						Ghibli API
						<HiExternalLink
							className={`ml-1 ${
								hover ? "fill-primary sm:animate-bounce" : ""
							}`}
						/>
					</p>
				</a>
			</footer>
		</>
	);
};

export default Footer;
