const { ethers } = require("ethers");
const abi = require("../config/abi.json");

// Sağlayıcı ve cüzdanın yapılandırılması
const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// Akıllı kontrat bağlantısı
const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, wallet);

async function mintDiploma(recipient, tokenURI) {
  try {
    console.log("Minting diploma...");
    const tx = await contract.mintDiploma(recipient, tokenURI); // Mint işlemi
    await tx.wait(); // İşlemin onaylanmasını bekle
    console.log("Mint successful:", tx.hash);
    return tx.hash; // İşlem hash'i döndür
  } catch (error) {
    console.error("Minting failed:", error);
    throw new Error("Minting failed"); // Hata fırlat
  }
}

module.exports = { mintDiploma }; // İşlevi dışa aktar
