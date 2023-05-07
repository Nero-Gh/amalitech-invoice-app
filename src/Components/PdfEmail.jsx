import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { useNavigate, Link } from "react-router-dom";
import arrwBack from "../assets/icon-arrow-left.svg";

const PdfEmail = () => {
  const form = useRef();
  const navigate = useNavigate();

  const GoBack = () => {
    navigate(-1);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        // "service_1fnl14q",
        import.meta.env.VITE_APP_TEMPLATE_ID,
        // "template_4mws21t",
        form.current,
        import.meta.env.VITE_APP_USER_ID
        // "8nugkyX-ybXYAR4k6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <>
      <div
        onClick={GoBack}
        style={{
          cursor: "pointer",

          width: "80px",
          height: "80px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          src={arrwBack}
          alt=""
          style={{ width: "10px", height: "10px", fontSize: "10px" }}
        />
        <h6 style={{ marginTop: "5px" }}>Go Back</h6>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div class="mb-3">
          <h2>SEND PDF TO CUSTOMER</h2>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Name"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput2" class="form-label">
            Email address
          </label>
          <input
            type="email"
            name="user_email"
            class="form-control"
            id="exampleFormControlInput2"
            placeholder="Email"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Message
          </label>
          <textarea
            class="form-control"
            name="message"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Optional"
          ></textarea>
        </div>
        <button
          type="submit"
          class="btn"
          style={{ background: "#7c5dfa", color: "#fff" }}
        >
          Send Invoice
        </button>
      </form>
    </>
  );
};

export default PdfEmail;
