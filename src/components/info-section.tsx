import { Info } from "../data/info-data";
import {
  ProfileImageProps,
  SocialMediaProps,
  CVButtonProps,
} from "../types/info";

const InfoSection: React.FC<
  ProfileImageProps & SocialMediaProps & CVButtonProps
> = ({ imageSrc, altText, platforms, cvUrl, buttonText = "Download CV" }) => {
  return (
    <section className="flex flex-col md:flex-row gap-6 items-start">
      <div className="flex flex-col gap-4">
        {/* Profile Image */}
        <div className="w-48 h-48 rounded-md overflow-hidden">
          <img
            src={imageSrc}
            alt={altText}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
              aria-label={platform.name}
            >
              {platform.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{Info.title}</h1>
        <p className="max-w-md">{Info.introduction}</p>

        {/* CV Download Button */}
        <div className="mt-4">
          <a
            href={cvUrl}
            download
            className="inline-flex items-center justify-center px-4 py-2 rounded-md border"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};
export default InfoSection;
