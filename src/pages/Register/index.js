import React from "react";
import "./styles.css";
import logoImage from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImage} alt="HPS Soluções" />
          <h1>Cadastro</h1>
          <p>Faça seu Cadastro!</p>
          <Link className="link" to="/">
            <FiArrowLeft size={24} color="#66fcf1" />
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
