import Challenges from "@/components/home/Challenges";
import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import Feature from "@/components/home/Feature";
import Hero from "@/components/home/Hero";
import OurService from "@/components/home/OurService";
import { RecommendAITools } from "@/components/home/RecommendedTools";
import SocialProof from "@/components/home/SocialProof";
import WallOfLove from "@/components/home/WallOfLove";

export default async function LangHome() {

  return (
    <>
      {/* Hero Section */}
      <Hero />
      <SocialProof />
      <Challenges />
      <OurService />

      {/* USP (Unique Selling Proposition) */}
      <Feature id="Features" />

      {/* Testimonials / Wall of Love */}
      <WallOfLove id="WallOfLove" />

      {/* FAQ (Frequently Asked Questions) */}
      <FAQ id="FAQ" />

      {/* CTA (Call to Action) */}
      <CTA />
      <RecommendAITools />
    </>
  );
}
