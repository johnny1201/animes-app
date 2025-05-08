import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/video/:anime/:episodio', (req, res) => {
  const { anime, episodio } = req.params;

  const primeiraLetra = anime.trim().charAt(0).toUpperCase();
  const urlReal = `https://mangas.cloud/Animes/Letra-${primeiraLetra}/${anime}/${episodio}.mp4`;

  res.redirect(urlReal);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
