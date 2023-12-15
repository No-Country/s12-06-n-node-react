const starIconComponent = ({ strokeColor }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
    >
        <g clipPath="url(#a)">
            <path
                stroke={`${strokeColor ? '#F2C81B' : '#FEFCF1'}`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="m5.725 5.49 1.732-3.488a.608.608 0 0 1 1.086 0l1.732 3.489 3.873.562c.496.073.694.68.335 1.028L11.68 9.794l.661 3.834a.605.605 0 0 1-.88.635L8 12.452l-3.463 1.81a.605.605 0 0 1-.88-.634l.662-3.834-2.802-2.713a.602.602 0 0 1 .335-1.028l3.873-.562Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default starIconComponent
