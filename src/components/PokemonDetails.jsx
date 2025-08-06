import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonDetails = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => setPokemon(res.data));
  }, [name]);

  if (!pokemon) return <p>Chargement...</p>;

  return (
    <div className="details">
      <h2>{pokemon.name.toUpperCase()}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p><strong>Types:</strong> {pokemon.types.map(t => t.type.name).join(', ')}</p>
      <p><strong>Poids:</strong> {pokemon.weight} kg</p>
      <p><strong>Taille:</strong> {pokemon.height / 10} m</p>
      <p><strong>Stats:</strong></p>
      <ul>
        {pokemon.stats.map(stat => (
          <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDetails;

