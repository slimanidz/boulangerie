import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: process.env.AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export default async function handler(req, res) {
  try {
    const data = await s3.send(
      new ListObjectsV2Command({
        Bucket: process.env.AWS_S3_BUCKET,
        Prefix: "produits/",
      })
    );

    const images = Array.isArray(data.Contents)
      ? data.Contents.map((item) => ({
          key: item.Key,
          url: `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_S3_REGION}.amazonaws.com/${item.Key}`,
        }))
      : [];

    res.status(200).json(images);
  } catch (err) {
    console.error("Failed to list images:", err);
    res.status(500).json({ error: "Failed to list images" });
  }
}
