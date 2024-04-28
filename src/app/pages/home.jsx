"use client";
import { useState } from "react";

export default function Home() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [result, setResult] = useState("faltan datos");
  const [result1, setResult1] = useState(null);
  const [result2, setResult2] = useState(null);
  const [result3, setResult3] = useState(null);
  const [error, setError] = useState(null);
  const [errorHoras, setErrorHoras] = useState(null);
  const [errorEsperanza, setErrorEsperanza] = useState(null);

  const handleValue1Change = (event) => {
    let inputValue1 = parseInt(event.target.value);

    if (inputValue1 > 120) {
      setValue1(120)
    } else {
      return setValue1(inputValue1)
    };
  };

  const handleValue2Change = (event) => {

    const inputValue2 = parseInt(event.target.value);

    if (inputValue2 > 120) {
      (120)
      setErrorEsperanza('Eres optimista 😏')
    } else {
      setErrorEsperanza('');
      return setValue2(inputValue2)
    };
  };

  const handleValue3Change = (event) => {

    const inputValue3 = parseInt(event.target.value);

    if (inputValue3 > 20) {
      setErrorHoras('Enserio duermes más de 20 horas?');
      return setValue3(20);
    } else {
      setErrorHoras('');
      return setValue3(inputValue3);
    }

  };

  const handleCalculate = () => {

    if (!value1 || !value2) {
      setError("Ambos campos son obligatorios");
    }
    if (value1 > value2) {
      setError("OOOOOOOH MAY GOD, ESCRIBA BIEN LOS DATOS 😒😒");
    }
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    const hours = parseFloat(value3);

    // Realizar el cálculo matemático

    // const hoursToYears = yearsLeft * 8760
    let yearsLeft = (num1 - num2);
    const añosDeVidaRestanteMenosHorasDeSueñoEnAños = (hours * 365) * yearsLeft / 8760
    const añosDeVidaRestanteMenosHorasDeSueñoEnHoras = (hours * 365) * yearsLeft
    const añosDeVidaRestantesMenosAñosEnSueño = yearsLeft - añosDeVidaRestanteMenosHorasDeSueñoEnAños

    setResult(Math.abs(yearsLeft));
    setResult1(Math.abs(añosDeVidaRestanteMenosHorasDeSueñoEnAños))
    setResult2(Math.abs(añosDeVidaRestanteMenosHorasDeSueñoEnHoras))
    setResult3(Math.abs(añosDeVidaRestantesMenosAñosEnSueño))

  };

  return (
    <section className="flex flex-col gap-y-2">
      <h1 className="font-bold">Edad actual</h1>
      <input
        type="number"
        required
        value={value1}
        onChange={handleValue1Change}
      />


      <div>
        <h1 className="font-bold">Hasta que edad crees que viviras?</h1>
        <input type="number" value={value2} onChange={handleValue2Change} />
      </div>
      {errorEsperanza && <div style={{ color: "red" }}>{errorHoras}</div>}

      <div>
        <h1 className="font-bold">Cuantas horas al dia duermes?</h1>
        <input type="number" value={value3} onChange={handleValue3Change} />
      </div>
      {errorHoras && <div style={{ color: "red" }}>{errorHoras}</div>}
      <button onClick={handleCalculate} className="bg-slate-500 p-2">Calcular</button>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <div>Tiempo de años restantes: <span className="text-blue-700">{result}</span></div>
      <div>
        <h1 className="font-bold">Las Horas en años que usaras para dormir: </h1>
        <div className="grid">
          <span className="text-green-500">{Math.round(result1)} años</span>
          <span className="text-green-500">{Math.round(result2)} Horas</span>
        </div>
        <div className="grid">
          <h1>Tiempo de años restantes menos los años que dormiras:</h1>
          <span className="text-green-500">{Math.round(result3)} años</span>
        </div>
      </div>
    </section>
  );
}
