import React from "react";

function Footer() {
  const footerStyle = {
    background: "linear-gradient(to right, #f00, #00f)",
    paddingBottom: "1px",
  };

  const marqueeStyle = {
    color: "white",
    overflow: "hidden",
  };

  const marqueeTextAnimation = {
    animation: "marqueeAnimation 50s linear infinite",
  };

  return (
    <div>
      <footer className="main-footer" style={footerStyle}>
        <style>
          {`
            @keyframes marqueeAnimation {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
          `}
        </style>

        <div className="marquee" style={marqueeStyle}>
          <p className="marquee-text" style={marqueeTextAnimation}>
            Ini adalah teks yang berjalan menggunakan Marquee dan Bootstrap.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
