import { siteConfig } from "@/config/site";
import { Metadata } from "next/types";

export const siteMetaData:Metadata={
    title: {
      default: siteConfig.name,
      template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Server Components",
      "Server Actions",
      "Skateshop",
      "Skateboard",
      "Skateboarding",
      "Kickflip",
    ],
    authors: [
      {
        name: "ashikur37",
        url: "https://github.com/ashikur37",
      },
    ],
    creator: "ashikur37",
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "white" },
      { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
      images: [`${siteConfig.url}/og.jpg`],
      creator: "@ashikur37",
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
  };