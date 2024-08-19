"use client";

import { useEffect } from "react";
import { Link } from "@/navigation";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { useTranslations } from "next-intl";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

const COLORS_TOP: string[] = ["#CBF1F5", "#A6E3E9", "#71C9CE", "#00ADB5"];

const Hero: React.FC = () => {
  const t = useTranslations("Home");
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #27272a 50%,  ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative grid min-h-screen place-content-center overflow-hidden text-slate-200 pt-16 rounded-full mx-2 lg:mx-12"
      aria-labelledby="hero-title"
    >
      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        <p
          id="hero-title"
          className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-xl font-medium leading-tight text-transparent md:text-xl"
        >
          {t("h1")}
        </p>
        <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl">
          <TypeAnimation
            sequence={[
              t("animation.text1"),
              2000,
              t("animation.text2"),
              2000,
              t("animation.text3"),
              2000,
              t("animation.text4"),
              2000,
            ]}
            wrapper="span"
            speed={40}
            style={{ display: "inline-block" }}
            repeat={Infinity}
            aria-label={t("animation.ariaLabel")}
          />
        </h1>
        <p className="my-6 text-base sm:text-lg md:text-xl">{t("p")}</p>

        <div className="flex flex-wrap justify-center gap-4">
          <motion.div
            style={{ border, boxShadow }}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            className="group relative flex items-center gap-1.5 rounded-md bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5"
            >
              {t("button")}
              <ArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </Link>
          </motion.div>

          <motion.div
            style={{ border, boxShadow }}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            className="group relative flex items-center gap-1.5 rounded-md bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
          >
            <a href="#contact" className="inline-flex items-center gap-1.5">
              {t("button2")}
              <ArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
