const CategoryCard = ({ title, onClick, Icon }) => {
	return (
		<div
			onClick={onClick}
			className="w-auto min-w-[48px] h-16 flex flex-col justify-between items-center hover:cursor-pointer"
		>
			<div className="w-12 h-12 bg-texts rounded-[50%] flex justify-center items-center">
				{Icon && <img
					className="w-6 h-6 text-principal m-0 p-0"
					src={Icon}
					alt={`${title} image`}
				/>}
			</div>
			<span className="w-full text-xs text-texts font-medium text-center leading-none">
				{title}
			</span>
		</div>
	);
};

export default CategoryCard;
