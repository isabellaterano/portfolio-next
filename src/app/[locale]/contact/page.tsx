"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useFormStatus } from "react-dom";
import { sendEmail } from "../../../../actions/sendEmail";
import toast from "react-hot-toast";
import Link from "next/link";
import { PaperPlaneRight } from "@phosphor-icons/react/dist/ssr";

export default function Contact() {
  const { pending } = useFormStatus();
  const t = useTranslations("Contact");

  return (
    <section className="mx-2">
      <div className="flex items-center justify-center flex-col mt-24">
        <div className="w-[min(100%,38rem)] bg-slate-200 text-slate-950 p-6 rounded-lg shadow-lg mb-10">
          <p className="text-center mb-4">
            {t("pfirst")}
            <Link className="underline" href="mailto:isabellaiterano@gmail.com">
              isabellaiterano@gmail.com
            </Link>{" "}
            {t("psecond")}
          </p>

          <form
            className="mt-4 flex flex-col dark:text-black"
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
              className="h-14 px-4 mb-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder={t("email")}
            />
            <textarea
              className="h-52 mb-3 rounded-lg border border-gray-300 dark:border-gray-600 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
              name="message"
              placeholder={t("message")}
              required
              maxLength={5000}
            />
            <button
              type="submit"
              className="group flex justify-center items-center rounded-lg border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black w-52 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
              disabled={pending}
            >
              {pending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 "></div>
              ) : (
                <>
                  {t("button")}
                  <PaperPlaneRight
                    size={28}
                    className="transition-transform group-hover:-rotate-45 group-active:-rotate-12 ml-2"
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
