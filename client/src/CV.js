import React from "react";

export default function CV() {
  const cv = "/personal/tero_hyttinen_cv_en.pdf";
  return (
    <div className="content">
      <h2>CV</h2>
      <object data={cv} type="application/pdf" width="100%" height="1200px">
        <p>
          PDF plugin not found. <a href={cv}>Click here to download CV.</a>
        </p>
      </object>
    </div>
  );
}
