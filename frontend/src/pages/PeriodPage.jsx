import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./styles/PeriodPage.css";

export default function PeriodPage() {
  return (
    <div className="period-container">
      <Header />
      <div className="main-container">
        <p>PeriodPage</p>
        <Link to="/" className="back-link">
          Voltar
        </Link>
      </div>
      <Footer />
    </div>
  );
}
