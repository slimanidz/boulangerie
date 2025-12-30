import { useState } from "react";

export default function UploadImage({ onUpload }) {
  const handleChange = (e) => {
    const file = e.target.files[0];

    // console.log(file);
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = async () => {
      // console.log("BASE64:", reader.result);
      // console.log("FILENAME:", file.name);
      // console.log("FILETYPE:", file.type);

      const res = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          base64: reader.result,
          fileName: file.name,
          fileType: file.type,
        }),
      });

      const data = await res.json();
      // console.log("API RESPONSE:", data);

      if (data.url) onUpload(data.url);
    };

    reader.readAsDataURL(file);
  };

  return <input type="file" onChange={handleChange} />;
}
