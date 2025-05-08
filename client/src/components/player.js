// player.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./player.css"; // Importando o CSS

function Player() {
  const { anime, id } = useParams();
  const navigate = useNavigate();

  const animeName = decodeURIComponent(anime);
  const firstLetter = animeName.trim().charAt(0).toUpperCase();

  // Obter o total de episódios do sessionStorage
  const animeData = JSON.parse(sessionStorage.getItem("anime"));
  const totalEpisodes = animeData ? animeData.episodes : 0; // Total de episódios ou 0 caso não exista

  const videoUrl = `https://mangas.cloud/Animes/Letra-${firstLetter}/${animeName}/${id}.mp4`;

  const handleNext = () => {
    let nextEpisode = parseInt(id) + 1;
    nextEpisode = nextEpisode < 10 ? `0${nextEpisode}` : nextEpisode;
    const encodedAnimeName = encodeURIComponent(animeName);
    navigate(`/player/${encodedAnimeName}/${nextEpisode}`, { replace: true });
  };

  const handlePrevious = () => {
    let prevEpisode = parseInt(id) - 1;
    if (prevEpisode > 0) {
      prevEpisode = prevEpisode < 10 ? `0${prevEpisode}` : prevEpisode;
      const encodedAnimeName = encodeURIComponent(animeName);
      navigate(`/player/${encodedAnimeName}/${prevEpisode}`, { replace: true });
    }
  };

  const handleBack = () => {
    // Voltar para a página de episódios
    navigate(`/episodes/${encodeURIComponent(anime)}`);
  };

  const isFirstEpisode = parseInt(id) === 1;
  const isLastEpisode = parseInt(id) === totalEpisodes;

  return (
    <div className="player-container" key={`${anime}-${id}`}>
      <header className="player-header">
        <div className="header-buttons">
          <button onClick={() => navigate("/episodes")} className="back-button left">
            <i className="fas fa-undo-alt"></i>
          </button>
          <button onClick={() => navigate("/home")} className="back-button right">
            <i className="fas fa-home"></i>
          </button>
        </div>
        <h2>{animeName} - Episódio {id}</h2>
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
