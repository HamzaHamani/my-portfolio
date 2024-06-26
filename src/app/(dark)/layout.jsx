import generateStylesheetObject from "@/Common/generateStylesheetsObject";

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
