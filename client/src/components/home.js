import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import AnimeCard from "../utils/animeCard";

function Home() {
  const navigate = useNavigate();
  const username = sessionStorage.getItem("username");

  useEffect(() => {
    if (!username) {
      navigate("/"); // Redireciona para login se não estiver logado
    }
  }, [username, navigate]);

  const animes = [
    {
      id: 1,
      name: "Naruto Shippuden",
      image: "https://cdn.myanimelist.net/images/anime/5/17407.jpg",
      episodes: 500,
    },
    {
      id: 2,
      name: "Naruto",
      image: "https://cdn.myanimelist.net/images/anime/13/17405.jpg",
      episodes: 220,
    },
    {
      id: 3,
      name: "OnePiece",
      image: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
      episodes: 1106,
    },
  ];

  return (
    <div className="home-container">
      <header className="home-header">
        <h2>Lista de animes</h2>
        <div className="username">
          {username ? `Bem-vindo, ${username}` : "Usuário não encontrado"}
        </div>
      </header>
      <main className="home-main">
        <p>O melhor lugar para quem é fã de animes!</p>

        <div className="anime-list">
          {animes.map((anime) => (
            <AnimeCard key={anime.id} {...anime} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
