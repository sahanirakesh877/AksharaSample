import React, { useState } from "react";
import QRCode from "qrcode.react";
import { GiSplitCross } from "react-icons/gi";

const QRCodeDownload = () => {
  const [qr, setQr] = useState(true);
  const handleScan = (data) => {
    if (data) {
      window.location.href = data;
    }
  };
 const pdfUrl = "http://localhost:5000/pdf";

  return (
    <>
      {qr ? (
        <>
          <div className="d-flex justify-content-center align-items-center flex-column text-center">
            <div className="border p-2 border-success shadow position-relative">
              <QRCode value={pdfUrl} onScan={handleScan} />
              <p className="pt-1 px-2">Scan QR Code for PDF</p>
              <button
                className="position-absolute top-0 end-0 m-2"
                onClick={() => setQr(false)}
              >
                <GiSplitCross />
              </button>
            </div>
          </div>
        </>
      ) : (
        <button
          onClick={() => setQr(true)}
          className="px-1 border-0 border-danger bg-danger text-light   "
        >
          show QR
        </button>
      )}
    </>
  );
};

export default QRCodeDownload;
