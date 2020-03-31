import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import api from "../../services/api";

import logoImage from "../../assets/logo.svg";
import "./styles.css";

export default function Login() {
  const [id, setId] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("sessions", { id });

      localStorage.setItem("empId", id);
      localStorage.setItem("empNome", response.data.nome);

      history.push("/profile");
    } catch (err) {
      alert("Falha no Login, tente novamente.");
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>
          <input
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
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
