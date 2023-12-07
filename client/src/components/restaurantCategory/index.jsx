export default function RestaurantCategory() {

    const restaurantMenu = [
        {
            category: "Hamburguesas",
            items: [
                {
                    itemName: "Vinilo Beast",
                    price: 4.450,
                    description: "Doble carne, doble cheddar, doble danbo. Tomate, lechuga, chile braseado, salsa Tabasco.Incluye papas fritas.",
                },
                {
                    itemName: "Vinilo Beast",
                    price: 4.450,
                    description: "Doble carne, doble cheddar, doble danbo. Tomate, lechuga, chile braseado, salsa Tabasco.Incluye papas fritas.",
                },
                {
                    itemName: "Vinilo Beast",
                    price: 4.450,
                    description: "Doble carne, doble cheddar, doble danbo. Tomate, lechuga, chile braseado, salsa Tabasco.Incluye papas fritas.",
                },
                {
                    itemName: "Vinilo Beast",
                    price: 4.450,
                    description: "Doble carne, doble cheddar, doble danbo. Tomate, lechuga, chile braseado, salsa Tabasco.Incluye papas fritas.",
                },
            ]
        },
        {
            category: "Pizzas",
            items: [
                {
                    itemName: "Vinilo Beast",
                    price: 4.450,
                    description: "Doble carne, doble cheddar, doble danbo. Tomate, lechuga, chile braseado, salsa Tabasco.Incluye papas fritas.",
                },
                {
                    itemName: "Vinilo Beast",
                    price: 4.450,
                    description: "Doble carne, doble cheddar, doble danbo. Tomate, lechuga, chile braseado, salsa Tabasco.Incluye papas fritas.",
                },
                {
                    itemName: "Vinilo Beast",
                    price: 4.450,
                    description: "Doble carne, doble cheddar, doble danbo. Tomate, lechuga, chile braseado, salsa Tabasco.Incluye papas fritas.",
                },
                {
                    itemName: "Vinilo Beast",
                    price: 4.450,
                    description: "Doble carne, doble cheddar, doble danbo. Tomate, lechuga, chile braseado, salsa Tabasco.Incluye papas fritas.",
                },
            ]
        }
    ]

    return (
        <section className="w-full h-auto p-4 flex flex-col gap-8">
            {restaurantMenu.map(item => (
                <div key={item.category} className="flex flex-col gap-4">
                    <h2 className="font-bold">{item.category}</h2>
                    {item.items.map(item => (
                        <div key={item.itemName} className="w-full h-36 border border-principal">
                        
                        </div>
                    ))}
                </div>
            ))}

        </section>
    )
}
