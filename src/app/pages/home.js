"use client";
import { useState } from "react";
export default function Home() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [result, setResult] = useState(0);
  const [error, setError] = useState(null);
  //const [inputDisabled, setInputDisabled] = useState(false)

  const handleValue1Change = (event) => {
    let inputValue = parseInt(event.target.value);

    if (inputValue > 120) {
      console.log("el valor no puede sobrepasar 120")
      setValue1(120)
    } else {
      return setValue1(inputValue)
    }
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
