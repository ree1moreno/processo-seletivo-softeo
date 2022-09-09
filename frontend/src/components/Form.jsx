import { useContext, useState } from "react";
import MyContext from "../context/MyContext";
import { createItem } from "../services/api";
import "./styles/Form.css";

export default function Form() {
  const { list, setList } = useContext(MyContext);

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

  const addItem = (new_item) => {
    setList([...list, new_item]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createItem(info);
    addItem(info);
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
        <option value="1">{`1 x R$ ${(info.value / info.portion).toFixed(
          2,
        )}`}</option>
        <option value="2">{`2 x R$ ${(info.value / info.portion).toFixed(
          2,
        )}`}</option>
        <option value="3">{`3 x R$ ${(info.value / info.portion).toFixed(
          2,
        )}`}</option>
        <option value="4">{`4 x R$ ${(info.value / info.portion).toFixed(
          2,
        )}`}</option>
        <option value="5">{`5 x R$ ${(info.value / info.portion).toFixed(
          2,
        )}`}</option>
        <option value="6">{`6 x R$ ${(info.value / info.portion).toFixed(
          2,
        )}`}</option>
        <option value="7">{`7 x R$ ${(info.value / info.portion).toFixed(
          2,
        )}`}</option>
        <option value="8">{`8 x R$ ${(info.value / info.portion).toFixed(
          2,
        )}`}</option>
        <option value="9">{`9 x R$ ${(info.value / info.portion).toFixed(
          2,
        )}`}</option>
        <option value="10">{`10 x R$ ${(info.value / info.portion).toFixed(
          2,
        )}`}</option>
        <option value="11">{`11 x R$ ${(info.value / info.portion).toFixed(
          2,
        )}`}</option>
        <option value="12">{`12 x R$ ${(info.value / info.portion).toFixed(
          2,
        )}`}</option>
      </select>

      <button type="submit">Registrar</button>
    </form>
  );
}
