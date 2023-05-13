import React from "react";
import { Link } from "react-router-dom";
import arrF from "../assets/icon-arrow-right.svg";
import "../Styles/PdfStyles.css";

const GenerateEmail = () => {
  return (
    <div>
      <Link to="./generatepdf" style={{ textDecoration: "none" }}>
        <div
          style={{
            cursor: "pointer",
            color: "#fff",
            width: "120px",
            textAlign: "center",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "400",
            // background: "#7c5dfa",
            marginTop: "50px",
            borderRadius: "20px",
          }}
        >
          <h6 className="send-invoice"> Send Invoice</h6>
          <img
            src={arrF}
            alt=""
            style={{
              width: "10px",
              height: "10px",
              fontSize: "10px",
              marginLeft: "3px",

              marginBottom: "5px",
            }}
          />
        </div>
      </Link>
    </div>
  );
};

export default GenerateEmail;
