import "./globals.css";
import generateStylesheetObject from "@/Common/generateStylesheetsObject";

export const metadata = {
  metadataBase: new URL("https://hamzahamani.tech"),
  title: {
    default: "Hamza | Full Stack Developer",
    template: "Hamza | %s",
  },
  description:
    "Hamza Hamani, Full Stack Developer based in Kenitra, specializes in Next.js, Tailwind CSS, Drizzle, with 3 years of coding experience.",
  alternates: {
    canonical: "https://hamzahamani.tech",
  },
  openGraph: {
    url: "https://hamzahamani.tech",
    siteName: "hamzahamani.tech",
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
        <meta
          name="google-site-verification"
          content="t3ilikVTD0xP-6QpfGMsoW9O3K5D_FStZsSWXPiqOCE"
        />
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
