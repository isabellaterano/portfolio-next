import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { projectsData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Showcase of various projects including web development, e-commerce, and more.",
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
    title: "Projects",
    description:
      "Showcase of various projects including web development, e-commerce, and more.",
    url: "https://isabellaterano.vercel.app/en/projects",
    type: "website",
  },
};

const Portfolio = () => {
  const t = useTranslations("Project");
  const keys = [
    "food",
    "medical",
    "rental",
    "software",
    "forge",
    "chair",
    "tattoo",
    "portfolio",
    "full",
    "animal",
    "photo",
    "designer",
  ] as const;

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 mx-auto lg:mx-20">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-center mt-20 mb-8 text-slate-100">
          {t("h1")}
        </h1>
        <p className="text-lg md:text-xl text-center mb-10 text-slate-300">
          {t("p")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div className="rounded-md shadow-lg bg-zinc-300" key={project.title}>
            <Image
              src={project.imageUrl}
              alt={project.title}
              className="rounded-t-md object-cover w-full h-auto"
              loading="lazy"
            />
            <div className="m-8">
              <div className="mb-8 text-zinc-900">
                <h2 className="font-semibold text-lg mb-2">
                  {t(`${keys[index]}.title`)}
                </h2>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block px-2 py-1 text-sm bg-zinc-400 rounded-md">
                    {project.tags}
                  </span>
                </div>
              </div>
              <div className="flex-grow">
                <Link
                  href={project.urlDemo}
                  className="group relative inline-flex justify-center w-fit items-center gap-1.5 rounded-md bg-zinc-950 border-2 border-zinc-950 px-4 py-2 mr-2 text-zinc-200 hover:bg-zinc-300 hover:text-zinc-900"
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
