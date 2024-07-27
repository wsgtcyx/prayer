import { siteConfig } from '@/config/site';
import Image from 'next/image';
import Link from 'next/link';

const HeaderLogo = () => (
  <Link
    href="/"
    aria-label="PrayerAI"
    title="PrayerAI"
    className="flex items-center space-x-1 font-bold"
  >
    <Image
      alt={siteConfig.name}
      src="/logo.svg"
      className="w-8 h-8"
      width={32}
      height={32}
    />
    <span className="text-gray-950 dark:text-gray-300 md:block">
      PrayerAI
    </span>
  </Link>
);

export default HeaderLogo;
