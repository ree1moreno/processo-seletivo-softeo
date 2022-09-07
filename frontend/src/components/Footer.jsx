import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-nav">
        <p className="footer-text">Desevolvido por Renato Moreno.</p>
        <a href="https://github.com/ree1moreno">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/reemoreno/">
          <AiFillLinkedin />
        </a>
      </div>
    </footer>
  );
}
