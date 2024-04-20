"use client";
import { useState } from "react";
export default function Home() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [result, setResult] = useState(0);
  const [error, setError] = useState(null);

  const handleValue1Change = (event) => {
    let inputValue = parseInt(event.target.value);

    // Verificar si el valor supera el límite de 20
    if (inputValue > 20) {
      // Si supera el límite, ajustar el valor a 20
      inputValue = 20;
    }
    setValue1(event.target.value);
  };

  const handleValue2Change = (event) => {
    setValue2(event.target.value);
  };
  const handleValue3Change = (event) => {
    setValue3(event.target.value);
  };

  const handleCalculate = () => {
    if (!value1 || !value2 || !value3) {
      setError("Ambos campos son obligatorios");
      return;
    }
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    const num3 = parseFloat(value3);

    // Realizar el cálculo matemático
    const calculatedResult = num1 + num2 + num3; // Por ejemplo, una suma

    // Actualizar el estado con el resultado
    setResult(calculatedResult);
  };

  return (
    <section>
      <form className="flex gap-x-2">
        <input
          required
          type="number"
          value={value1}
          onChange={handleValue1Change}
          placeholder="Años"
          max={2}
        />
        <input
          type="number"
          required
          value={value2}
          onChange={handleValue2Change}
        />
        <input
          type="number"
          required
          value={value3}
          onChange={handleValue3Change}
        />
      </form>
      <button onClick={handleCalculate}>Calcular</button>
      {error && <div className="text-red-700">{error}</div>}
      <div>Resultado: {result}</div>
    </section>
  );
}
