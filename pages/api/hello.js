export default async function handler(req, res) {
  res.status(200).json({ success: "success" });

  client.close();
}
