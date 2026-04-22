import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home       from './pages/Home';
import Recipes    from './pages/Recipes';
import Register   from './pages/Register';
import AddRecipe  from './pages/AddRecipe';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/recipes"    element={<Recipes />} />
        <Route path="/register"   element={<Register />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
      </Routes>
    </BrowserRouter>
  );
}
