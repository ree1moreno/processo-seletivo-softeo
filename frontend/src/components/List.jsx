import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./styles/List.css";

export default function List(props) {
  const formatDate = (date) => {
    const objDate = new Date(date).toLocaleDateString("pt-BR", {
      timeZone: "UTC",
    });
    return objDate;
  };

  const sumValues = () => {
    const values = [];
    props.list.forEach((e) => values.push(e.value));
    const sum = values.reduce(
      (prev, current) => Number(prev) + Number(current),
      0,
    );
    return sum;
  };

  return (
    <div className="list-container">
      <h2>Lista de tratamentos</h2>

      {props.list == null ? (
        <p className="list-message">Ainda não tem tratamentos registrados</p>
      ) : (
        <table className="table-list">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tratamento</th>
              <th>Data</th>
              <th>Valor</th>
              <th>Parcelas</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {props.list.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.treatment}</td>
                <td>{formatDate(item.date)}</td>
                <td>{`R$ ${item.value}`}</td>
                <td>{`${item.portion} parcela(s)`}</td>
                <td className="edit-button">
                  <Link to="#">
                    <BiEdit />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {props.list !== null && (
        <div className="values-container">
          <p>
            Faturamento total: <span>R$ {sumValues()}</span>
          </p>
        </div>
      )}
    </div>
  );
}
