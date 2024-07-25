"use client";
import { LineText } from "@/components/LineText";
import CTAButton from "@/components/home/CTAButton";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1],
          scale: {
            type: "tween", // tween spring
            // damping: 10, // if spring
            // stiffness: 50, // if spring
            // restDelta: 0.001, // if spring
          },
        }}
      >
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-16 md:pt-24 text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
            Create Personalized Prayers with <LineText> PrayerAI</LineText>
          </h1>
          <p className="mx-auto mt-6 max-w-lg sm:max-w-xl lg:max-w-2xl text-lg sm:text-xl lg:text-2xl tracking-tight text-slate-700 dark:text-slate-400">
            Leverage the power of AI to deepen your spiritual practice and prayer life. Discover how AI can assist you in creating more meaningful and effective prayer experiences.
          </p>
        </section>

      </motion.div>
      <CTAButton />
    </>
  );
};

export default Hero;
