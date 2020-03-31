import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";
import logoImage from "../../assets/logo.svg";
import "./styles.css";

export default function NewPedido() {
  const { titulo, setTitulo } = useState("");
  const { descricao, setDescricao } = useState("");
  const { valor, setValor } = useState("");
  const history = useHistory();
  const empId = localStorage.getItem("empId");

  async function handleNewPedido(e) {
    e.preventDefault();

    const data = { titulo, descricao, valor };
    try {
      await api.post("pedidos", data, {
        headers: {
          Authorization: empId
        }
      });
      history.push("/profile");
    } catch (err) {
      alert("Erro ao cadastrar novo pedido, tente novamente.");
    }
  }

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
        <form onSubmit={handleNewPedido}>
          <input
            placeholder="Titulo do Pedido"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
          />
          <input
            placeholder="Descrição do pedido"
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
          />
          <input
            placeholder="Valor em reais"
            value={valor}
            onChange={e => setValor(e.target.value)}
          />
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
