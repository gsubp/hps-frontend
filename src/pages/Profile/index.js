import React from "react";
import "./styles.css";
import logoImage from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImage} alt="HPS Soluções" />
        <span>Bem vinda, Empresa</span>
        <Link className="button" to="/pedidos/new">
          Novo pedido
        </Link>
        <button type="button" className="button">
          <FiPower size={18} color="#66fcf1" />
        </button>
      </header>
      <h1>Pedidos Cadastrados</h1>
      <ul>
        <li>
          <strong>Pedido:</strong>
          <p>Criação de Site</p>
          <strong>Descrição:</strong>
          <p>Descrição teste</p>
          <strong>Valor:</strong>
          <p>Não definido</p>
          <button>
            <FiTrash2 size={20} color="#66fcf1" />
          </button>
        </li>
      </ul>
    </div>
  );
}
