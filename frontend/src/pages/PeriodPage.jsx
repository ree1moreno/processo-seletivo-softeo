import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MyContext from "../context/MyContext";
import "./styles/PeriodPage.css";
import {
  filterListByMonth,
  formatCurrentMonth,
  formatDate,
  getCurrentMonth,
} from "../services/dates";
import PeriodList from "../components/PeriodList";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function PeriodPage() {
  const { list } = useContext(MyContext);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {}, []);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  const getPrevMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    setCurrentMonth(
      `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`,
    );
  };

  const getNextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    console.log(currentDate.getFullYear());
    setCurrentMonth(
      `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`,
    );
  };

  return (
    <div className="period-container">
      <Header />
      <main className="main-container">
        <div className="current-month-container">
          <AiOutlineArrowLeft
            className="previous-button"
            onClick={getPrevMonth}
          />
          <h3 className="month-title">{formatCurrentMonth(currentMonth)}</h3>
          <AiOutlineArrowRight className="next-button" onClick={getNextMonth} />
        </div>
        <PeriodList currentMonth={currentMonth} filteredList={filteredList} />
        <Link to="/" className="back-link">
          Voltar
        </Link>
      </main>
      <Footer />
    </div>
  );
}
