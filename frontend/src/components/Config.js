import { useState } from "react";

const Config = ({ configHandler, bloodAlcoholContent, menuItem }) => {
  const bac = bloodAlcoholContent;

  const [sex, setSex] = useState(bac.sex);
  const [bodyWaight, setBodyWaight] = useState(bac.bodyWaight);
  const [beerSize, setBeerSize] = useState(bac.beerSize);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = { sex, bodyWaight, beerSize };

    configHandler(data);
    menuItem("config");
  };
  return (
    <div className="login">
      <h2 className="login-header">Einstellung</h2>
      <form className="login-container" onSubmit={submitHandler}>
        <p>
          <label>Geschlecht</label>
          <select
            name="sex"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
          >
            <option value="0.68">Mann</option>
            <option value="0.55">Frau</option>
          </select>
        </p>
        <p>
          <label>Gewicht</label>
          <select
            name="bodyWaight"
            value={bodyWaight}
            onChange={(e) => setBodyWaight(e.target.value)}
          >
            <option value="50">50 Kg</option>
            <option value="55">55 Kg</option>
            <option value="60">60 Kg</option>
            <option value="65">65 Kg</option>
            <option value="70">70 Kg</option>
            <option value="75">75 Kg</option>
            <option value="80">80 Kg</option>
            <option value="85">85 Kg</option>
            <option value="90">90 Kg</option>
            <option value="95">95 Kg</option>
            <option value="100">100 Kg</option>
            <option value="105">105 Kg</option>
            <option value="110">110 Kg</option>
            <option value="115">115 Kg</option>
            <option value="120">120 Kg</option>
            <option value="125">125 Kg</option>
            <option value="130">130 Kg</option>
          </select>
        </p>
        <p>
          <label>Bier</label>
          <select
            name="beerSize"
            value={beerSize}
            onChange={(e) => setBeerSize(e.target.value)}
          >
            <option value="8">0.2 l</option>
            <option value="13.33">0.33 l</option>
            <option value="16">0.4 l</option>
            <option value="20">0.5 l</option>
          </select>
        </p>
        <p>
          <button type="submit" className="login-submit">
            Daten speichern
          </button>
        </p>
      </form>
    </div>
  );
};

export default Config;
