import React from "react";

export default function CV() {
  const cv = "/personal/tero_hyttinen_cv_en.pdf";
  return (
    <div className="content">
      <object data={cv} type="application/pdf" width="100%" height="1200px">
        <p>
          It appears you don't have a PDF plugin for this browser. No biggie...
          you can <a href={cv}>click here to download the PDF file.</a>
        </p>
      </object>
    </div>
  );
}
