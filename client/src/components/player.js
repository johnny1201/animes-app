// player.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { formatEpisodeNumber } from "../utils/formatEpisode";
import "./player.css";

function Player() {
  const { anime, id } = useParams();
  const navigate = useNavigate();

  const animeName = decodeURIComponent(anime);
  const animeData = JSON.parse(sessionStorage.getItem("anime"));
  const totalEpisodes = animeData?.episodes || 0;
  const minDigits = animeData?.minDigits || 2;

  const episodeNumber = parseInt(id, 10); // Garantir que está como número
  const formattedId = formatEpisodeNumber(episodeNumber, minDigits); // Reformatar sempre que exibir

  const videoUrl = `https://animes-app-7sym.onrender.com/api/video/${anime}/${formattedId}`;

  const handleNext = () => {
    const next = episodeNumber + 1;
    if (next <= totalEpisodes) {
      const formatted = formatEpisodeNumber(next, minDigits);
      navigate(`/player/${encodeURIComponent(animeName)}/${formatted}`, { replace: true });
    }
  };

  const handlePrevious = () => {
    const prev = episodeNumber - 1;
    if (prev > 0) {
      const formatted = formatEpisodeNumber(prev, minDigits);
      navigate(`/player/${encodeURIComponent(animeName)}/${formatted}`, { replace: true });
    }
  };

  const handleBack = () => {
    navigate(`/episodes/${encodeURIComponent(anime)}`);
  };

  const isFirstEpisode = episodeNumber === 1;
  const isLastEpisode = episodeNumber === totalEpisodes;

  return (
    <div className="player-container" key={`${anime}-${formattedId}`}>
      <header className="player-header">
        <div className="header-buttons">
          <button onClick={handleBack} className="back-button left">
            <i className="fas fa-undo-alt"></i>
          </button>
          <button onClick={() => navigate("/home")} className="back-button right">
            <i className="fas fa-home"></i>
          </button>
        </div>
        <h2>{animeName} - Episódio {formattedId}</h2>
      </header>

      <div className="video-container">
        <video controls autoPlay>
          <source src={videoUrl} type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>
      </div>

      <div className="controls-container">
        <button onClick={handlePrevious} className="control-button" disabled={isFirstEpisode}>
          Anterior
        </button>
        <button onClick={handleNext} className="control-button" disabled={isLastEpisode}>
          Próximo
        </button>
      </div>
    </div>
  );
}

export default Player;
