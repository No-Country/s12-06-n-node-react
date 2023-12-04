export default function Navbar() {
	return (
		<nav className="px-2 mt-2">
			<div className="max-w-2xl mx-auto">
				<div className="flex justify-between">
					<h1 className="text-lg font-semibold">Yumiverse</h1>
					<svg
						width="24"
						height="24"
						className="ml-2"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
							stroke="#180801"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457"
							stroke="#180801"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
							stroke="#180801"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
				<ul className="flex justify-between md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
					<li className="mt-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="h-5 w-5 md:h-auto md:w-auto self-start"
						>
							<path
								fillRule="evenodd"
								d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
								clipRule="evenodd"
							/>
						</svg>
					</li>
					<li className="ml-40">
						<a href="#" className="" aria-current="page">
							<button className="bg-yellow-400 font-semibold py-2 px-4 rounded-lg  sm: mb-4 ml-12">
								Publicar Tienda
							</button>
						</a>
					</li>
					<li className="mt-2"></li>
				</ul>
			</div>
		</nav>
	);
}
