import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { SocialMediaPlatform } from "../types/info";

export const Info = {
  title: "Hey, I’m Luciano",
  introduction:
    "Self-taught software developer passionate about building scalable web apps. I specialize in backend development with Node.js and AI-powered applications.",
};

export const socialMedia: SocialMediaPlatform[] = [
  {
    name: "GitHub",
    url: "https://github.com/MrCrowNFT",
    icon: <FaGithub />,
  },
  {
    name: "Twitter",
    url: "https://x.com/MrCrowNFT",
    icon: <FaTwitter />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/luciano-balladares/",
    icon: <FaLinkedin />,
  },
  {
    name: "Email",
    url: "luciano.b.dev@gmail.com",
    icon: <CiMail />,
  },
];
