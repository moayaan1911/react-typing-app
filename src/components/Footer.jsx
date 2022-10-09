import React from "react";

export const Footer = () => {
  return (
    <footer
      style={{
        position: "absolute",
        bottom: "0",
        width: "100vw",
        height: "100px",
        borderTop: "5px solid hsl(204, 86%, 53%)",
        paddingTop: "20px",
      }}
    >
      <div class=" has-text-centered">
        <p>
          Created by <i class="fa-brands fa-ethereum"></i>{" "}
          <strong style={{ color: "hsl(204, 86%, 53%)" }}>
            Mohammad Ayaan Siddiqui{" "}
          </strong>
          <i class="fa-brands fa-ethereum"></i>
        </p>
        <a
          href="https://github.com/moayaan1911"
          style={{ cursor: "pointer" }}
          target="_blank"
        >
          <img src="github.png" alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/ayaaneth/"
          style={{ cursor: "pointer" }}
          target="_blank"
        >
          <img src="linkedin.png" alt="linkedin" />
        </a>
        <a
          href="https://twitter.com/usdisshitcoin"
          style={{ cursor: "pointer" }}
          target="_blank"
        >
          <img src="twitter.png" alt="twitter" />
        </a>
      </div>
    </footer>
  );
};
