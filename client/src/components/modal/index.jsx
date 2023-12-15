function Modal({ isOpen, onClose, title, children }) {
	const closeModal = () => {
		onClose();
	};

	return (
		<div className={`${isOpen ? "fixed z-20 inset-0 flex items-center justify-center" : "hidden"}`}>
			<div className="flex py-4 px-2 flex-col gap-4 rounded-xl shadow-5xl w-[90%] tablet:w-[70%] desktop:w-[60%] h-auto bg-secundario">
				<div className="text-black flex justify-between items-center">
					<p className="font-medium text-base/6">{title}</p>
					<button onClick={closeModal} className="font-medium text-sm/5">
						Cerrar x
					</button>
				</div>
				{children}
			</div>
		</div>
	);
}

export default Modal;
