import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiBuymeacoffee } from "react-icons/si";

const OPEN_SOURCE_URL = "https://github.com/wsgtcyx";

export const HOME_URL = "https://bible-verses-ai.com/";

const baseSiteConfig = {
  name: "Bible Verses AI - Discover and Understand Verses with AI",
  description:
    "Discover Bible verses for strength, hope, and more with Bible Verses AI. Get accurate quotes, detailed explanations, daily inspiration and sermon prep",
  url: HOME_URL,
  ogImage: HOME_URL + "og.png",
  metadataBase: "/",
  keywords: [
    "Bible verses",
    "AI Bible search",
    "Bible study",
    "Bible verses about strength",
    "Bible verses about hope",
    "NIV Bible,",
  ],
  authors: [
    {
      name: "yxchen1994",
      url: "https://wsgtcyx.github.io/",
      twitter: "https://twitter.com/yxchen1994",
    },
  ],
  creator: "@yxchen1994",
  openSourceURL: OPEN_SOURCE_URL,
  themeColors: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  nextThemeColor: "light", // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    { name: "repo", href: OPEN_SOURCE_URL, icon: BsGithub },
    {
      name: "twitter",
      href: "https://twitter.com/yxchen1994",
      icon: BsTwitterX,
    },
    {
      name: "buyMeCoffee",
      href: "https://yxstore.lemonsqueezy.com/buy/af8de04f-8f1c-48d4-bbb2-8318a1f0d450",
      icon: SiBuymeacoffee,
    },
  ],
  footerLinks: [
    { name: "email", href: "mailto:yxchen1994@gmail.com", icon: MdEmail },
    {
      name: "twitter",
      href: "https://twitter.com/yxchen1994",
      icon: BsTwitterX,
    },
    { name: "github", href: "https://github.com/wsgtcyx/", icon: BsGithub },
    {
      name: "buyMeCoffee",
      href: "https://yxstore.lemonsqueezy.com/buy/af8de04f-8f1c-48d4-bbb2-8318a1f0d450",
      icon: SiBuymeacoffee,
    },
  ],
  footerProducts: [
    // { url: 'https://weijunext.com/', name: 'J实验室' },
  ],
};

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
};

