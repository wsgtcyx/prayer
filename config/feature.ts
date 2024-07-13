import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";
import {
  FaBible,
  FaChalkboardTeacher,
  FaLightbulb,
  FaMobileAlt,
  FaPrayingHands,
  FaRegNewspaper,
  FaSearch,
} from "react-icons/fa";
import { MdOutlinePsychology } from "react-icons/md";

export const FEATURES_EN = [
  {
    title: "Accurate Bible Verses",
    content:
      "Discover the most relevant and accurate Bible verses for any topic or question, ensuring you always find the right scripture.",
    icon: FaBible,
  },
  {
    title: "Expert Explanations",
    content:
      "Gain detailed explanations and interpretations of Bible verses, helping you understand the context and meaning.",
    icon: MdOutlinePsychology,
  },
  {
    title: "User-Friendly Interface",
    content:
      "Enjoy a seamless and intuitive experience across all devices, making it easy to find and study Bible verses anytime, anywhere.",
    icon: FaMobileAlt,
  },
  {
    title: "Advanced Search Functionality",
    content:
      "Easily search for Bible verses and topics with precision, ensuring quick access to the scriptures you need.",
    icon: FaSearch,
  },
  {
    title: "Spiritual Guidance",
    content:
      "Receive personalized spiritual guidance and inspiration through curated Bible verses tailored to your needs.",
    icon: FaPrayingHands,
  },
  {
    title: "Multi-Intent Satisfaction",
    content:
      "Meet diverse user needs by addressing various intents such as study, meditation, and application, enhancing your spiritual journey.",
    icon: FaLightbulb,
  },
  {
    title: "Daily Bible Verses",
    content:
      "Start your day with a meaningful message by receiving daily Bible verses that inspire and motivate.",
    icon: FaRegNewspaper,
  },
  {
    title: "Blog for Deeper Insights",
    content:
      "Explore our blog for in-depth articles and discussions on various Bible topics, helping you gain a deeper understanding.",
    icon: FaChalkboardTeacher,
  },
];

interface FeaturesCollection {
  [key: `FEATURES_${string}`]: {
    title: string;
    content: string;
    icon: IconType | LucideIcon;
  }[];
}

export const ALL_FEATURES: FeaturesCollection = {
  FEATURES_EN,
};

