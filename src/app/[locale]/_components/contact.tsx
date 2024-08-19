"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import Link from "next/link";
import { sendEmail } from "../../../../actions/sendEmail";
import { PaperPlaneRight } from "@phosphor-icons/react/dist/ssr";

export default function Contact() {
  const { pending } = useFormStatus();
  const t = useTranslations("Contact");

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-screen-lg py-16 px-4 sm:px-6 lg:px-8 lg:scroll-mt-11 min-h-dvh"
    >
      <h1 className="text-2xl md:text-5xl font-bold text-center mb-4 text-slate-100">
        {t("h1")}
      </h1>
      <p className="text-lg md:text-xl text-center mb-10 text-slate-300">
        {t("p")}
      </p>
      <div className="flex justify-center">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
          <p className="text-center text-slate-800 mb-6">
            {t("pfirst")}
            <Link
              className="underline text-blue-600"
              href="mailto:isabellaiterano@gmail.com"
            >
              isabellaiterano@gmail.com
            </Link>{" "}
            {t("psecond")}
          </p>

          <form
            className="space-y-6"
            action={async (formData) => {
              const { data, error } = await sendEmail(formData);

              if (error) {
                toast.error(error);
                return;
              }

              toast.success("Email sent successfully!");
            }}
          >
            <input
              className="block w-full h-14 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm placeholder-gray-500"
              name="firstName"
              type="text"
              required
              maxLength={50}
              placeholder={t("name")}
            />
            <input
              className="block w-full h-14 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm placeholder-gray-500"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder={t("email")}
            />
            <textarea
              className="block w-full h-52 px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm placeholder-gray-500"
              name="message"
              placeholder={t("message")}
              required
              maxLength={5000}
            />
            <button
              type="submit"
              className="group relative inline-flex justify-center items-center gap-1.5 rounded-md bg-zinc-900 border-2 border-zinc-900 px-4 py-2 text-zinc-200 hover:bg-zinc-300 hover:text-zinc-900"
              disabled={pending}
            >
              {pending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
              ) : (
                <>
                  {t("button")}
                  <PaperPlaneRight
                    size={24}
                    className="transition-transform group-hover:-rotate-45 group-active:-rotate-12"
                  />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
