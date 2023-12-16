import React from "react";

export default function ArrowDownIcon({ strokeColor }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
			<path
				stroke={strokeColor ? "#F2C81B" : "#180801"}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.5}
				d="m6 9 6 6 6-6"
			/>
		</svg>
	);
}
