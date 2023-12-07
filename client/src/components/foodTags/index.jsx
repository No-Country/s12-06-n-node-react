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
        <div className="flex gap-2 p-4 bg-secundario">
            {
                tags.map(tag => (
                    <FoodTag key={tag.id} categorie={tag.categorie} />
                ))
            }
        </div>
    )
}
