import React, { useState } from "react";
import axios from "axios";

const MintForm = () => {
  const [recipient, setRecipient] = useState("");
  const [tokenURI, setTokenURI] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Önceki mesajları temizle

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/mint`, {
        recipient,
        tokenURI,
      });
      setMessage(`Mint successful! Tx Hash: ${response.data.txHash}`);
    } catch (error) {
      setMessage(`Mint failed: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Recipient Address:</label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
        </div>
        <div>
          <label>Token URI:</label>
          <input
            type="text"
            value={tokenURI}
            onChange={(e) => setTokenURI(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
        </div>
        <button type="submit" style={{ padding: "10px 20px", backgroundColor: "blue", color: "white", border: "none" }}>
          Mint
        </button>
      </form>
      {message && <p style={{ marginTop: "20px", color: message.startsWith("Mint successful") ? "green" : "red" }}>{message}</p>}
    </div>
  );
};

export default MintForm;
