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
    <section className="md:px-12 mx-2 ">
      <h1 className="text-2xl font-semibold text-center pb-8 mt-24">
        {t("h1")}
      </h1>
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="flex items-center">
          <p className="text-base">{t("p")}</p>
        </div>
        <div className="container mx-auto flex justify-center items-center flex-col">
          <p className="mb-2 font-semibold text-lg">{t("skills")}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-12">
            {skillsData.map((skill) => (
              <div
                className="rounded-md ring-2 ring-zinc-200 bg-zinc-800 flex flex-col items-center justify-center py-3 px-2 hover:ring-sky-500"
                key={skill.title}
              >
                <Image
                  src={skill.icon}
                  alt={skill.title}
                  width={40}
                  height={40}
                />
                <span className="mt-2 text-sm font-normal">{skill.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
