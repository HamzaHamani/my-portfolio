import generateStylesheetObject from "@/Common/generateStylesheetsObject";
import Lines from "@/components/Common/Lines";
import React from "react";

export const metadata = {
  title: "Hamza",
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
    <html>
      <body className="sub-bg">
        <Lines />
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}

export default Layout;
