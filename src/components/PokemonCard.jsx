import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>{pokemon.name.toUpperCase()}</h3>
      <p>
        <FontAwesomeIcon icon="bolt" /> Type: {pokemon.types.map(t => t.type.name).join(', ')}
      </p>
    </div>
  );
};

export default PokemonCard;
