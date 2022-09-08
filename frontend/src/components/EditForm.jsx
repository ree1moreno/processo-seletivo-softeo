import { useEffect, useState } from "react";

export default function EditForm({ itemInfo }) {
  const [loading, setLoading] = useState(true);
  const [newInfo, setNewInfo] = useState({
    name: "",
    treatment: "",
    date: "",
    value: "",
    portion: "",
  });

  useEffect(() => {
    if (itemInfo) {
      setLoading(false);
      setNewInfo({
        name: itemInfo.name,
        treatment: itemInfo.treatment,
        date: itemInfo.date,
        value: itemInfo.value,
        portion: itemInfo.value,
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

  return (
    <div>
      {loading ? (
        <h1>carregando</h1>
      ) : (
        <form className="form-container">
          <label htmlFor="name">Paciente</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={itemInfo.name}
            onChange={handleChange}
          />
          <label htmlFor="treatment">Tratamento</label>
          <input
            type="text"
            id="treatment"
            name="treatment"
            required
            value={itemInfo.treatment}
            onChange={handleChange}
          />
          <label htmlFor="date">Data do atendimento</label>
          <input
            type="date"
            id="date"
            name="date"
            required
            value={itemInfo.date}
            onChange={handleChange}
          />
          <label htmlFor="value">Valor (R$)</label>
          <input
            type="number"
            id="value"
            name="value"
            required
            value={itemInfo.value}
            onChange={handleChange}
          />
          <label htmlFor="portion">Parcelas</label>
          <select
            name="portion"
            id="portion"
            required
            onChange={handleChange}
            value={itemInfo.portion}
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

          <button type="submit">Atualizar</button>
        </form>
      )}
    </div>
  );
}
