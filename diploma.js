const express = require("express");
const { mintDiploma } = require("../services/blockchain");

const router = express.Router();

// Mint işlemi için POST rotası
router.post("/mint", async (req, res) => {
  const { recipient, tokenURI } = req.body;

  // Gelen parametrelerin kontrolü
  if (!recipient || !tokenURI) {
    return res.status(400).json({ success: false, message: "Recipient and TokenURI are required" });
  }

  try {
    const txHash = await mintDiploma(recipient, tokenURI); // Blockchain işlemi
    res.status(200).json({ success: true, txHash }); // Başarılı işlem yanıtı
  } catch (error) {
    console.error("Minting failed:", error);
    res.status(500).json({ success: false, message: error.message }); // Hata yanıtı
  }
});

module.exports = router; // Router'ı dışa aktar
