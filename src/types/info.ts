import { ReactNode } from 'react';

export interface ProfileImageProps {
  imageSrc: string;
  altText: string;
}

export interface SocialMediaProps {
  platforms: {
    name: string;
    url: string;
    icon: React.ReactNode;
  }[];
}

export interface CVButtonProps {
  cvUrl: string;
  buttonText?: string;
}

export interface SocialMediaPlatform {
    name: string;
    url: string;
    icon: ReactNode;
  }

