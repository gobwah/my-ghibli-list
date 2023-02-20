import { useState } from "react";

interface DialogProps extends React.PropsWithChildren {
	modalTitle: string;
	body: JSX.Element;
	btnTxt?: {
		btnPrimary: string;
		btnSecondary?: string;
	};
	open: boolean;
}

export default function Dialog({
	children,
	modalTitle,
	body,
	btnTxt,
	open,
}: DialogProps) {
	const [showModal, setShowModal] = useState(open);

	return (
		<>
			<button
				className='flex flex-col justify-start items-center bg-secondary hover:text-primary outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
				type='button'
				onClick={() => setShowModal(true)}
			>
				{children}
			</button>
			{showModal ? (
				<>
					<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
						<div className='relative w-full my-6 mx-auto max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl'>
							{/*content*/}
							<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-secondary outline-none focus:outline-none'>
								{/*header*/}
								<div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
									<h3 className='text-lg font-semibold'>{modalTitle}</h3>
									<button
										className='p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
										onClick={() => setShowModal(false)}
									>
										<span className='bg-transparent text-white h-6 w-6 text-2xl block outline-none focus:outline-none'>
											×
										</span>
									</button>
								</div>
								{/*body*/}
								<div className='relative p-6 flex-auto max-h-96 overflow-y-auto'>
									{body}
								</div>
								{/*footer*/}
								<div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
									{btnTxt?.btnSecondary?.trim() && (
										<button
											className='text-primary background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
											type='button'
											onClick={() => setShowModal(false)}
										>
											{btnTxt.btnSecondary}
										</button>
									)}
									{btnTxt?.btnPrimary?.trim() && (
										<button
											className='bg-primary text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
											type='button'
											onClick={() => setShowModal(false)}
										>
											{btnTxt.btnPrimary}
										</button>
									)}
								</div>
							</div>
						</div>
					</div>
					<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
				</>
			) : null}
		</>
	);
}
