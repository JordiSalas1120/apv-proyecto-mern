
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthLayout from "./layout/AuthLayout"
import Login from "./pages/Login"


import OlvidePassword from "./pages/OlvidePassoword"
import Registrar from "./pages/Registrar"
import Confirmar from "./pages/confirmar"
import RestablecerPass from "./pages/RestablecerPass"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout/>}>
          <Route index element={<Login/>}/>
          <Route path="/registrar" element={<Registrar/>}/>
          <Route path="/olvide-password" element={<OlvidePassword/>}/>
          <Route path="/olvide-password/:token" element={<RestablecerPass/>}/>
          <Route path="/confirmar/:id" element={<Confirmar/>}/>

        </Route>
        <Route path="/admin" element={<AuthLayout/>}>
          <Route index element={<Login/>}/>
          <Route  element={<Registrar/>}/>
          <Route  element={<Confirmar/>}/>
          <Route  element={<OlvidePassword/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
