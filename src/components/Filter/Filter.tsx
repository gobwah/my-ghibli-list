import React from "react";

type FilterProps = {
	placeholder: string;
	filter: string;
	setFilter: (value: React.SetStateAction<string>) => void;
};

const Filter = ({ placeholder, filter, setFilter }: FilterProps) => {
	return (
		<section className='m-3 max-w-[90%] min-w-[50%]'>
			<input
				type='text'
				className='bg-white border border-gray-300 text-black text-base font-poppins rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5'
				placeholder={placeholder}
				value={filter}
				onChange={(e) => setFilter(e.target.value)}
			/>
		</section>
	);
};

export default Filter;
