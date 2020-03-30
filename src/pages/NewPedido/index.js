import React from "react";
import "./styles.css";
import logoImage from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function NewPedido() {
  return (
    <div className="new-pedido-container">
      <div className="content">
        <section>
          <img src={logoImage} alt="HPS Soluções" />
          <h1>Novo pedido</h1>
          <p>Cadastre aqui um novo pedido.</p>
          <Link className="link" to="/profile">
            <FiArrowLeft size={24} color="#66fcf1" />
            Voltar
          </Link>
        </section>
        <form>
          <input placeholder="Titulo do Pedido" />
          <input placeholder="Descrição do pedido" />
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
