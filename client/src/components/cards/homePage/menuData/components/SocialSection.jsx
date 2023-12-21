import SocialItem from "./SocialItem";
import facebookIcon from "../../../../../assets/icons/facebook.svg";
import twitterIcon from "../../../../../assets/icons/twitter.svg";
import whatsappIcon from "../../../../../assets/icons/whatsapp.svg";
import instagramIcon from "../../../../../assets/icons/instagram.svg";
import pedidosYaIcon from "../../../../../assets/icons/pedidos-ya.svg";

function SocialSection() {
	return (
		<div className="flex flex-row justify-start items-start gap-2 mt-2">
			<SocialItem nameSocialNetwort="facebook" icon={facebookIcon} />
			<SocialItem nameSocialNetwort="twitter" icon={twitterIcon} />
			<SocialItem nameSocialNetwort="whatsapp" icon={whatsappIcon} />
			<SocialItem nameSocialNetwort="instagram" icon={instagramIcon} />
			<SocialItem nameSocialNetwort="instagram" icon={pedidosYaIcon} bgRed />
		</div>
	);
}

export default SocialSection;
