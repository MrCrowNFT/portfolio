import { Info } from "../data/info-data";
import {
  ProfileImageProps,
  SocialMediaProps,
  CVButtonProps,
} from "../types/info";
import "../styles/info-section.css";

const InfoSection: React.FC<
  ProfileImageProps & SocialMediaProps & CVButtonProps
> = ({ imageSrc, altText, platforms, cvUrl, buttonText = "Download CV" }) => {
  // helper function to determine if URL is an email
  const isEmail = (url: string) => {
    return url.includes("@") && !url.startsWith("http");
  };

  // helper function to format the href
  const getHref = (url: string) => {
    return isEmail(url) ? `mailto:${url}` : url;
  };

  // helper function to determine target attribute
  const getTarget = (url: string) => {
    return isEmail(url) ? "_self" : "_blank";
  };

  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-16 py-6 mx-auto">
      <div className="flex flex-col gap-5 items-center">
        {/* Circular Profile Image */}
        <div className="w-64 h-64 rounded-full overflow-hidden">
          <img
            src={imageSrc}
            alt={altText}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-5 justify-center">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={getHref(platform.url)}
              target={getTarget(platform.url)}
              rel={isEmail(platform.url) ? undefined : "noopener noreferrer"}
              className="text-2xl hover:opacity-80 transition-opacity"
              aria-label={platform.name}
            >
              {platform.icon}
            </a>
          ))}
        </div>
      </div>

      {/* text Content */}
      <div className="flex flex-col gap-4 max-w-lg items-center md:items-start">
        <h1 className="text-4xl font-bold text-center md:text-left">
          {Info.title}
        </h1>
        <p className="text-xl text-center md:text-left">{Info.introduction}</p>

        {/* CV download Button */}
        <div className="mt-6 w-full flex justify-center md:justify-start">
          <a
            href={cvUrl}
            download
            className="inline-flex items-center justify-center px-8 py-3 rounded-md border hover:bg-gray-100 transition-colors text-lg"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;