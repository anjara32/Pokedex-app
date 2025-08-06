import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import PokemonDetails from './components/PokemonDetails';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <ThemeToggle />
        <h1 className="big-title">Pokédex</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:name" element={<PokemonDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const toggleDarkMode = () => {
  document.body.classList.toggle('dark');
};


export default App;

