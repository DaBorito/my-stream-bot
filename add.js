import fetch from "node-fetch";

export default async function handler(req, res) {
  const item = req.query.item;
  if (!item) return res.status(400).send("❌ Kein Eintrag angegeben");

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/DEINE_ID/exec";
  const url = `${GOOGLE_SCRIPT_URL}?action=add&item=${encodeURIComponent(item)}`;

  try {
    const response = await fetch(url);
    const text = await response.text();
    res.send(text);
  } catch (err) {
    res.status(500).send("❌ Fehler beim Eintragen");
  }
}
