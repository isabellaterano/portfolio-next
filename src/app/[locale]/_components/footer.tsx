import { Envelope, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 z-30 flex justify-between items-center px-12 py-1">
      <small className="text-xs">
        &copy; {new Date().getFullYear()} Isabella Terano. All rights reserved.
      </small>
      <div className="inline-flex gap-4">
        <Link
          href="https://github.com/isabellaterano"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GithubLogo size={28} color="#f7f7f7" className="hover:opacity-70" />
        </Link>
        <Link href="mailto:isabellaiterano@gmail.com" rel="noopener noreferrer">
          <Envelope size={28} color="#f7f7f7" className="hover:opacity-70" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
