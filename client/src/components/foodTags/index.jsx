import Slider from "../sliders/section-slider"
import FoodTag from "./component/foodTag"

export default function FoodTags() {

    const tags = [
        {
            id: 1,
            categorie: "Pizzas",
        },
        {
            id: 2,
            categorie: "Sandwiches",
        },
        {
            id: 3,
            categorie: "Postres",
        },
        {
            id: 4,
            categorie: "Vegano",
        },
    ]

    return (
        // <div className="flex gap-2 bg-secundario">
            <Slider data={tags}>
                {item => (
                    <FoodTag categorie={item.categorie} />
                )}
            </Slider>
        // </div>
    )
}
