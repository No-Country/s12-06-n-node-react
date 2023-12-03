import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import { renderCard } from "../../../utils/cardToRender";

const FoodCategories = [
  { id: 1, icon: "i-pizza", category: "Pizza" },
  { id: 2, icon: "i-burger", category: "Hamburguesas" },
  { id: 3, icon: "i-sushi", category: "Sushi" },
  { id: 4, icon: "i-pasta", category: "Pasta" },
  { id: 5, icon: "i-salad", category: "Ensaladas" },
  { id: 6, icon: "i-taco", category: "Mexicana" },
  { id: 7, icon: "i-noodles", category: "China" },
  { id: 8, icon: "i-dessert", category: "Postres" },
  { id: 9, icon: "i-vegetarian", category: "Vegy" },
  { id: 10, icon: "i-seafood", category: "Mariscos" },
  { id: 11, icon: "i-curry", category: "India" },
  { id: 12, icon: "i-fastfood", category: "Rápida" },
]

export default function SectionSlider({ title, categoryCard = false, data }) {
  return (
    <section className="h-auto flex justify-center flex-col gap-4 px-4 border border-sky-400">
      {title && <h2 className="font-bold">{title}</h2>}
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={16}
        loop={true}
        freemodesticky={"true"}
        className="mySwiper w-full"
      >

        {FoodCategories.map((category) => (
          <SwiperSlide key={category.id} className="w-auto">
            {/* <div className="w-52 h-48 flex flex-col justify-center items-center gap-2 border border-slate-950 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-texts text-principal overflow-hidden flex justify-center items-center">
                <span className="w-6 h-6 text-xs">{category.icon}</span>
              </div>
              <span className="text-xs font-medium text-texts">{category.category}</span>
            </div> */}
            {renderCard(category, categoryCard)}
          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  )
}