export default async function handler(req, res) {
  try {
    await res.unstable_revalidate("/menu" + req.body.data.slug);
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
