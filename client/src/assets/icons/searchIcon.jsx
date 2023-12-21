const SearchIcon = ({ strokeColor }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
    >
        <path
            stroke={strokeColor ? '#F2C81B' : '#180801'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m17 17 4 4M3 11a8 8 0 1 0 16 0 8 8 0 0 0-16 0Z"
        />
    </svg>
)
export default SearchIcon
