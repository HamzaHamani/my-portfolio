export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: "",
        allow: "/",
      },
    ],
    sitemap: "https://hamzahamani.tech/sitemap.xml",
  };
}
