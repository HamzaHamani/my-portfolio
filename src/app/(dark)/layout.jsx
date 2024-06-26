import generateStylesheetObject from "@/Common/generateStylesheetsObject";

export const metadata = {
  title: {
    default: "Hamza | Full Stack Developer",
    template: "Hamza | %s",
  },
  description: "I’m Hamza Hamani, Full Stack Developer and Based in Kenitra",
  openGraph: {
    title: "Hamza Hamani",
    description:
      "Hamza Hamani, a Full Stack Developer in Kenitra, specializes in Next.js, Tailwind CSS, Drizzle, and more. With 3 years of coding experience, he brings expertise to his projects",
    url: "https://hamzahamani.tech",
    alternates: {
      canonical: "https://hamzahamani.tech",
    },
    images: [
      {
        url: "http://hamzahamani.tech/api/og?title=hamzahamani.tech", // Dynamic og route
        width: 800,
        height: 600,
      },
      {
        url: "http://hamzahamani.techapi/og?title=hamzahamani.tech", // Dynamic og route
        width: 1800,
        height: 1600,
        alt: "My custom alt",
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
