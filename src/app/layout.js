import "./globals.css";
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
