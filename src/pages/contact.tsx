import React from "react";
import CursorTrailCanvas from "@/components/cursor-trail-canvas";
import { NextSeo } from "next-seo";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import ContactCard from "@/components/contact/contact-card";
import { CONTACT_DATA } from "@/data/contact-data";

function Contact() {
  return (
    <>
      <CursorTrailCanvas className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />

      <NextSeo
        title="About Ravish | Full Stack  Developer"
        description="Learn more about Ravish, a dedicated Full Stack Developer. Discover the journey, skills, and passion that drive me to create innovative and user-friendly web solutions."
        canonical={`${siteMetadata.siteUrl}/contact`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/contact`,
          title: "Learn About Ravish - Full Stack Developer",
          description:
            "Dive into the story of Ravish, a Full Stack Developer. Uncover the experiences, skills, and passion that fuel a commitment to delivering exceptional web solutions.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Ravish - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "About Me, React Developer, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Professional Journey, Skills, Passion for Web Development",
          },
        ]}
      />

      <div className="flex min-h-screen w-full flex-col items-center justify-center py-20">
        <h1 className="text-primary text-center text-6xl font-bold dark:text-white">
          Contact Me
        </h1>
        <h3 className="px-12 py-5 font-serif text-xl text-blue-600 dark:text-blue-400">
          Have a question or want to work together? Feel free to reach out!
        </h3>
        <div className="mt-8 flex grid-cols-2 flex-col items-center justify-center lg:grid">
          {CONTACT_DATA.map((contact, index) => (
            <ContactCard key={index} {...contact} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Contact;
