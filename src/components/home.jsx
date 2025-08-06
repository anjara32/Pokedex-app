import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PokemonCard from './PokemonCard';

const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getPokemons = async () => {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
      const results = res.data.results;

      const allData = await Promise.all(
        results.map(p => axios.get(p.url).then(res => res.data))
      );

      setPokemonList(allData);
    };

    getPokemons();
  }, []);

  return (
    <div className="home">
      <input
        type="text"
        placeholder="🔍 Rechercher un Pokémon..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="pokedex">
        {pokemonList
          .filter(p => p.name.includes(search.toLowerCase()))
          .map(pokemon => (
            <Link to={`/pokemon/${pokemon.name}`} key={pokemon.id}>
              <PokemonCard pokemon={pokemon} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Home;
