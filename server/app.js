// app.js (atau file utama aplikasi Express Anda)

const express = require('express');
const processPaymentRouter = require('./routes/processPayment');
const uploadPaymentProofRouter = require('./routes/uploadPaymentProof');

const app = express();

// Menggunakan endpoint untuk pemrosesan pembayaran
app.use('/api', processPaymentRouter);
app.use('/api', uploadPaymentProofRouter);

// ... (konfigurasi lainnya)

app.listen(3000, () => {
  console.log('Server berjalan di port 3000');
});
