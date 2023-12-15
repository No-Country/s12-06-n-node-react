
export default function AddIcon({ strokeColor }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={12}
            fill="none"
            viewBox="0 0 14 14"
        >
            <path
                stroke={strokeColor ? '#F2C81B' : '#180801'}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M1 7h6m6 0H7m0 0V1m0 6v6"
            />
        </svg>
    )
}

