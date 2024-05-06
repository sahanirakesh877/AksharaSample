import React, { useState, useEffect } from "react";
import QRCodeDownload from "./QrCode";

const ScrollComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 700) { 
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <div>
      {isVisible && (
        <div className="QRCodeDownload"> 
    <QRCodeDownload/>
        </div>
      )}
    </div>
  );
};

export default ScrollComponent;
