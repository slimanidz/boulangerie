import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "15mb",
    },
  },
};

const s3 = new S3Client({
  region: process.env.AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { base64, fileName, fileType } = req.body;

    if (!base64 || !fileName) {
      return res.status(400).json({ error: "Missing file" });
    }

    const buffer = Buffer.from(
      base64.replace(/^data:.+;base64,/, ""),
      "base64"
    );

    const key = `produits/${Date.now()}-${fileName}`;

    await s3.send(
      new PutObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET,
        Key: key,
        Body: buffer,
        ContentType: fileType || "image/jpeg",
      })
    );

    const url = `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_S3_REGION}.amazonaws.com/${key}`;

    return res.status(200).json({ url });
  } catch (err) {
    console.error("UPLOAD ERROR:", err);
    return res.status(500).json({ error: "Upload failed" });
  }
}
