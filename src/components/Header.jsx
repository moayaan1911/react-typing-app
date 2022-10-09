import React from "react";

export const Header = () => {
  return (
    <nav class="navbar is-transparent">
      <div
        class="navbar-brand"
        style={{ display: "flex", alignItems: "center", paddingLeft: "20px" }}
      >
        <img
          src={"image.png"}
          alt=""
          style={{ width: "42px", height: "42px" }}
        />
        <h2
          style={{
            paddingLeft: "10px",
            fontWeight: "800",
            color: "hsl(204, 86%, 53%)",
            fontSize: "20px",
          }}
        >
          Typing Buddy
        </h2>
        <p
          style={{
            paddingTop: "8px",
            color: "hsl(204, 86%, 53%)",
            fontSize: "12px",
            fontWeight: "600",
          }}
        >
          - Enhance your Typing Skills
        </p>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a
                href="https://github.com/moayaan1911/react-typing-app"
                target={"_blank"}
              >
                <span
                  className="button is-info"
                  style={{ paddingRight: "20px" }}
                >
                  GITHUB
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};
