
export default function CheckIcon({ strokeColor }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={14}
            height={10}
            fill="none"
        >
            <path
                stroke={strokeColor ? '#F2C81B' : '#180801'}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M1.167 5.833 4.5 9.167 12.834.833"
            />
        </svg>
    )
}
