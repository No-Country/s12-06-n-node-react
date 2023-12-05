import { z } from "zod";

const commentSchema = z.object({
	id: z.string().optional().readonly(),
	comment: z
		.string()
		.refine(data => data.trim() !== "", { message: "El comentario no puede estar vacio" }), // ¿deberíamos de validar que el comentario no esté vacío?
	user_id: z.string(),
	restaurant_id: z.string(),
	// ¿deberíamos de validar que el rating sea un número entero entre 1 y 5?
	// o ¿deberíamos de validar que el rating sea un número entre 0 y 5?
	rating: z.number().int().min(1).max(5),
	createdAt: z.string().datetime().optional(),
	like: z.number().int().min(0).max(1).optional(),
	dislike: z.number().int().min(0).max(1).optional(),
});

const commentValidator = body => {
	return commentSchema.safeParse(body);
};
const commentPartialValidator = body => {
	return commentSchema.partial().safeParse(body);
};

export { commentValidator, commentPartialValidator };
