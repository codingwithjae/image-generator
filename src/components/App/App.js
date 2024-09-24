import { showMessage } from "../Toastify/toastMessages.js";
import "toastify-js/src/toastify.css";

export async function handleImageGeneration(prompt, setImageUrl) {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  console.log("API Key:", apiKey);

  try {
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          prompt: prompt,
          n: 1,
          size: "512x512",
        }),
      }
    );

    if (!response.ok) {
      // Captura el error en caso de que la API devuelva un error y lo procesa
      const errorData = await response.json();
      throw new Error(`Error generating the image: ${errorData.error.message}`);
    }

    const data = await response.json();
    setImageUrl(data.data[0].url);
  } catch (error) {
    // Muestra el mensaje de error con Toastify
    showMessage(`${error.message}`, "error");
    console.error("Error generating the image:", error); // También es útil mantener un log en consola
  }
}
