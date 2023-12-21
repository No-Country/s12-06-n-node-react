import Commentary from "./components/Commentary";

export default function Comments({ commentData }) {

	return (
		<div className="flex flex-col gap-4">
			<h3 className="text-md text-texts font-bold">Calificaciones</h3>
			{commentData?.map(item => (
				<Commentary
					key={item._id}
					name={item.name}
					commentary={item.comment}
					createdAt={item.createdAt}
					scopes={item.rating}
					commentId={item._id}
				/>
			))}
		</div>
	);
}
