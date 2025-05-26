import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { SocialMediaPlatform } from "../types/info";

export const Info = {
  title: "Hey, I’m Luciano",
  introduction:
    "From the analytical precision of a medical laboratory to the creative logic of software development, I build technology with a human-centric approach. I am a full-stack developer with a passion for the backend, where I specialize in building intelligent, AI-powered applications. My goal is to leverage technologies like Node.js, Python, and AI to create scalable and impactful solutions.",
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
