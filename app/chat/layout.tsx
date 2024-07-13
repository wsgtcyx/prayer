import { HOME_URL } from "@/config/site";
import "@/styles/globals.css";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Discover Bible Verses, Get Explanations & Inspiration With AI",
  description: "Chat with AI to find relevant Bible verses, get detailed explanations, and receive daily inspiration. Perfect for personal study, sermon prep, and more.",
  keywords: [
    "Bible verses",
    "Bible study",
    "daily inspiration",
    "prayer suggestions",
    "Bible verse explanations",
    "Bible quotes",
  ],
  alternates: {
    canonical: HOME_URL + "chat",
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
