// utils/animeCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./animeCard.css";

function AnimeCard({ name, image, episodes }) {
  const navigate = useNavigate();

  // Função para formatar o número do episódio
  const formatEpisodeNumber = (episodeNumber) => {
    return String(episodeNumber).padStart(2, '0');
  };

  const handleClick = () => {
    // Salvar nome e número de episódios no sessionStorage
    sessionStorage.setItem("anime", JSON.stringify({ name, episodes }));

    // Navegar para a página de episódios
    navigate(`/episodes/`);
  };

  return (
    <div className="anime-card" onClick={handleClick}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}

export default AnimeCard;
