// Chiave gratuita da https://web3forms.com (inserisci paologaletti00@gmail.com)
const ACCESS_KEY = 24f0e139-6795-4f29-ba80-b2f069ca1532;
async function notify(subject, message) {
  const r = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ access_key: ACCESS_KEY, subject, from_name: "appuntamento.gal3tti.net", message })
  });
  return r.ok;
}
