import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { projectsData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
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

const Projects = () => {
  const t = useTranslations("Project");
  const keys = [
    "medical",
    "rental",
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
    <section className="mx-2 md:mx-16 mb-10">
      <h1 className="text-3xl font-semibold text-center p-4 mt-24 mb-10">
        {t("h1")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <div className="rounded-md shadow-lg bg-zinc-300" key={project.title}>
            <Image
              src={project.imageUrl}
              alt={project.title}
              className="rounded-t-md"
              loading="lazy"
            />
            <div className="m-8">
              <div className="mb-8 text-zinc-900">
                <h2 className="font-semibold text-lg mb-2">
                  {t(`${keys[index]}.title`)}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2 py-1 text-sm border border-zinc-950 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
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

export default Projects;
