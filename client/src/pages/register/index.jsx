import DropDownBtn from "./components/buttons/dropDownBtn";
import AddIcon from "./assets/addIcon";
import DropdownItem from "../../components/dropdown/components/DropdownItem";
import { useRestaurantStore } from "../../stores/restaurants/useRestaurant.store";
import { useFetch } from "../../hooks/useFetch";
import { getAllCategories, postRestaurant } from "../../api/yumiverse_api";
import CheckboxIcon from "../../icons/CheckboxIcon";
import SectionTitle from "./components/titles/sectionTitle";
import CheckButton from "./components/checkButton";
import RegisterBottomSheet from "./components/bottomSheet";
import StoreIcon from "./assets/storeIcon";
import { useState } from "react";
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import AddBtn from "./components/buttons/addBtn";
import Input from "./components/buttons/input";

export default function RegisterPage() {
	const [formData, setFormData] = useState({
		address: {
			street: "No definida",
			city: "No definida",
			state: "No definida",
			country: "No definida",
		},
		categories: [],
		description: "",
		email: "",
		name: "",
		phone: "",
	});
	// Categorías
	const [selectedCategories, setSelectedCategories] = useState(formData.categories);
	// Productos
	const [showBottomSheet, setShowBottomSheet] = useRestaurantStore(state => [
		state.showBottomSheet,
		state.setShowBottomSheet,
	]);
	const handleAddProduct = () => {
		setShowBottomSheet(!showBottomSheet);
	};

	const {
		data: categoryData,
		loading: categoryLoading,
		error: categoryError,
	} = useFetch(getAllCategories);

	const {
		control,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm();
	const { fields, append, remove } = useFieldArray({
		control,
		name: "categories",
	});

	const onSubmit = async data => {
		console.log("Datos enviados: ", data);
		// Acá debo poner la llamada a la API
		try {
			const response = await postRestaurant(data);
			console.log("Respuesta del servidor: ", response.data._id);
			console.log("Información enviada!");
		} catch (error) {
			console.error("Error al enviar la solicitud: ", error);
		}
	};

	const handleCategorySelection = categoryId => {
		if (selectedCategories.length < 2 && !selectedCategories.includes(categoryId)) {
			const updatedCategories = [...selectedCategories, categoryId];
			setSelectedCategories(updatedCategories);
			setValue("categories", updatedCategories);
		}
	};
	// Métodos de pago
	const MethodsDataFC = [
		{ id: 1, name: "Efectivo" },
		{ id: 2, name: "Tarjeta de débito" },
		{ id: 3, name: "Tarjeta de crédito" },
		{ id: 4, name: "Código QR" },
		{ id: 5, name: "Transferencia" },
	];
	const MethodsDataSC = [
		{ id: 1, name: "Consumo en el local" },
		{ id: 2, name: "Entrega a Domicilio" },
		{ id: 3, name: "Retiro en el local" },
	];
	return (
		<form
			className="bg-secundario h-full px-4 flex flex-col gap-6"
			onSubmit={handleSubmit(onSubmit)}
		>
			{/* Fotos de portada */}
			<div className="flex flex-col gap-2 mt-6">
				<div className="flex items-center gap-4">
					<h2 className="leading-none">Fotos de portada</h2>
					<p className="h-4 text-[10px] bg-disabled px-2 rounded-[4px]">
						Podés subir hasta 3 fotos
					</p>
				</div>
				<div className="w-full flex gap-2">
					<div className="flex justify-center items-center h-[168px] w-[109px] border border-principal rounded">
						<AddBtn title="Añadir" />
					</div>
					<div className="flex justify-center items-center h-[168px] w-[109px] border border-principal rounded">
						<AddBtn title="Añadir" />
					</div>
					<div className="flex justify-center items-center h-[168px] w-[109px] border border-principal rounded">
						<AddBtn title="Añadir" />
					</div>
				</div>
			</div>
			{/* Nombre del comercio */}
			<div className="flex flex-col gap-2">
				<label htmlFor="name" className="leading-none">
					Nombre del comercio
				</label>
				<div className="w-full h-auto">
					<Controller
						name="name"
						control={control}
						defaultValue=""
						render={({ field }) => <Input idFor="name" {...field} />}
					/>
					<p className="text-xs italic">No utilices símbolos ni carácteres especiales.</p>
				</div>
			</div>
			{/* Descripción del comercio */}
			<div className="flex flex-col gap-2">
				<label htmlFor="description" className="leading-none">
					Descripción
				</label>
				<div className="w-full h-auto">
					<Controller
						name="description"
						control={control}
						defaultValue=""
						render={({ field }) => <Input idFor="description" {...field} />}
					/>
					<p className="text-xs italic">No utilices símbolos ni carácteres especiales.</p>
				</div>
			</div>
			{/* Categorías */}
			<div className="flex flex-col gap-2">
				<h2 className="leading-none">
					Categorías <span className="font-bold">(Podés elegir 2)</span>
				</h2>
				<div className="flex items-center gap-[18px]">
					<DropDownBtn title="Seleccionar">
						{categoryData?.map(cat => (
							<DropdownItem
								key={cat._id}
								title={cat.category}
								type={"button"}
								icon={<CheckButton key={cat._id} id={cat._id} />}
								onClick={() => handleCategorySelection(cat._id)}
							/>
						))}
					</DropDownBtn>
					<div className="justify-center items-center bg-principal w-10 h-8 rounded-lg px-2 py-1 flex">
						<AddIcon />
					</div>
				</div>
			</div>
			{/* Contacto */}
			{/* Horario */}
			<SectionTitle title="Contacto">
				<div className="flex flex-col gap-2 -mt-2 w-full">
					<h2 className="leading-none">Horario</h2>
					<div className="flex items-center gap-2 text-texts">
						<div className="flex items-center gap-1">
							<DropDownBtn title="00:00 hs" />
							<span className="text-xs">a</span>
							<DropDownBtn title="00:00 hs" />
						</div>
						<div className="flex items-center gap-2">
							<div className="h-auto w-auto rounded-full flex justify-center items-center border border-texts">
								<div className="h-3 w-3 rounded-full bg-gradient-to-br from-principal via-white to-principal"></div>
							</div>
							<span className="text-xs w-auto">Horario cortado</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="address" className="leading-none">
						Dirección
					</label>
					<div className="flex flex-col gap-2 pl-4">
						<label htmlFor="street">Calle o Avenida</label>
						<div className="w-full h-auto">
							<Controller
								name="address.street"
								control={control}
								defaultValue=""
								render={({ field }) => <Input idFor="street" {...field} />}
							/>
						</div>
						<label htmlFor="city">Ciudad</label>
						<div className="w-full h-auto">
							<Controller
								name="address.city"
								control={control}
								defaultValue=""
								render={({ field }) => <Input idFor="city" {...field} />}
							/>
						</div>
						<label htmlFor="state">Provincia</label>
						<div className="w-full h-auto">
							<Controller
								name="address.state"
								control={control}
								defaultValue=""
								render={({ field }) => <Input idFor="state" {...field} />}
							/>
						</div>
						<label htmlFor="country">País</label>
						<div className="w-full h-auto">
							<Controller
								name="address.country"
								control={control}
								defaultValue=""
								render={({ field }) => <Input idFor="country" {...field} />}
							/>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="phone" className="leading-none">
						Número de teléfono
					</label>
					<div className="w-full h-auto">
						<Controller
							name="phone"
							control={control}
							defaultValue=""
							render={({ field }) => <Input idFor="phone" {...field} />}
						/>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="email" className="leading-none">
						Correo electrónico (email)
					</label>
					<div className="w-full h-auto">
						<Controller
							name="email"
							control={control}
							defaultValue=""
							render={({ field }) => <Input idFor="email" type="email" {...field} />}
						/>
					</div>
				</div>
				{/* <div className="flex flex-col gap-2">
				<label htmlFor="instagram" className="leading-none">
					Instagram
				</label>
				<Input idFor="instagram" />
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="twitter" className="leading-none">
					X (Ex Twitter)
				</label>
				<Input idFor="twitter" />
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="whatsapp" className="leading-none">
					Whatsapp
				</label>
				<Input idFor="whatsapp" />
			</div> */}
			</SectionTitle>
			{/* Métodos de pago */}
			<SectionTitle title="Métodos de pago">
				<div className="flex justify-between -mt-2">
					<div className="flex flex-col gap-4">
						{MethodsDataFC.map(method => (
							<CheckButton key={method.id} checkName={method.name} />
						))}
					</div>
					<div className="flex flex-col gap-4">
						{MethodsDataSC.map(method => (
							<CheckButton key={method.id} checkName={method.name} />
						))}
					</div>
				</div>
			</SectionTitle>
			<SectionTitle title="Productos">
				<div className="flex flex-col gap-[76px]">
					<div
						onClick={handleAddProduct}
						className="w-full h-36 flex justify-center items-center border border-texts rounded"
					>
						<AddBtn title="Añadir" />
					</div>
					{/* <div className="h-auto w-full flex justify-center">
						<AddBtn
							type="submit"
							title="Publicar Tienda"
							storeIcon
						/>
					</div> */}
				</div>
				<RegisterBottomSheet showBottomSheet={showBottomSheet} />
			</SectionTitle>
			<div className="w-full flex justify-center items-center my-[76px]">
				<button
					className="flex items-center gap-1 bg-principal h-8 px-2 py-1 rounded-2xl"
					type="submit"
				>
					<span>Publicar tienda</span>
					<StoreIcon />
				</button>
			</div>
		</form>
	);
}
// import { Controller, useForm, useFieldArray } from "react-hook-form";
// import { useState } from "react";
// import Input from "./components/buttons/input";
// import AddBtn from "./components/buttons/addBtn";
// import DropDownBtn from "./components/buttons/dropDownBtn";
// import AddIcon from "./assets/addIcon";
// import DropdownItem from "../../components/dropdown/components/DropdownItem";
// import { useRestaurantStore } from "../../stores/restaurants/useRestaurant.store";
// import { useFetch } from "../../hooks/useFetch";
// import { getAllCategories, postRestaurant } from "../../api/yumiverse_api";
// import CheckboxIcon from "../../icons/CheckboxIcon";
// import SectionTitle from "./components/titles/sectionTitle";
// import CheckButton from "./components/checkButton";
// import RegisterBottomSheet from "./components/bottomSheet";
// import StoreIcon from "./assets/storeIcon";

// export default function RegisterPage() {
// 	const [formData, setFormData] = useState({
// 		address: {
// 			city: "",
// 			street: "",
// 		},
// 		categories: [],
// 		description: "",
// 		email: "",
// 		name: "",
// 		phone: "",
// 	});
// 	// Categorías
// 	const [selectedCategories, setSelectedCategories] = useState([]);
// 	// Productos
// 	const [showBottomSheet, setShowBottomSheet] = useRestaurantStore(state => [state.showBottomSheet, state.setShowBottomSheet]);
// 	const handleAddProduct = () => {
// 		setShowBottomSheet(!showBottomSheet);
// 	};

// 	const { data: categoryData, loading: categoryLoading, error: categoryError } = useFetch(getAllCategories);

// 	const {
// 		control,
// 		handleSubmit,
// 		setValue,
// 		formState: { errors },
// 	} = useForm();

// 	const { fields, append, remove } = useFieldArray({
// 		control,
// 		name: "categories",
// 	});

// 	const onSubmit = async (data) => {
// 		// Acá debo poner la llamada a la API
// 		try {
// 			console.log('Datos enviados: ', data);
// 			const response = await postRestaurant(data);
// 			console.log('Respuesta del servidor: ', response.data);
// 			console.log('Enviando la información');
// 		} catch (error) {
// 			console.error('Error al enviar la solicitud: ', error);
// 		}
// 	};

// 	const handleCategorySelection = (categoryId) => {
// 		if (selectedCategories.length < 2 && !selectedCategories.includes(categoryId)) {
// 			const updatedCategories = [...selectedCategories, categoryId];
// 			setSelectedCategories(updatedCategories);
// 			setValue('categories', updatedCategories);
// 		}
// 	};
// 	// Métodos de pago
// 	const MethodsDataFC = [
// 		{ id: 1, name: "Efectivo" },
// 		{ id: 2, name: "Tarjeta de débito" },
// 		{ id: 3, name: "Tarjeta de crédito" },
// 		{ id: 4, name: "Código QR" },
// 		{ id: 5, name: "Transferencia" },
// 	];
// 	const MethodsDataSC = [
// 		{ id: 1, name: "Consumo en el local" },
// 		{ id: 2, name: "Entrega a Domicilio" },
// 		{ id: 3, name: "Retiro en el local" },
// 	];

// 	return (
// 		<form
// 			className="bg-secundario h-full px-4 flex flex-col gap-6"
// 			onSubmit={handleSubmit(onSubmit)}
// 		>
// 			{/* Fotos de portada */}
// 			<div className="flex flex-col gap-2 mt-6" >
// 				<div className="flex items-center gap-4">
// 					<h2 className="leading-none">Fotos de portada</h2>
// 					<p className="h-4 text-[10px] bg-disabled px-2 rounded-[4px]">
// 						Podés subir hasta 3 fotos
// 					</p>
// 				</div>
// 				<div className="w-full flex gap-2">
// 					<div className="flex justify-center items-center h-[168px] w-[109px] border border-principal rounded">
// 						<AddBtn title="Añadir" />
// 					</div>
// 					<div className="flex justify-center items-center h-[168px] w-[109px] border border-principal rounded">
// 						<AddBtn title="Añadir" />
// 					</div>
// 					<div className="flex justify-center items-center h-[168px] w-[109px] border border-principal rounded">
// 						<AddBtn title="Añadir" />
// 					</div>
// 				</div>
// 			</div>
// 			{/* Nombre del comercio */}
// 			<div className="flex flex-col gap-2" >
// 				<label htmlFor="name" className="leading-none">
// 					Nombre del comercio
// 				</label>
// 				<div className="w-full h-auto">
// 					<Controller
// 						name="name"
// 						control={control}
// 						defaultValue=""
// 						render={({ field }) => (
// 							<Input idFor="name" {...field} />
// 						)}
// 					/>
// 					<p className="text-xs italic">No utilices símbolos ni carácteres especiales.</p>
// 				</div>
// 			</div >
// 			{/* Descripción del comercio */}
// 			<div className="flex flex-col gap-2" >
// 				<label htmlFor="description" className="leading-none">
// 					Descripción
// 				</label>
// 				<div className="w-full h-auto">
// 					<Controller
// 						name="description"
// 						control={control}
// 						defaultValue=""
// 						render={({ field }) => (
// 							<Input idFor="description" {...field} />
// 						)}
// 					/>
// 					<p className="text-xs italic">No utilices símbolos ni carácteres especiales.</p>
// 				</div>
// 			</div >
// 			{/* Categorías */}
// 			<div className="flex flex-col gap-2">
// 				<h2 className="leading-none">
// 					Categorías <span className="font-bold">(Podés elegir 2)</span>
// 				</h2>
// 				<div className="flex items-center gap-[18px]">
// 					<DropDownBtn title="Seleccionar">
// 						{
// 							categoryData?.map(cat => (
// 								<DropdownItem
// 									key={cat._id}
// 									title={cat.category}
// 									type={'button'}
// 									icon={<CheckboxIcon />}
// 									onClick={() => handleCategorySelection(cat._id)}
// 								/>
// 							))
// 						}
// 					</DropDownBtn>
// 					<div className="justify-center items-center bg-principal w-10 h-8 rounded-lg px-2 py-1 flex">
// 						<AddIcon />
// 					</div>
// 				</div>
// 			</div>
// 			{/* Contacto */}
// 			{/* Horario */}
// 			<SectionTitle title="Contacto">

// 				<div className="flex flex-col gap-2 -mt-2 w-full">
// 					<h2 className="leading-none">Horario</h2>
// 					<div className="flex items-center gap-2 text-texts">
// 						<div className="flex items-center gap-1">
// 							<DropDownBtn title="00:00 hs" />
// 							<span className="text-xs">a</span>
// 							<DropDownBtn title="00:00 hs" />
// 						</div>
// 						<div className="flex items-center gap-2">
// 							<div className="h-auto w-auto rounded-full flex justify-center items-center border border-texts">
// 								<div className="h-3 w-3 rounded-full bg-gradient-to-br from-principal via-white to-principal"></div>
// 							</div>
// 							<span className="text-xs w-auto">Horario cortado</span>
// 						</div>
// 					</div>
// 				</div>

// 				<div className="flex flex-col gap-2">
// 					<label htmlFor="address" className="leading-none">
// 						Dirección
// 					</label>
// 					<div className="w-full h-auto">
// 						<Controller
// 							name="address"
// 							control={control}
// 							defaultValue=""
// 							render={({ field }) => (
// 								<Input idFor="address" {...field} />
// 							)}
// 						/>
// 					</div>
// 				</div>

// 				<div className="flex flex-col gap-2">
// 					<label htmlFor="phone" className="leading-none">
// 						Número de teléfono
// 					</label>
// 					<div className="w-full h-auto">
// 						<Controller
// 							name="phone"
// 							control={control}
// 							defaultValue=""
// 							render={({ field }) => (
// 								<Input idFor="phone" {...field} />
// 							)}
// 						/>
// 					</div>
// 				</div>

// 				<div className="flex flex-col gap-2">
// 					<label htmlFor="email" className="leading-none">
// 						Correo electrónico (email)
// 					</label>
// 					<div className="w-full h-auto">
// 						<Controller
// 							name="email"
// 							control={control}
// 							defaultValue=""
// 							render={({ field }) => (
// 								<Input idFor="email" type="email" {...field} />
// 							)}
// 						/>
// 					</div>
// 				</div>
// 				{/* <div className="flex flex-col gap-2">
// 				<label htmlFor="instagram" className="leading-none">
// 					Instagram
// 				</label>
// 				<Input idFor="instagram" />
// 			</div>
// 			<div className="flex flex-col gap-2">
// 				<label htmlFor="twitter" className="leading-none">
// 					X (Ex Twitter)
// 				</label>
// 				<Input idFor="twitter" />
// 			</div>
// 			<div className="flex flex-col gap-2">
// 				<label htmlFor="whatsapp" className="leading-none">
// 					Whatsapp
// 				</label>
// 				<Input idFor="whatsapp" />
// 			</div> */}
// 			</SectionTitle>
// 			{/* Métodos de pago */}
// 			<SectionTitle title="Métodos de pago">
// 				<div className="flex justify-between -mt-2">
// 					<div className="flex flex-col gap-4">
// 						{MethodsDataFC.map(method => (
// 							<CheckButton key={method.id} checkName={method.name} />
// 						))}
// 					</div>
// 					<div className="flex flex-col gap-4">
// 						{MethodsDataSC.map(method => (
// 							<CheckButton key={method.id} checkName={method.name} />
// 						))}
// 					</div>
// 				</div>
// 			</SectionTitle>
// 			<SectionTitle title="Productos">
// 				<div className="flex flex-col gap-[76px]">
// 					<div
// 						onClick={handleAddProduct}
// 						className="w-full h-36 flex justify-center items-center border border-texts rounded"
// 					>
// 						<AddBtn title="Añadir" />
// 					</div>
// 					{/* <div className="h-auto w-full flex justify-center">
// 						<AddBtn
// 							type="submit"
// 							title="Publicar Tienda"
// 							storeIcon
// 						/>
// 					</div> */}
// 				</div>
// 				<RegisterBottomSheet showBottomSheet={showBottomSheet} />
// 			</SectionTitle>
// 			<div className="w-full flex justify-center items-center my-[76px]">
// 				<button className="flex items-center gap-1 bg-principal h-8 px-2 py-1 rounded-2xl" type="submit">
// 					<span>Publicar tienda</span>
// 					<StoreIcon />
// 				</button>
// 			</div>
// 		</form>
// 	);
// }