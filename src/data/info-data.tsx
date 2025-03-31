import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SocialMediaPlatform } from "../types/info";

export const Info = {
  title: "Hey, I’m Luciano",
  introduction:
    "Self-taught software developer passionate about building scalable web apps. I specialize in backend development with Node.js and AI-powered applications.",
};

//todo update this
export const socialMedia: SocialMediaPlatform[] = [
  {
    name: "GitHub",
    url: "https://github.com/",
    icon: <FaGithub />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/",
    icon: <FaTwitter />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/",
    icon: <FaLinkedin />,
  },
];
