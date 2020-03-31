import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import api from "../../services/api";
import logoImage from "../../assets/logo.svg";
import "./styles.css";

export default function Profile() {
  const [pedidos, setPedidos] = useState([]);
  const history = useHistory();
  const empId = localStorage.getItem("empId");
  const empNome = localStorage.getItem("empNome");

  useEffect(() => {
    api
      .get("profile", {
        Authorization: empId
      })
      .then(response => {
        setPedidos(response.data);
      });
  }, [empId]);

  async function handleDeletePedido(id) {
    try {
      await api.delete(`pedidos/${id}`, {
        headers: {
          Authorization: empId
        }
      });
      setPedidos(pedidos.filter(pedido => pedido.id !== id));
    } catch (err) {
      alert("Erro ao deletar pedido, tente novamente.");
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImage} alt="HPS Soluções" />
        <span>Bem vinda, {empNome}</span>
        <Link className="button" to="/pedidos/new">
          Novo pedido
        </Link>
        <button onClick={handleLogout} type="button" className="button">
          <FiPower size={18} color="#66fcf1" />
        </button>
      </header>
      <h1>Pedidos Cadastrados</h1>
      <ul>
        {pedidos.map(pedido => (
          <li key={pedido.id}>
            <strong>Pedido:</strong>
            <p>{pedido.titulo}</p>
            <strong>Descrição:</strong>
            <p>{pedido.descricao}</p>
            <strong>Valor:</strong>
            <p>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(pedido.valor)}
            </p>
            <button onClick={handleDeletePedido}>
              <FiTrash2 size={20} color="#66fcf1" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
