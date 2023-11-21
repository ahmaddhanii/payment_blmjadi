// components/PaymentForm.js

import { useState } from 'react';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    cardNumber: '',
    cvv: '',
    address: '',
    phoneNumber: '',
    paymentProof: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, paymentProof: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan validasi di sini
    if (formData.fullName && formData.cardNumber && formData.cvv && formData.address && formData.phoneNumber && formData.paymentProof) {
      // Kirim data pembayaran
      sendPaymentData(formData);
    } else {
      // Tangani kesalahan jika ada input yang belum diisi
      alert('Mohon lengkapi semua kolom dan unggah bukti pembayaran');
    }
  };

  const validateCardNumber = (cardNumber) => {
    const cardNumberRegex = /^[0-9]{16}$/;
    return cardNumberRegex.test(cardNumber);
  };

  const validateAddress = (address) => {
  const addressRegex = /^[a-zA-Z0-9\s,'-]*$/; 
    return addressRegex.test(address);
  };
  
  const validateCVV = (cvv) => {
    const cvvRegex = /^[0-9]{3,4}$/;
    return cvvRegex.test(cvv);
  };

  const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    const validatePhoneNumber = (phoneNumber) => {
    return phoneRegex.test(phoneNumber);
  };

  const sendPaymentData = (data) => {
    // Kode untuk mengirim data pembayaran ke backend
    // Misalnya, menggunakan fetch ke endpoint backend
    fetch('/api/payment', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        // Tangani respons dari server
        if (response.ok) {
          // Berhasil
          alert('Pembayaran berhasil');
        } else {
          // Tangani kesalahan dari server
          alert('Terjadi kesalahan saat melakukan pembayaran');
        }
      })
      .catch((error) => {
        // Tangani kesalahan jaringan
        alert('Terjadi kesalahan jaringan');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="fullName" className="block text-gray-700">Nama Lengkap</label>
        <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} className="w-full border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:outline-none px-4 py-2 mt-1" />
      </div>
      {/* Tambahkan input untuk nomor kartu, tanggal kadaluarsa, CVV, dll */}
      {/* ... */}
      <div className="mb-4">
        <label htmlFor="cardNumber" className="block text-gray-700">Nomor Kartu Kredit</label>
        <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} className="w-full border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:outline-none px-4 py-2 mt-1" />
      </div>
      {/* Contoh input untuk tanggal kadaluarsa */}
      <div className="mb-4">
        <label htmlFor="address" className="block text-gray-700">Alamat</label>
        <input type="text" id="address" name="address" value={formData.addressRegex} onChange={handleInputChange} className="w-full border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:outline-none px-4 py-2 mt-1" />
      </div>
      {/* Contoh input untuk CVV */}
      <div className="mb-4">
        <label htmlFor="cvv" className="block text-gray-700">CVV</label>
        <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleInputChange} className="w-full border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:outline-none px-4 py-2 mt-1" />
      </div>
      {/* Contoh input untuk nomor telepon */}
      <div className="mb-4">
         <label htmlFor="phoneNumber" className="block text-gray-700">Nomor Telepon</label>
         <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} 
          className="w-full border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:outline-none px-4 py-2 mt-1" />
      </div>
      <div className="mb-4">
        <label htmlFor="paymentProof" className="block text-gray-700">Bukti Pembayaran</label>
        <input type="file" id="paymentProof" name="paymentProof" onChange={handleFileUpload} className="w-full border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:outline-none px-4 py-2 mt-1" />
      </div>
      <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">Bayar</button>
    </form>
  );
};

export default PaymentForm;
