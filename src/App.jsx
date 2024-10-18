import './App.css'
import { Cabecera } from './componentes/Cabecera/Cabecera'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Inicio } from './Routes/Inicio/Inicio'
import { Perfil } from './Routes/Perfil/Perfil'
function App() {
  return (
    <>
      <BrowserRouter>
      <Cabecera />
        <Routes>
          <Route path='/' Component={Inicio}/>
          <Route path='/perfil/:nombre' Component={Perfil}/>

        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
