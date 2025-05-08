// utils/animeCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./animeCard.css";

function AnimeCard({ id, name, image, episodes, minDigits }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Salvar nome, episódios e minDigits no sessionStorage
    sessionStorage.setItem("anime", JSON.stringify({ name, episodes, minDigits }));

    // Navegar para a página de episódios com o id do anime na URL, não o nome
    navigate(`/episodes`);
  };

  return (
    <div className="anime-card" onClick={handleClick}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}

export default AnimeCard;
