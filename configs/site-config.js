import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Cesar Acjota. All Rights Reserved.`,
  author: {
    name: "Cesar Acjota",
    accounts: [
      {
        url: "https://github.com/CesarAcjotaMerma",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://twitter.com/AcjotaMerma",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />
      },
      {
        url: "https://www.youtube.com/channel/UCjpIeXMuXHJbZQsa2xOeTlw",
        label: "Youtube Account",
        type: "red",
        icon: <FaYoutube />
      },
      {
        url: "https://www.linkedin.com/in/cesaracjota/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "mailto:cesar.acjota@tecsup.edu.pe",
        label: "Mail ahmad",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
