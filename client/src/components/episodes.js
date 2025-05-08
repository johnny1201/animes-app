import React from "react";
import { useNavigate } from "react-router-dom";
import "./episodes.css";

function Episodes() {
  const navigate = useNavigate();
  const animeData = JSON.parse(sessionStorage.getItem("anime"));
  const { name, episodes } = animeData;
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
        {episodeList.map((episode) => (
          <div
            className="episode-card"
            key={episode}
            onClick={() =>
              navigate(
                `/player/${name}/${episode < 10 ? `0${episode}` : episode}`
              )
            }
          >
            <h3>Episódio {episode < 10 ? `0${episode}` : episode}</h3>
            <p>Assistir</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Episodes;
