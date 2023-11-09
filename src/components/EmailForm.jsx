// src/components/EmailForm.js
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./FormStyles.css";
import logo from "../assets/fast_notes_logo.png";

const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_roks5vl",
        "template_xvl2pct",
        form.current,
        "UBylD-BuVof3xQjN5"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(
            "Hemos recibido tus datos, daremos de baja tu usuario e información relacionada con este lo más pronto posible.\nTe enviaremos un correo a la dirección de contacto que nos proporcionaste cuando se complete el proceso de baja.\nSaludos."
          );
        },
        (error) => {
          console.log(error.text);
          alert("Ups!!.\nAlgo salió mal, por favor inteta de nuevo más tarde.");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <img className="logo" src={logo} />
      <h4>Lamentamos que quieras dejar de usar Fast Notes.</h4>
      <p>
        Rellena el siguiente formulario para continuar con tu solicitud de baja
        de usuario Fast Notes
      </p>
      <label>Usuario Fast Notes</label>
      <input
        type="text"
        name="user"
        placeholder="fast@fastnotes.com"
        required={true}
      />
      <label>Email de contacto</label>
      <input
        type="email"
        name="contact"
        placeholder="correo@personal.com"
        required={true}
      />
      <label>Comentarios</label>
      <textarea
        className="comment"
        name="comments"
        placeholder="¿Nos cuentas la razón de tu baja?"
      />
      <input type="submit" value="Send" />
    </form>
  );
};

export default EmailForm;
