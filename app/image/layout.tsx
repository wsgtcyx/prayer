import { HOME_URL } from "@/config/site";
import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bible Verse Image Creator - Create Bible Verse Wallpapers",
  description: "Generate beautiful Bible verse wallpapers for free. Find strength, inspiration, and share meaningful images easily. Start creating today!",
  keywords: [
  ],
  alternates: {
    canonical: HOME_URL + "image",
  },
};

export default function ImageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}

