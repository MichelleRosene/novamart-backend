const IDENTITIES = {
  "10000001": { postcodes: ["01310100", "94107"], customer_name: "Jordan Rivera" },
  "10000002": { postcodes: ["10001"], customer_name: "Sam Patel" }
};

export default function handler(req, res) {
  const { account_number, postcode } = req.body || {};
  
  // Limpa o CEP e a conta removendo traços, pontos ou espaços
  const cleanAccount = String(account_number || "").trim();
  const cleanPostcode = String(postcode || "").replace(/\D/g, "");

  const record = IDENTITIES[cleanAccount];
  
  if (!record || !record.postcodes.some(p => p.replace(/\D/g, "") === cleanPostcode)) {
    return res.status(200).json({ success: false });
  }
  
  return res.status(200).json({
    success: true,
    customer_name: record.customer_name,
    account_number: cleanAccount
  });
}
