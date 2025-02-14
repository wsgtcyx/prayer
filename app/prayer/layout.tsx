import { HOME_URL } from "@/config/site";
import "@/styles/globals.css";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free Personalized Prayer Generator for Healing and Peace",
  description: "Create custom prayers with PrayerAI. Get personalized prayers for healing, peace, guidance, and protection. Start your spiritual journey now!",
  keywords: [
  ],
  alternates: {
    canonical: HOME_URL + "prayer",
  }
};

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
}
