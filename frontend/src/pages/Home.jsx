import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import List from "../components/List";
import "./styles/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <main className="main-container">
        <Form />
        <List />
      </main>
      <Footer />
    </div>
  );
}
