import React from "react";
import { useNavigate } from "react-router-dom";
import { formatEpisodeNumber } from "../utils/formatEpisode";
import "./episodes.css";

function Episodes() {
  const navigate = useNavigate();
  const animeData = JSON.parse(sessionStorage.getItem("anime"));

  if (!animeData) {
    return <div>Erro: Dados do anime não encontrados. Por favor, selecione um anime.</div>;
  }

  const { name, episodes, minDigits } = animeData;
  const episodeList = Array.from({ length: episodes }, (_, i) => i + 1);

  return (
    <div className="episodes-container">
      <button onClick={() => navigate("/home")} className="back-button left">
        <i className="fas fa-undo-alt"></i>
      </button>
      <button onClick={() => navigate("/home")} className="back-button right">
        <i className="fas fa-home"></i>
      </button>

      <header className="episodes-header">
        <h2>{name} - Episódios</h2>
      </header>

      <div className="episode-list">
        {episodeList.map((episode) => {
          const formattedEpisode = formatEpisodeNumber(episode, minDigits);
          return (
            <div
              className="episode-card"
              key={episode}
              onClick={() =>
                navigate(`/player/${name}/${formattedEpisode}`)
              }
            >
              <h3>Episódio {formattedEpisode}</h3>
              <p>Assistir</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Episodes;
