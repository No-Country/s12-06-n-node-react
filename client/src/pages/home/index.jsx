import React from "react";
import SectionCardHomePage from "../../components/sectionCardHomePage";
import imageCard from "../../assets/images/imageCard.png";

export default function HomePage() {
	return (
		<div>
			<h1>Home Page</h1>
			<SectionCardHomePage
				location="Av. Saenz Peña 146, Junín"
				nameRestaurant="Vinilo Bar"
				imageRestaurant={imageCard}
				categories={["pizza", "fastFood"]}
				openRestaurant
				numberOfScores="22"
				scores="3"
			/>
		</div>
	);
}
