import * as Styles from "./Footer.styles";
import IconInstagram from "../../assets/ant-design_instagram-outlined.png";
import IconYoutube from "../../assets/ant-design_youtube-filled.png";
import IconTwitch from "../../assets/akar-icons_twitch-fill.png";
import IconTwitter from "../../assets/ant-design_twitter-outlined.png";

export const Footer = () => {
  return (
    <Styles.FooterContainer>
      <Styles.FooterLogo>
        <h4>
          CheckPoint<span>Store</span>
        </h4>
        <Styles.FooterLinks>
          <p>Siga-nos em:</p>
          <Styles.LinksLogos>
            <img src={IconInstagram} alt="Icone do instagram" />
            <img src={IconYoutube} alt="Icone do Youtube" />
            <img src={IconTwitch} alt="Icone da Twitch" />
            <img src={IconTwitter} alt="Icone do Twitter" />
          </Styles.LinksLogos>
        </Styles.FooterLinks>
      </Styles.FooterLogo>
      <Styles.FooterAbout>
        <p>© 2025 CheckPointStore</p>
      </Styles.FooterAbout>
    </Styles.FooterContainer>
  );
};
