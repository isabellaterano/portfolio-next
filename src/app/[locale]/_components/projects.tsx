"use client";

import { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { projectsData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects | Isabella Terano",
  description:
    "Explore a showcase of various projects by Isabella Terano, including web development, e-commerce solutions, and more.",
  keywords: [
    "projects",
    "web development",
    "portfolio",
    "e-commerce",
    "React",
    "Next.js",
    "Tailwind CSS",
  ],
  openGraph: {
    title: "Projects | Isabella Terano",
    description:
      "Discover a variety of projects including web development, e-commerce, and more by Isabella Terano.",
    url: "https://isabellaterano.vercel.app/en/projects",
    type: "website",
  },
};

const Project = () => {
  const t = useTranslations("Project");
  const keys = [
    "medical",
    "rental",
    "software",
    "forge",
    "chair",
    "tattoo",
  ] as const;

  const displayedProjects = projectsData.slice(0, 6);

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 mx-auto min-h-screen place-content-center z-20">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-2xl md:text-5xl font-bold text-center mb-4 text-slate-100">
          {t("h1")}
        </h1>
        <p className="text-lg md:text-xl text-center mb-10 text-slate-300">
          {t("p")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {displayedProjects.map((project, index) => (
          <div className="rounded-md shadow-lg bg-slate-50" key={project.title}>
            <Image
              src={project.imageUrl}
              alt={`Preview of ${project.title} project`}
              width={800}
              height={600}
              className="rounded-t-md object-cover w-full h-auto"
              loading="lazy"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-zinc-900 mb-2">
                {t(`${keys[index]}.title`)}
              </h2>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-block px-2 py-1 text-sm bg-zinc-300 text-zinc-500 rounded-md">
                  {project.tags}
                </span>
              </div>
              <Link
                href={project.urlDemo}
                className="group relative inline-flex justify-center items-center gap-1.5 rounded-md bg-zinc-900 border-2 border-zinc-900 px-4 py-2 text-zinc-200 hover:bg-white hover:text-zinc-900"
                rel="noopener noreferrer"
                target="_blank"
              >
                {t("demo")}
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:-rotate-45 group-active:-rotate-12"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          href="/portfolio"
          className="group relative inline-flex justify-center items-center gap-1.5 rounded-md bg-zinc-100 border-2 border-zinc-900 px-4 py-2 text-zinc-900 hover:bg-zinc-900 hover:border-zinc-100 hover:text-zinc-100"
        >
          {t("button")}
          <ArrowRight
            size={16}
            className="transition-transform group-hover:-rotate-45 group-active:-rotate-12"
          />
        </Link>
      </div>
    </section>
  );
};

export default Project;
