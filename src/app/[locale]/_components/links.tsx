import { useTranslations } from "next-intl";
import { Link } from "../../../navigation";

interface LinksProps {
  setIsOpen: (isOpen: boolean) => void;
}

const Links = ({ setIsOpen }: LinksProps) => {
  const t = useTranslations("Navigation");

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="flex flex-col gap-7 pt-40 px-8 text-5xl md:flex-row md:text-lg md:pt-0 text-zinc-100">
      <Link
        href="/"
        locale={t.locale}
        onClick={handleLinkClick}
        className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-cyan-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
      >
        {t("home")}
      </Link>
      <Link
        href="/about"
        locale={t.locale}
        onClick={handleLinkClick}
        className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-cyan-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
      >
        {t("about")}
      </Link>
      <Link
        href="/projects"
        locale={t.locale}
        onClick={handleLinkClick}
        className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-cyan-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
      >
        {t("projects")}
      </Link>
      <Link
        href="/contact"
        locale={t.locale}
        onClick={handleLinkClick}
        className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-cyan-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
      >
        {t("contact")}
      </Link>
    </nav>
  );
};

export default Links;
