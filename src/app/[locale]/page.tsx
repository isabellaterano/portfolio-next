"use client";

import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

const COLORS_TOP: string[] = ["#CBF1F5", "#A6E3E9", "#71C9CE", "#00ADB5"];

const HomePage: React.FC = () => {
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

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 text-gray-200 pt-16"
    >
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-5xl font-medium leading-tight text-transparent sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight">
          {t("h1")}
        </h1>
        <p className="mt-2 mb-8 max-w-xl text-center text-lg leading-relaxed md:text-lg md:leading-relaxed">
          {t("p")}
        </p>
        <div className="flex">
          <motion.div
            style={{
              border,
              boxShadow,
            }}
            whileHover={{
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.985,
            }}
            className="group relative flex justify-center w-fit items-center gap-1.5 rounded-md bg-gray-950/10 px-4 py-2 mr-2 text-gray-50 transition-colors hover:bg-gray-950/50"
          >
            <Link href="/projects" className="inline-flex items-center gap-1.5">
              see my projects{" "}
              <ArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </Link>
          </motion.div>

          <motion.div
            style={{
              border,
              boxShadow,
            }}
            whileHover={{
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.985,
            }}
            className="group relative flex justify-center w-fit items-center gap-1.5 rounded-md bg-gray-950/10 px-4 py-2 mr-2 text-slate-50 transition-colors hover:bg-gray-950/50"
          >
            <Link href="/contact" className="inline-flex items-center gap-1.5">
              contact me
              <ArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default HomePage;
