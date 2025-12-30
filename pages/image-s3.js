import { useEffect, useState } from "react";

export default function AdminImages() {
  const [images, setImages] = useState([]);
  console.log(images);
  useEffect(() => {
    fetch("/api/s3-images")
      .then((res) => res.json())
      .then((data) => {
        console.log("DATA:", data);
        setImages(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {Array.isArray(images) &&
        images.map((img) => (
          <img key={img.key} src={img.url} alt="" className="w-full rounded" />
        ))}
    </div>
  );
}
