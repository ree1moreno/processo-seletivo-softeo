import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import List from "../components/List";
import "./styles/Home.css";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <Header />
      <main className="main-container">
        <Form />
        <List />
        <button className="button-period" onClick={() => navigate("/period")}>
          Ver faturamento por período
        </button>
      </main>
      <Footer />
    </div>
  );
}
