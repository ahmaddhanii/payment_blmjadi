// routes/uploadPaymentProof.js

const express = require('express');
const router = express.Router();

router.post('/uploadPaymentProof', (req, res) => {
  // Menyimpan bukti pembayaran yang diunggah, misalnya ke sistem penyimpanan file seperti AWS S3 atau penyimpanan lokal

  // Mengembalikan respons ke klien
  res.status(200).json({ message: 'Bukti pembayaran berhasil diunggah' });
});

module.exports = router;
