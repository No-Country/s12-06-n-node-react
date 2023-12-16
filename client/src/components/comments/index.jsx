import Commentary from "./components/Commentary";

const comments = [
	{
		id: 1,
		name: "Mariano Lopez",
		image:
			"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		commentary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nemo incidunt nisi eos. Et, incidunt.",
		createdAt: "Hace un mes",
		scopes: 5,
	},
	{
		id: 2,
		name: "Mariano Lopez",
		image:
			"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		commentary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nemo incidunt nisi eos. Et, incidunt.",
		createdAt: "Hace un mes",
		scopes: 3,
	},
	{
		id: 3,
		name: "Mariano Lopez",
		image:
			"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		commentary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nemo incidunt nisi eos. Et, incidunt.",
		createdAt: "Hace un mes",
		scopes: 4,
	},
	{
		id: 4,
		name: "Mariano Lopez",
		image:
			"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		commentary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nemo incidunt nisi eos. Et, incidunt.",
		createdAt: "Hace un mes",
		scopes: 2,
	},
];

export default function Comments() {
	return (
		<div className="flex flex-col gap-4">
			<h3 className="text-md text-texts font-bold">Calificaciones</h3>
			{comments.map(item => (
				<Commentary
					key={item.id}
					name={item.name}
					image={item.image}
					commentary={item.commentary}
					createdAt={item.createdAt}
					scopes={item.scopes}
				/>
			))}
		</div>
	);
}
