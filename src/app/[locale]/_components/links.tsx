import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/navigation";

interface LinksProps {
  setIsOpen: (isOpen: boolean) => void;
}

const Links = ({ setIsOpen }: LinksProps) => {
  const t = useTranslations("Navigation");
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navLinkClasses =
    "relative block text-4xl md:text-xl font-semibold after:block after:content-[''] after:absolute after:h-[2px] after:bg-cyan-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition-transform after:duration-300 after:origin-center";

  return (
    <nav className="flex flex-col items-center gap-10 md:flex-row md:gap-7 text-zinc-50">
      <Link
        href="/"
        onClick={handleLinkClick}
        className={`${navLinkClasses} ${
          pathname === "/" && "after:scale-x-100"
        }`}
      >
        {t("home")}
      </Link>
      <Link
        href="/about"
        onClick={handleLinkClick}
        className={`${navLinkClasses} ${
          pathname === "/about" && "after:scale-x-100"
        }`}
      >
        {t("about")}
      </Link>
      <Link
        href="/portfolio"
        onClick={handleLinkClick}
        className={`${navLinkClasses} ${
          pathname === "/portfolio" && "after:scale-x-100"
        }`}
      >
        {t("projects")}
      </Link>
      <a
        href={
          pathname.includes("/portfolio") || pathname.includes("/about")
            ? "/#contact"
            : "#contact"
        }
        onClick={handleLinkClick}
        className={navLinkClasses}
      >
        {t("contact")}
      </a>
    </nav>
  );
};

export default Links;
