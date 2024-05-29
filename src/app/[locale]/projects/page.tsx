import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Projects",
};

const Projects = () => {
  const t = useTranslations("Project");
  const keys = ["medical", "rental", "forge", "chair"] as const;

  return (
    <section className="mx-2 md:mx-16">
      <h1 className="text-2xl font-semibold text-center pb-8 mt-24">
        {t("h1")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {projectsData.map((project, index) => (
          <div
            className="rounded-md shadow-lg bg-slate-900"
            key={project.title}
          >
            <div>
              <Image
                src={project.imageUrl}
                alt={project.title}
                className="rounded-t-md"
              />
            </div>
            <div className="m-8">
              <div className="mb-8">
                <h2 className="font-semibold text-lg mb-2">
                  {t(`${keys[index]}.title`)}
                </h2>
                <p className="text-sm">{project.tags.join(" ")}</p>
              </div>
              <div className="flex-grow">
                <Link
                  href={project.urlDemo}
                  className="group relative inline-flex justify-center w-fit items-center gap-1.5 rounded-md bg-slate-950 border-2 border-gray-950 px-4 py-2 mr-2 text-gray-50 hover:bg-gray-950/50"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {t("demo")}
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:-rotate-45 group-active:-rotate-12"
                  />
                </Link>
                <Link
                  href={project.urlCode}
                  className="group relative inline-flex justify-center w-fit items-center gap-1.5 rounded-md border-2 border-gray-950 px-4 py-2 mr-2 text-gray-50 hover:bg-slate-950"
                  rel="noopener noreferrer "
                  target="_blank"
                >
                  {t("code")}
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
