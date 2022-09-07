import { useState } from "react";
import "./styles/Form.css";

export default function Form(props) {
  const initialState = {
    name: "",
    treatment: "",
    date: "",
    value: "",
    portion: 1,
  };
  const [info, setInfo] = useState({
    name: "",
    treatment: "",
    date: "",
    value: "",
    portion: 1,
  });

  const handleChange = (event) => {
    const { target } = event;
    setInfo({
      ...info,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addItem(info);
    setInfo(initialState);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label htmlFor="name">Paciente</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        value={info.name}
        onChange={handleChange}
      />

      <label htmlFor="treatment">Tratamento</label>
      <input
        type="text"
        id="treatment"
        name="treatment"
        required
        value={info.treatment}
        onChange={handleChange}
      />

      <label htmlFor="date">Data do atendimento</label>
      <input
        type="date"
        id="date"
        name="date"
        required
        value={info.date}
        onChange={handleChange}
      />

      <label htmlFor="value">Valor (R$)</label>
      <input
        type="number"
        id="value"
        name="value"
        required
        value={info.value}
        onChange={handleChange}
      />

      <label htmlFor="portion">Parcelas</label>
      <select
        name="portion"
        id="portion"
        required
        onChange={handleChange}
        value={info.portion}
      >
        <option value="1">1x</option>
        <option value="2">2x</option>
        <option value="3">3x</option>
        <option value="4">4x</option>
        <option value="5">5x</option>
        <option value="6">6x</option>
        <option value="7">7x</option>
        <option value="8">8x</option>
        <option value="9">9x</option>
        <option value="10">10x</option>
        <option value="11">11x</option>
        <option value="12">12x</option>
      </select>

      <button type="submit">Registrar</button>
    </form>
  );
}
