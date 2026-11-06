export default function handler(req, res) {
  const { account_number, order_id, new_address } = req.body || {};

  if (!account_number || !order_id || !new_address) {
    return res.status(400).json({ success: false, error: "Parâmetros ausentes" });
  }

  // Retorna confirmação de atualização do endereço
  return res.status(200).json({
    success: true,
    order_id: String(order_id),
    new_address: String(new_address),
    message: `Endereço de entrega do pedido ${order_id} atualizado com sucesso.`
  });
}
