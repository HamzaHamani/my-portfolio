import ProgressScroll from "@/components/Common/ProgressScroll";
import Cursor from "@/components/Common/cusor";
import LoadingScreen from "@/components/Common/loader";
import Footer from "@/components/dark/blogs/footer";
import { promises as fs } from "fs";
import Nav from "@/components/dark/blogs/nav";
import ContactUs from "@/components/dark/contact/ContactUs";
import ProjectView from "@/components/dark/works/single-project.jsx/project-view";
import Script from "next/script";
import React from "react";
import ErrorBoundary from "@/components/errorBoundary";
export async function generateMetadata({ params, searchParams }) {
  // Remove "https://", "http://", and "//" from the URL
  const file = await fs.readFile(
    process.cwd() + "/src/data/home/works.json",
    "utf8"
  );
  const data = JSON.parse(file);

  const filtered = data.filter((item) => {
    return item.title === params.project;
  });
  return {
    title: filtered[0].title,
    description: filtered[0].description,
    images: [{ url: filtered[0].photo }],
  };
}

function SingleProject({ params }) {
  return (
    <div>
      <Cursor />
      <ContactUs />
      <LoadingScreen />
      <ProgressScroll />
      <Nav />

      <main class="container">
        <ErrorBoundary>
          <ProjectView params={params} />
        </ErrorBoundary>
      </main>
      <Footer />
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

export default SingleProject;
