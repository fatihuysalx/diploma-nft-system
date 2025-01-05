require("dotenv").config(); // Çevresel değişkenleri yükler
const express = require("express"); // Express.js çerçevesi
const bodyParser = require("body-parser"); // JSON gövdesini işlemek için
const cors = require("cors"); // CORS politikaları
const diplomaRoutes = require("./routes/diploma"); // Diploma rotaları

const app = express();

app.use(cors()); // CORS yapılandırması
app.use(bodyParser.json()); // JSON gövdeleri için destek
app.use("/api/diplomas", diplomaRoutes); // Diploma ile ilgili API rotaları

const PORT = process.env.PORT || 5000; // PORT numarası, .env'den çekilir
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // Başarılı bir şekilde başlatıldığında mesaj
});
