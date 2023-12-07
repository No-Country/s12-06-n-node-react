import { Schema, model } from "mongoose";

// Definir el esquema para el modelo de menú
const menuSchema = new Schema(
	{
		// Nombre del menú
		name: {
			type: String,
			required: true,
		},
		// Descripción del menú
		description: {
			type: String,
			required: true,
		},
		// Precio del menú
		price: {
			type: Number,
			required: true,
		},
		// Imágenes asociadas al menú
		image: {
			type: [String],
			required: true,
		},
		// Información dietética, puede incluir valores como "Vegan", "Vegetarian", etc.
		dietaryInfo: {
			type: [String],
			required: true,
			enum: ["Vegan", "Vegetarian", "Other Dietary Preferences"],
		},
	},
	{ timestamps: true, versionKey: false }
);

// Crear el modelo de menú a partir del esquema definido
const MenuModel = model("menus", menuSchema);

export default MenuModel;
