import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateItem } from "../services/api";

export default function EditForm({ itemInfo }) {
  const [loading, setLoading] = useState(true);
  const [newInfo, setNewInfo] = useState({
    name: "",
    treatment: "",
    date: "",
    value: "",
    portion: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (itemInfo) {
      setLoading(false);
      setNewInfo({
        name: itemInfo.name,
        treatment: itemInfo.treatment,
        date: itemInfo.date,
        value: itemInfo.value,
        portion: itemInfo.portion,
      });
    }
  }, [itemInfo]);

  const handleChange = (event) => {
    const { target } = event;
    setNewInfo({
      ...newInfo,
      [target.name]: target.value,
    });
  };

  const validateItem = (item) => {
    if (
      !item.name ||
      !item.treatment ||
      !item.date ||
      !item.value ||
      !item.portion
    ) {
      return true;
    }
    return false;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateItem(itemInfo.id, newInfo);
    navigate("/");
  };

  return (
    <div>
      {loading ? (
        <h1>carregando</h1>
      ) : (
        <form className="form-container" onSubmit={handleSubmit}>
          <label htmlFor="name">Paciente</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={newInfo.name}
            onChange={handleChange}
          />
          <label htmlFor="treatment">Tratamento</label>
          <input
            type="text"
            id="treatment"
            name="treatment"
            required
            value={newInfo.treatment}
            onChange={handleChange}
          />
          <label htmlFor="date">Data do atendimento</label>
          <input
            type="date"
            id="date"
            name="date"
            required
            value={newInfo.date}
            onChange={handleChange}
          />
          <label htmlFor="value">Valor (R$)</label>
          <input
            type="number"
            id="value"
            name="value"
            required
            value={newInfo.value}
            onChange={handleChange}
          />
          <label htmlFor="portion">Parcelas</label>
          <select
            name="portion"
            id="portion"
            required
            onChange={handleChange}
            value={newInfo.portion}
          >
            <option value="1">{`1 x R$ ${(
              newInfo.value / newInfo.portion
            ).toFixed(2)}`}</option>
            <option value="2">{`2 x R$ ${(
              newInfo.value / newInfo.portion
            ).toFixed(2)}`}</option>
            <option value="3">{`3 x R$ ${(
              newInfo.value / newInfo.portion
            ).toFixed(2)}`}</option>
            <option value="4">{`4 x R$ ${(
              newInfo.value / newInfo.portion
            ).toFixed(2)}`}</option>
            <option value="5">{`5 x R$ ${(
              newInfo.value / newInfo.portion
            ).toFixed(2)}`}</option>
            <option value="6">{`6 x R$ ${(
              newInfo.value / newInfo.portion
            ).toFixed(2)}`}</option>
            <option value="7">{`7 x R$ ${(
              newInfo.value / newInfo.portion
            ).toFixed(2)}`}</option>
            <option value="8">{`8 x R$ ${(
              newInfo.value / newInfo.portion
            ).toFixed(2)}`}</option>
            <option value="9">{`9 x R$ ${(
              newInfo.value / newInfo.portion
            ).toFixed(2)}`}</option>
            <option value="10">{`10 x R$ ${(
              newInfo.value / newInfo.portion
            ).toFixed(2)}`}</option>
            <option value="11">{`11 x R$ ${(
              newInfo.value / newInfo.portion
            ).toFixed(2)}`}</option>
            <option value="12">{`12 x R$ ${(
              newInfo.value / newInfo.portion
            ).toFixed(2)}`}</option>
          </select>

          <button type="submit" disabled={validateItem(newInfo)}>
            Atualizar
          </button>
        </form>
      )}
    </div>
  );
}
