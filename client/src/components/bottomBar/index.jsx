import { useState } from "react";

const BottomBar = () => {
	// We use useState to keep track of the current tab.
	// The "Favoritos" tab is rendered when currentTab is 1.
	// The "Inicio" tab is rendered when currentTab is 2.
	// The "Historial" tab is rendered when currentTab is 3.
	// The "Mis Tiendas" tab is rendered when currentTab is 4.

	const [currentTab, setCurrentTab] = useState(1);

	// We use the following function to change the current tab.
	// This function is called when the user clicks on a tab.
	// The function receives the tab number as a parameter.
	// The function sets the currentTab to the tab number.
	// The function returns nothing.
	const changeTab = tab => {
		setCurrentTab(tab);
	};

	return (
		<div className="w-screen h-14 rounded-t-xl bg-yellow-400 desktop:hidden z-10 sticky bottom-0">
			<div className="flex flex-row  content-center h-full">
				<div
					className={
						`transition-all flex flex-col flex-wrap items-center justify-center content-center cursor-pointer px-5  w-2/4` +
						(currentTab === 0 ? " bg-neutral-950 shrink rounded-tl-xl" : "")
					}
					onClick={() => changeTab(0)}
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="transition-all"
					>
						<path
							d="M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z"
							stroke={currentTab === 0 ? "#F2C81B" : "#180801"}
							strokeWidth="1.5"
							strokeLinejoin="round"
						/>
					</svg>
					<span className={`text-xs transition-all` + (currentTab === 0 ? " text-yellow-400" : "")}>
						Favoritos
					</span>
				</div>
				<div
					className={
						`transition-all flex flex-col flex-wrap items-center justify-center content-center cursor-pointer px-5 w-2/4` +
						(currentTab === 1 ? " bg-neutral-950 shrink" : "")
					}
					onClick={() => changeTab(1)}
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2 8L11.7317 3.13416C11.9006 3.04971 12.0994 3.0497 12.2683 3.13416L22 8"
							stroke={currentTab === 1 ? "#F2C81B" : "#180801"}
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M20 11V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V11"
							stroke={currentTab === 1 ? "#F2C81B" : "#180801"}
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					<span className={`text-xs transition-all` + (currentTab === 1 ? " text-yellow-400" : "")}>
						Inicio
					</span>
				</div>
				<div
					className={
						`transition-all flex flex-col flex-wrap items-center justify-center content-center cursor-pointer px-5 w-2/4` +
						(currentTab === 2 ? " bg-neutral-950 shrink" : "")
					}
					onClick={() => changeTab(2)}
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="fas fa-user text-2xl"
					>
						<path
							d="M12 22C9.45977 22 7.2069 21.1494 5.32184 19.4598C3.52874 17.8621 2.44828 15.8506 2.10345 13.4943H3.77011C4.09195 15.4368 5.01149 17.069 6.49425 18.3563C8.05747 19.7126 9.90805 20.3908 11.9885 20.3908C14.3103 20.3908 16.3103 19.5747 17.931 17.954C19.5517 16.3333 20.3678 14.3333 20.3678 12.0115C20.3678 9.68966 19.5517 7.68965 17.931 6.06897C16.3103 4.44828 14.3103 3.62069 11.9885 3.62069C10.6207 3.62069 9.31034 3.94253 8.11494 4.57471C6.91954 5.2069 5.90805 6.09195 5.09195 7.2069L4.68966 7.75862H8.18391V9.36782H2V3.14943H3.6092V6.49425L4.21839 5.72414C5.16092 4.54023 6.32184 3.62069 7.67816 2.97701C9.03448 2.33333 10.4828 2 12 2C13.3793 2 14.6897 2.26437 15.8966 2.7931C17.1034 3.32184 18.1724 4.03448 19.069 4.93103C19.9655 5.82759 20.6782 6.89655 21.2069 8.10345C21.7356 9.31034 22 10.6207 22 12C22 13.3793 21.7356 14.6897 21.2069 15.8966C20.6782 17.1034 19.9655 18.1724 19.069 19.069C18.1724 19.9655 17.1034 20.6782 15.8966 21.2069C14.6897 21.7356 13.3793 22 12 22ZM11.1954 12.3218V6.5977H12.8046V11.6782L16.3448 15.2184L15.2184 16.3448L11.1954 12.3218Z"
							fill={currentTab === 2 ? "#F2C81B" : "#180801"}
						/>
					</svg>
					<span className={`text-xs transition-all` + (currentTab === 2 ? " text-yellow-400" : "")}>
						Historial
					</span>
				</div>
				<div
					className={
						`transition-all flex flex-col flex-wrap items-center justify-center content-center text-center cursor-pointer px-5 w-2/4` +
						(currentTab === 3 ? " bg-neutral-950 shrink rounded-tr-xl" : "")
					}
					onClick={() => changeTab(3)}
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10"
							stroke={currentTab === 3 ? "#F2C81B" : "#180801"}
							strokeWidth="1.5"
						/>
						<path
							d="M14.8333 21V15C14.8333 13.8954 13.9378 13 12.8333 13H10.8333C9.72868 13 8.83325 13.8954 8.83325 15V21"
							stroke={currentTab === 3 ? "#F2C81B" : "#180801"}
							strokeWidth="1.5"
							strokeMiterlimit="16"
						/>
						<path
							d="M21.8183 9.36418L20.1243 3.43517C20.0507 3.17759 19.8153 3 19.5474 3H15.5L15.9753 8.70377C15.9909 8.89043 16.0923 9.05904 16.2532 9.15495C16.6425 9.38698 17.4052 9.81699 18 10C19.0158 10.3125 20.5008 10.1998 21.3465 10.0958C21.6982 10.0526 21.9157 9.7049 21.8183 9.36418Z"
							stroke={currentTab === 3 ? "#F2C81B" : "#180801"}
							strokeWidth="1.5"
						/>
						<path
							d="M14 10C14.5675 9.82538 15.2879 9.42589 15.6909 9.18807C15.8828 9.07486 15.9884 8.86103 15.9699 8.63904L15.5 3H8.5L8.03008 8.63904C8.01158 8.86103 8.11723 9.07486 8.30906 9.18807C8.71207 9.42589 9.4325 9.82538 10 10C11.493 10.4594 12.507 10.4594 14 10Z"
							stroke={currentTab === 3 ? "#F2C81B" : "#180801"}
							strokeWidth="1.5"
						/>
						<path
							d="M3.87567 3.43517L2.18166 9.36418C2.08431 9.7049 2.3018 10.0526 2.6535 10.0958C3.49916 10.1998 4.98424 10.3125 6 10C6.59477 9.81699 7.35751 9.38698 7.74678 9.15495C7.90767 9.05904 8.00913 8.89043 8.02469 8.70377L8.5 3H4.45258C4.18469 3 3.94926 3.17759 3.87567 3.43517Z"
							stroke={currentTab === 3 ? "#F2C81B" : "#180801"}
							strokeWidth="1.5"
						/>
					</svg>
					<span
						className={
							`text-xs transition-all text-center` + (currentTab === 3 ? " text-yellow-400" : "")
						}
					>
						Mis Tiendas
					</span>
				</div>
			</div>
		</div>
	);
};

export default BottomBar;
