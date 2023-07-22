import { Link } from "react-router-dom"
import { useState } from "react"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/axios"

const olvidePassword = () => {
  const [email, setEmail] = useState('')
  const [alerta, setAlerta] = useState({})

  const handlerSubmit = async e =>{
        e.preventDefault()
        if(email === ''){
          setAlerta({msg:'El Mail es obligatotio', error:true})
          return
        }
        try {
          const { data } = await clienteAxios.post('/veterinarios/olvide-password', {email})
          setAlerta({msg: data.msg})
        } catch (error) {
          setAlerta({
            msg: error.response.data.msg,
            error:true
          })
        }
    
  }
  const { msg } = alerta
  return (
    <>
      
      <div>
          <h1 className="text-6xl text-indigo-600 font-bold ">Recupera tu acceso y no pierdas{" "}
              <span className="text-black">tus Pacientes</span>
          </h1>
      </div>
      <div>
        {msg && <Alerta 
          alerta={alerta}
        /> }
        <form onSubmit={handlerSubmit} className="bg-white md:shadow-md rounded-lg py-12 px-5 mb-5">

          
          <div className="mb-5">
              <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                Email
              </label>
              <input type="email" 
              id="email" 
              placeholder="Tu Email" 
              className="w-full border-2 p-2 mt-2 placerholder-gray-400 rounded-md" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              />
          </div>
          
          <input type="submit" value="Enviar Instrucciones" className="bg-indigo-600 hover:bg-indigo-700 curso-pointer  uppercase font-bold w-full md:w-56 rounded-md text-white p-2 transition-all hover:cursor-pointer" 
          />
          <nav className='lg:flex justify-between mt-6'>
              <Link className='block text-center text-zinc-800' to="/">Ya tienes una cuenta? Iniciar Sesion</Link>
              <Link className='block text-center text-zinc-800' to="/registrar">No tienes una cuenta? Registrate</Link>
            </nav>
        </form>
        
      </div>
    </>
  )
}

export default olvidePassword
