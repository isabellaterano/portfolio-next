import React from "react";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { skillsData } from "@/lib/data";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
};

const About = () => {
  const t = useTranslations("About");

  return (
    <section className="relative py-16 px-6 sm:px-10 lg:px-16 mx-auto lg:mx-20">
      <div className="max-w-screen-xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-100 mt-16 mb-8">
          {t("h1")}
        </h1>
        <p className="text-lg md:text-2xl text-slate-300 mb-12">{t("sub")}</p>
      </div>

      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-12 lg:space-y-0 lg:space-x-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-base lg:text-lg text-slate-300 mb-6">{t("p")}</p>
        </div>

        <div className="">
          <h2 className="mb-8 text-2xl font-semibold text-slate-100 text-center">
            {t("skills")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                className="flex flex-col items-center justify-center p-4 bg-zinc-700 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300"
                key={skill.title}
                aria-label={skill.title}
              >
                <Image
                  src={skill.icon}
                  alt={skill.title}
                  width={48}
                  height={48}
                  className="mb-3"
                />
                <span className="text-sm font-medium text-zinc-200">
                  {skill.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
