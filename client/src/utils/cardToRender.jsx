import SectionCardHomePage from "../components/cards/homePage/sectionCard";
import CategoryCard from "../components/cards/homePage/categoryCard";

export default function cardToRender(cardData, cardType) {
	if (!cardData) {
		return null;
	} else {
		if (cardType) {
			return <CategoryCard title={cardData.title} href={cardData.href} imgSrc={cardData.imgSrc} />;
		} else {
			return (
				<SectionCardHomePage
					location={cardData.location}
					nameRestaurant={cardData.nameRestaurant}
					imageRestaurant={cardData.imageRestaurant}
					categories={cardData.categories}
					openRestaurant={cardData.openRestaurant}
					numberOfScores={cardData.numberOfScores}
					scores={cardData.scores}
				/>
			);
		}
	}
}
