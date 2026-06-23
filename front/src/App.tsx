import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ListarLivros from './components/pages/livro/ListarLivro';
import CadastrarLivro from './components/pages/livro/CadastrarLivro';
import BuscarLivro from './components/pages/livro/BuscarLivro';
import LivrosDisponiveis from './components/pages/livro/LivrosDisponiveis';
import LivrosEmprestados from './components/pages/livro/LivrosEmprestados';
import LivrosMaisEmprestado from './components/pages/livro/LivroMaisEmprestado';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pages/livro/cadastrar">Cadastrar Livro</Link>
            </li>
            <li>
              <Link to="/pages/livro/buscar">Buscar Livro</Link>
            </li>
            <li>
              <Link to="/pages/livro/disponiveis">Disponíveis</Link>
            </li>
            <li>
              <Link to="/pages/livro/emprestados">Emprestados</Link>
            </li>
            <li>
              <Link to="/pages/livro/maisemprestado">qual mais emprestado?</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ListarLivros />} />
          <Route path="/pages/livro/cadastrar" element={<CadastrarLivro />} />
          <Route path="/pages/livro/buscar" element={<BuscarLivro />} />
          <Route path="/pages/livro/disponiveis" element={<LivrosDisponiveis />} />
          <Route path="/pages/livro/emprestados" element={<LivrosMaisEmprestado />} />
          <Route path="/pages/livro/maisemprestado" element={<LivrosMaisEmprestado />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
