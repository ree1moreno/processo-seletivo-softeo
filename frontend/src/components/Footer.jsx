import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-nav">
        <p className="footer-text">Desevolvido por Renato Moreno.</p>
        <a
          href="https://github.com/ree1moreno"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/reemoreno/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </div>
    </footer>
  );
}
