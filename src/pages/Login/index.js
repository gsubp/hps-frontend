import React from "react";
import "./styles.css";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import logoImage from "../../assets/logo.svg";

export default function login() {
  return (
    <div className="login-container">
      <section className="form">
        <form>
          <h1>Faça seu login</h1>
          <input placeholder="Sua ID" />
          <button type="submit" className="button">
            Entrar
          </button>
          <Link className="link" to="/register">
            Não tenho cadastro
            <FiArrowRight size={24} color="#66fcf1" />
          </Link>
        </form>
      </section>
      <img src={logoImage} alt="HPS Soluções" />
    </div>
  );
}
