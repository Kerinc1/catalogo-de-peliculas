import React, {useState} from 'react';
import "./App.css";
import MovieList from './components/MovieList';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [movies] = useState([
    {
      id: 1,
      title: "El Origen",
      genre: "Ciencia Ficción",
      image: "Origen.jpg",
    },
    {
      id: 2,
      title: "Titanic",
      genre: "Romance",
      image: "Titanic.jpeg",
    },
    {
      id: 3,
      title: "The Dark Knight",
      genre: "Action",
      image: "Batman.jpg",
    },
    {
      id: 4,
      title: "Wicked",
      genre: "Action",
      image: "wicked.jpeg",
    },
    {
      id: 5,
      title: "Robot Salvaje",
      genre: "Action",
      image: "OIP.jpeg",
    },
    {
      id: 6,
      title: "La sustancia",
      genre: "Action",
      image: "sustancia.jpeg",
    },
    {
      id: 7,
      title: "El Gladiador II",
      genre: "Action",
      image: "glariador.jpg",
    },
    {
      id: 8,
      title: "Venom",
      genre: "Action",
      image: "venom.jpg",
    },
    {
      id: 9,
      title: "La Union",
      genre: "Action",
      image: "laUnion.jpeg",
    },
  ]);
  return(
    <div className="app-container">
      <h1 className="app-title"> Movie List</h1>
      <MovieList movies={movies} />
      <Footer/>
    </div>

  );
};

export default App;