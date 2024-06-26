import Script from "next/script";
import LoadingScreen from "@/components/Common/loader";
import generateStylesheetObject from "@/Common/generateStylesheetsObject";
import Cursor from "@/components/Common/cusor";
import ProgressScroll from "@/components/Common/ProgressScroll";
import Lines from "@/components/Common/Lines";
import Navbar from "@/components/dark/home/navbar";
import "./globals.css";
import Dark from "@/components/dark/dark";

export const metadata = {
  title: {
    default: "Hamza | Full Stack Developer",
    template: "Hamza | %s",
  },
  description: "I’m Hamza Hamani, Full Stack Developer and Based in Kenitra",
  icons: {
    icon: "/assets/imgs/favicon.ico",
    shortcut: "/assets/imgs/favicon.ico",
    other: generateStylesheetObject([
      "/assets/css/plugins.css",
      "/assets/css/style.css",
    ]),
  },
};

export default function Home() {
  return (
    <div>
      <Lines />
      <Dark />
      <Script
        src="/assets/js/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/jquery-migrate-3.4.0.min.js"
        strategy="beforeInteractive"
      />

      <Script src="/assets/js/plugins.js" strategy="beforeInteractive" />
      <Script src="/assets/js/scripts.js" strategy="beforeInteractive" />
      <Script src="/assets/js/three.min.js" strategy="lazyOnload" />
    </div>
  );
}
