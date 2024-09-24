import "./Form.styles.css";
import { FaArrowRight } from "react-icons/fa";
import React, { useState } from "react";
import { showMessage } from "../Toastify/toastMessages.js";
import "toastify-js/src/toastify.css";

function Form({ generatedImage }) {
  const [prompt, setPrompt] = useState("");

  const handleUserPrompt = (event) => {
    setPrompt(event.target.value);
    console.log(event.target.value);
  };
  

  const handleUserSubmit = async (event) => {
    event.preventDefault();

    try {
      if (prompt.length < 5) {
        throw new Error("Your prompt is too short");
      }

      showMessage(`Your image will be ready in a few seconds`);

      await generatedImage(prompt); // Llama a la función para generar la imagen

      setPrompt(""); // Limpia el campo de texto después de enviar
    } catch (error) {
      showMessage(error.message, "error");
    }
  };

  return (
    <div className="form">
      <form className="form__container">
        <textarea
          className="form__prompt"
          value={prompt}
          placeholder="Create something amazing..."
          onChange={handleUserPrompt}
        ></textarea>
      </form>
      <button className="form__button" type="submit" onClick={handleUserSubmit}>
        <span className="form__button-icon-container">
          <FaArrowRight className="form__button-icon" />
        </span>
      </button>
    </div>
  );
}

export { Form };
