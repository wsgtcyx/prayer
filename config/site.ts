import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiBuymeacoffee } from "react-icons/si";

const OPEN_SOURCE_URL = "https://github.com/wsgtcyx";

const LEMON_SQUEEZY_URL =
  "https://yxstore.lemonsqueezy.com/buy/b080254b-b969-4919-8c8e-12cbb27d291e";

export const HOME_URL = "https://prayer-for.com/";

const baseSiteConfig = {
  name: "Personalized Prayers for Every Need | Create Custom Prayers",
  description:
    "Create personalized prayers tailored to your specific needs. Explore our extensive prayer library and generate custom prayers for healing, peace, strength, and more. Learn how to write your own prayers with our helpful guides.",
  url: HOME_URL,
  ogImage: HOME_URL + "og.png",
  metadataBase: "/",
  keywords: [
    "personalized prayers",
    "custom prayers",
    "prayer for healing",
    "prayer for peace",
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
      href: LEMON_SQUEEZY_URL,
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
      href: LEMON_SQUEEZY_URL,
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
  verifications: {
    yandex: "146383fbfe818fad",
  },
};

