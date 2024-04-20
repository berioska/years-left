"use client";
import { useState } from "react";
export default function Home() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [result, setResult] = useState(0);
  const [error, setError] = useState(null);

  const handleValue1Change = (event) => {
    setValue1(event.target.value);
  };

  const handleValue2Change = (event) => {
    setValue2(event.target.value);
  };

  const handleCalculate = () => {
    if (!value1 || !value2) {
      setError("Ambos campos son obligatorios");
      return;
    }
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    // Realizar el cálculo matemático
    const calculatedResult = num1 + num2; // Por ejemplo, una suma

    // Actualizar el estado con el resultado
    setResult(calculatedResult);
  };

  return (
    <section>
      <div className="flex gap-x-2">
        <input
          type="number"
          required
          value={value1}
          onChange={handleValue1Change}
        />
        <input type="number" value={value2} onChange={handleValue2Change} />
      </div>
      <button onClick={handleCalculate}>Calcular</button>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <div>Resultado: {result}</div>
    </section>
  );
}
