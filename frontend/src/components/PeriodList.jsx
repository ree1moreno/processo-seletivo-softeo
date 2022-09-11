import { formatDate } from "../services/dates";

export default function PeriodfilteredList(props) {
  return (
    <div>
      {!props.filteredList.length ? (
        <p>Não existe registro nesse mês</p>
      ) : (
        <div className="list-container">
          <table className="table-list">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Tratamento</th>
                <th>Data</th>
                <th>Valor</th>
                <th>Parcelas</th>
              </tr>
            </thead>
            <tbody>
              {props.filteredList.map((item, i) => (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.treatment}</td>
                  <td>{formatDate(item.date)}</td>
                  <td>{`R$ ${item.value}`}</td>
                  <td>{`${item.portion} de ${(item.value / item.portion)
                    .toFixed(2)
                    .replace(".", ",")}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
