const ErrorElement = ({ text = "" }) => {
	return (
		<div className='w-full flex justify-center items-center'>
			{text?.trim() ? text : "An error occured..."}
		</div>
	);
};

export default ErrorElement;
