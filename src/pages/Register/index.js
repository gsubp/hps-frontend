import React from "react";
import "./styles.css";
import logoImage from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImage} alt="HPS Soluções" />
          <h1>Cadastro</h1>
          <p>Faça seu Cadastro!</p>
          <Link className="link" to="/">
            Voltar para Login
          </Link>
        </section>
        <form>
          <input placeholder="Nome da Empresa" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="Whatsapp" />
          <div className="input-group">
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
