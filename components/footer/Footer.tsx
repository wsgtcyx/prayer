import FooterLinks from "@/components/footer/FooterLinks";
import FooterProducts from "@/components/footer/FooterProducts";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const Footer = () => {
  const d = new Date();
  const currentYear = d.getFullYear();
  const { authors } = siteConfig;

  return (
    <footer>
      <div className="mt-16 space-y-4 pt-6 pb-4 flex flex-col items-center bg-black text-sm text-gray-400 border-t">
        <FooterLinks />
        <FooterProducts />
        {/* 新增的页面链接 */}
        <div className="flex space-x-4">
          <Link href="/terms-of-service" className="hover:text-gray-300">
            Terms of Service
          </Link>
          <Link href="/privacy-notice" className="hover:text-gray-300">
            Privacy Notice
          </Link>
          <Link href="/refund-policy" className="hover:text-gray-300">
            Refund Policy
          </Link>
        </div>
        <div className="flex space-x-2">
          <div>{`©${currentYear}`}</div>{" "}
          <Link href={authors[0].twitter || authors[0].url} target="_blank">
            {authors[0].name}
          </Link>{" "}
          <div>All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
