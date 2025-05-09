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
      minDigits: 2,
    },
    {
      id: 2,
      name: "Naruto",
      image: "https://cdn.myanimelist.net/images/anime/13/17405.jpg",
      episodes: 220,
      minDigits: 2,
    },
    {
      id: 3,
      name: "OnePiece",
      image: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
      episodes: 1106,
      minDigits: 2,
    },
    {
      id: 4,
      name: "One Piece Dublado",
      image:  "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
      episodes: 628,
      minDigits: 3,
    },
    {
      id: 5,
      name: "Jujutsu Kaisen",
      image: "https://animesonline.cloud/wp-content/uploads/2023/12/coMNNwjHY4BZTqMIsklanMf2Wp7-200x300.jpg",
      episodes: 24,
      minDigits: 2,
    },
    {
      id: 6,
      name: "Dragon Ball Z",
      image: "https://br.web.img3.acsta.net/c_310_420/pictures/16/03/01/16/59/300795.jpg",
      episodes: 291,
      minDigits: 2,
    },
    {
      id: 7,
      name: "Dragon Ball GT",
      image: "https://m.media-amazon.com/images/M/MV5BMWQyMzQwNzQtZTgxYy00OGY0LTg0MmItZjNkNTk3NjgyYmJjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      episodes: 64,
      mindigits: 2,
    },
    {
      id: 8,
      name: "Yu Yu Hakusho",
      image: "https://m.media-amazon.com/images/I/71-jxfP-nBL.jpg",
      episodes: 112,
      minDigits: 2,
    },
    {
      id: 9,
      name: "Shingeki no Kyojin" ,
      image: "https://cinema10.com.br/upload/series/series_2612_attack.jpg",
      episodes: 25,
      minDigits: 2,
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
