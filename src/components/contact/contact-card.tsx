import Image from "next/image";
import Link from "next/link";
import React from "react";

export type ContactCardProps = {
  title: string;
  description?: string;
  imagePath: string;
  link: string;
};

function ContactCard({ title, imagePath, link }: ContactCardProps) {
  return (
    <Link href={link} className="w-[440px] md:w-[500px]">
      <div
        className={`m-8 flex items-center  justify-between rounded-2xl bg-blue-700 bg-opacity-30 py-4 text-black shadow-lg hover:bg-sky-200 dark:bg-white dark:text-white dark:hover:bg-blue-200 lg:m-6`}
      >
        <div className="mx-8 flex items-center gap-4">
          <div className="bg-primary dark:bg-secondary flex h-16 w-16 items-center justify-center rounded-full hover:bg-blue-200">
            <Image
              src={`/icons/${imagePath}.svg`}
              alt={title}
              width={40}
              height={40}
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-700">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ContactCard;
