import React, { useState } from "react";
import { Form } from "/src/components/Form/Form.jsx";
import { Card } from "/src/components/Card/Card.jsx";
import { handleImageGeneration } from "/src/components/App/App.js";
import "./App.styles.css";

function App() {
  const [imageUrl, setImageUrl] = useState("");

  const generateImage = async (prompt) => {
    await handleImageGeneration(prompt, setImageUrl);
  };

  return (
    <main className="app">
      <Card imageUrl={imageUrl} />
      <Form generatedImage={generateImage} />
    </main>
  );
}

export default App;
