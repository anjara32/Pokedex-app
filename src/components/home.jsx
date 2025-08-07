import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PokemonCard from './PokemonCard';

const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        const results = res.data.results;

        const allData = await Promise.all(
          results.map(p => axios.get(p.url).then(res => res.data))
        );

        setPokemonList(allData);
      } catch (err) {
        console.error("Erreur lors du chargement des Pokémon :", err);
        setError("Une erreur est survenue lors du chargement des Pokémon.");
      } finally {
        setLoading(false);
      }
    };

    getPokemons();
  }, []);

  const filteredPokemons = pokemonList.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home">
      <input
        type="text"
        placeholder="Rechercher un Pokémon..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p>Chargement des Pokémon...</p>}
      {error && <p className="error">{error}</p>}

      <div className="pokedex">
        {filteredPokemons.map(pokemon => (
          <Link to={`/pokemon/${pokemon.name}`} key={pokemon.id}>
            <PokemonCard pokemon={pokemon} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
