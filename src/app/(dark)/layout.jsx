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
function Layout({ children }) {
  return (
    <div>
      <div>
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Layout;
