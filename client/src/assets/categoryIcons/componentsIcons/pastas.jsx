const PastasIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
    >
        <mask
            id="a"
            width={24}
            height={24}
            x={0}
            y={0}
            maskUnits="userSpaceOnUse"
            style={{
                maskType: "alpha",
            }}
        >
            <path fill="#D9D9D9" d="M0 0h24v24H0z" />
        </mask>
        <g mask="url(#a)">
            <path
                fill="#F2C81B"
                d="M7 22v-9.15a4.123 4.123 0 0 1-2.138-1.4C4.287 10.75 4 9.933 4 9V2h2v7h1V2h2v7h1V2h2v7c0 .933-.287 1.75-.863 2.45A4.123 4.123 0 0 1 9 12.85V22H7Zm10 0v-8h-3V7c0-1.383.488-2.563 1.463-3.538C16.438 2.487 17.617 2 19 2v20h-2Z"
            />
        </g>
    </svg>
)
export default PastasIcon
