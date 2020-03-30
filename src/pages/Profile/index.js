import React from "react";
import "./styles.css";
import logoImage from "../../assets/logo.png";
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
        <button type="button">
          <FiPower size={18} color="yellowgreen" />
        </button>
      </header>
      <h1>Pedidos Cadastrados</h1>
      <ul>
        <li>
          <strong>Pedido:</strong>
          <p>Criação de Site</p>
          <strong>Valor:</strong>
          <p>Não definido</p>
          <strong>Descrição:</strong>
          <p>Descrição teste</p>
          <button>
            <FiTrash2 size={20} />
          </button>
        </li>
        <li>
          <strong>Pedido:</strong>
          <p>Criação de Site</p>
          <strong>Valor:</strong>
          <p>Não definido</p>
          <strong>Descrição:</strong>
          <p>Descrição teste</p>
          <button>
            <FiTrash2 size={20} />
          </button>
        </li>
        <li>
          <strong>Pedido:</strong>
          <p>Criação de Site</p>
          <strong>Valor:</strong>
          <p>Não definido</p>
          <strong>Descrição:</strong>
          <p>Descrição teste</p>
          <button>
            <FiTrash2 size={20} />
          </button>
        </li>
        <li>
          <strong>Pedido:</strong>
          <p>Criação de Site</p>
          <strong>Valor:</strong>
          <p>Não definido</p>
          <strong>Descrição:</strong>
          <p>Descrição teste</p>
          <button>
            <FiTrash2 size={20} />
          </button>
        </li>
      </ul>
    </div>
  );
}
