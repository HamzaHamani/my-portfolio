import "./globals.css";
import generateStylesheetObject from "@/Common/generateStylesheetsObject";

export const metadata = {
  title: {
    default: "Hamza | Full Stack Developer",
    template: "Hamza | %s",
  },
  description:
    "Hamza Hamani, a Full Stack Developer based in Kenitra, specializes in Next.js, Tailwind CSS, Drizzle, with 3 years of coding experience.",
  alternates: {
    canonical: "https://hamzahamani.tech",
  },
  openGraph: {
    title: "Hamza Hamani",
    description:
      "Hamza Hamani, a Full Stack Developer based in Kenitra, specializes in Next.js, Tailwind CSS, Drizzle, with 3 years of coding experience.",
    url: "https://hamzahamani.tech",

    images: [
      {
        url: "http://hamzahamani.tech/api/og", // Dynamic og route
        width: 1200,
        height: 630,
      },
    ],
    siteName: "hamzahamani.tech",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/assets/imgs/favicon.ico",
    shortcut: "/assets/imgs/favicon.ico",
    other: generateStylesheetObject([
      "/assets/css/plugins.css",
      "/assets/css/style.css",
    ]),
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://hamzahamani.tech/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
      {
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "Hamza Hamani",
        "url": "https://hamzahamani.tech",
        "logo": "https://hamzahamani.tech/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+212693517484",
          "contactType": "Customer Service",
          "areaServed": "MA",
          "availableLanguage": "English"
        },
        "sameAs": [
          "https://www.linkedin.com/in/hamzahamani",
          "https://twitter.com/hamzahamani",
          "https://github.com/hamzahamani"
        ]
      }
    `,
          }}
        />
      </head>
      <body> {children}</body>
    </html>
  );
}
