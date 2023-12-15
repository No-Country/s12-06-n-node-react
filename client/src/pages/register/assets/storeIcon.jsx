
export default function StoreIcon({ strokeColor }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
        >
            <path
                stroke={strokeColor ? '#F2C81B' : '#180801'}
                strokeWidth={1.5}
                d="M3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9"
            />
            <path
                stroke={strokeColor ? '#F2C81B' : '#180801'}
                strokeMiterlimit={16}
                strokeWidth={1.5}
                d="M14.833 21v-6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v6"
            />
            <path
                stroke={strokeColor ? '#F2C81B' : '#180801'}
                strokeWidth={1.5}
                d="m21.818 9.364-1.694-5.929A.6.6 0 0 0 19.547 3H15.5l.475 5.704a.578.578 0 0 0 .278.45c.39.233 1.152.663 1.747.846 1.016.313 2.5.2 3.346.096a.57.57 0 0 0 .472-.732Z"
            />
            <path
                stroke={strokeColor ? '#F2C81B' : '#180801'}
                strokeWidth={1.5}
                d="M14 10c.568-.175 1.288-.574 1.69-.812a.578.578 0 0 0 .28-.549L15.5 3h-7l-.47 5.639a.578.578 0 0 0 .28.55c.402.237 1.122.636 1.69.811 1.493.46 2.507.46 4 0Z"
            />
            <path
                stroke={strokeColor ? '#F2C81B' : '#180801'}
                strokeWidth={1.5}
                d="m3.876 3.435-1.694 5.93a.57.57 0 0 0 .472.73c.845.105 2.33.217 3.346-.095.595-.183 1.358-.613 1.747-.845a.578.578 0 0 0 .278-.451L8.5 3H4.453a.6.6 0 0 0-.577.435Z"
            />
        </svg>
    )
}
