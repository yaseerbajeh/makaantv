import { TFunction } from "react-i18next";
export interface ContentBlockButton {
  title: string;
  color?: string;
  type?: 'link' | 'external'; // 'link' for internal, 'external' for a tag
  to?: string; // for 'link' type
  href?: string; // for 'external' type
}

export interface ContentBlockProps {
  icon: string;
  title: string;
  content: string;
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: ContentBlockButton[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
