import { useSearch } from "../../stores/search/useSearch.store";
import GeneralHome from "./components/generalHome";
import SearchModal from "./components/searchModal";


export default function HomePage() {
	const isExpanded = useSearch(state => state.isExpanded);

	console.log('Hola desde HomePage');

	return (

		< main className="flex flex-col overflow-hidden" >
			{/* {
				isExpanded ? <SearchModal className={isExpanded ? 'z-10' : '-z-10 invisible'} /> : <GeneralHome className={isExpanded ? 'invisible' : ''} />
			} */}

			<SearchModal className={isExpanded ? 'z-10' : '-z-10 hidden'} />
			<GeneralHome className={isExpanded ? 'hidden' : ''} />

		</ main >
	);

}
