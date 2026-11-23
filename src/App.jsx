
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Cabecalho from './componentes/cabecalho/cabecalho'
import Principal from './componentes/principal/principal'
import CadastroPet from './paginas/cadastroPet/cadastroPet'
import ListaPets from './paginas/listaPet/listaPET'
import MenuInferior from './componentes/menuInferior/menuInferior'

function App() {
  return (
    <BrowserRouter>
       <div className='app'>
        <Cabecalho />
          <Routes>
          <Route path="/" element={<ListaPets />} />
          <Route path="/cadastro-pet" element={<CadastroPet />} />
          <Route path="/lista-pets" element={<ListaPets/>} />
          <Route path="/cadastro-pet/:id" element={<CadastroPet />} />
          </Routes>
        <MenuInferior/>
       </div>
    </BrowserRouter>
  )
}

export default App
