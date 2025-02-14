import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";
import {
  FaClock,
  FaHandsHelping,
  FaHeart,
  FaPenFancy,
  FaPrayingHands,
  FaTools,
} from "react-icons/fa";

export const FEATURES_EN = [
  {
    title: "Free and Accessible",
    content:
      "Enjoy our service at no cost, making personalized prayers accessible to everyone, anytime.",
    icon: FaHeart,
  },
  {
    title: "Quick and Easy",
    content:
      "Generate heartfelt prayers in seconds with our user-friendly interface. Spend more time in reflection and less time in preparation.",
    icon: FaClock,
  },
  {
    title: "Customized Prayers",
    content:
      "Create prayers tailored to your specific needs and intentions, ensuring a deeply personal and meaningful experience.",
    icon: FaPenFancy,
  },
  {
    title: "Supportive and Compassionate",
    content:
      "Find comfort and peace with prayers designed to support and uplift you during difficult times.",
    icon: FaHandsHelping,
  },
  {
    title: "Guided Spirituality",
    content:
      "Receive spiritual guidance and inspiration through our curated prayer suggestions and articles.",
    icon: FaPrayingHands,
  },
  {
    title: "Easy to Use",
    content:
      "Navigate effortlessly through our platform with an intuitive design that simplifies your prayer creation process.",
    icon: FaTools,
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

