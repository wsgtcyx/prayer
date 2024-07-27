import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { ThemedButton } from "../ThemedButton";
import HeaderLinks from "./HeaderLinks";
import NavLinks from "./NavLinks";

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    isMenuOpen && (
      <div className="absolute top-0 left-0 w-full z-50">
        <div className="p-5 bg-background border rounded shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <Link
                href="/"
                aria-label="PrayerAI"
                title="PrayerAI"
                className="inline-flex items-center"
              >
                <Image
                  alt={siteConfig.name}
                  src="/logo.svg"
                  className="w-8 h-8"
                  width={32}
                  height={32}
                />
                <span className="ml-2 text-xl font-bold tracking-wide text-gray-950 dark:text-gray-300">
                  PrayerAI
                </span>
              </Link>
            </div>
            <div>
              <button
                aria-label="Close Menu"
                title="Close Menu"
                className="tracking-wide transition-colors duration-200 font-normal"
                onClick={() => setIsMenuOpen(false)}
              >
                <CgClose />
              </button>
            </div>
          </div>
          <nav>
            <ul className="space-y-4">
              <NavLinks />
            </ul>
          </nav>
          <div className="pt-2">
            <div className="flex items-center gap-x-5 justify-between">
              <HeaderLinks />
              <ThemedButton />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default MobileMenu;

