export const formatDate = (date) => {
  const objDate = new Date(date).toLocaleDateString("pt-BR", {
    timeZone: "UTC",
  });
  return objDate;
};

export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterListByMonth = (dateList, date) => {
  let filteredList = [];
  let [year, month] = date.split("-");

  for (let i in dateList) {
    let itemYear =
      dateList[i].date[0] +
      dateList[i].date[1] +
      dateList[i].date[2] +
      dateList[i].date[3];
    let itemMonth =
      Number(dateList[i].date[5] + dateList[i].date[6]) < 10
        ? dateList[i].date[6]
        : dateList[i].date[5] + dateList[i].date[6];

    if (itemYear === year && itemMonth === month) {
      filteredList.push(dateList[i]);
    }
  }

  return filteredList;
};

export const formatCurrentMonth = (date) => {
  let months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const [year, month] = date.split("-");

  return `${months[Number(month) - 1]} de ${year}`;
};
