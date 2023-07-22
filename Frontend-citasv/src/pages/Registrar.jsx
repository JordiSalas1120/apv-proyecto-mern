import { Link } from "react-router-dom"
import { useState } from 'react'
import Alerta from "../components/Alerta"

import clienteAxios from "../config/axios"



const Registrar = () => {

  const [nombre, setNombre] =  useState('')
  const [email, setEmail] =  useState('')
  const [password, setPassword] =  useState('')
  const [repetirPassword, setRepetirpassword] =  useState('')
  const [alerta, setAlerta] = useState({})


  const handleSubmit = async (e)=>{
    e.preventDefault();
    if([nombre, email, password, repetirPassword].includes('')){
      setAlerta({msg:"No pueden ir campos vacios", error:true});
      return
    }
    if(password!==repetirPassword){
      setAlerta({msg:"los password deben de conicidir", error:true});
      return
    }
    if(password.length < 6){
      setAlerta({msg:"password muy corto", error:true});
      return
    }
    setAlerta({
      msg:"datos Enviados Correctamente, revisa tu email."
    })
    setNombre('')
    setEmail('')
    setPassword('')
    setRepetirpassword('')
    //conectar con la API
    try {
      
     await clienteAxios.post('/veterinarios', {nombre, email,password})
      
    } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error:true
        })
        console.log(error.response.data);
    }
  }
  const { msg } = alerta;
  return (
    <>
      <div>
            <h1 className="text-6xl text-indigo-600 font-bold ">Crea una cuenta y Administra{""}
              <span className="text-black">tus Pacientes</span>
            </h1>
            
            
      </div>
      <div>
        {msg && <Alerta 
          alerta={alerta}
        /> }
        
        <form onSubmit={handleSubmit} className="bg-white md:shadow-md rounded-lg py-12 px-5 mb-5">

          <div className="mb-5">
              <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">
                Nombre
              </label>
              <input type="text" id="nombre" placeholder="Tu Nombre" className="w-full border-2 p-2 mt-2 placerholder-gray-400 rounded-md" 
              value={nombre}
              onChange={(e)=>setNombre(e.target.value)}/>
          </div>
          <div className="mb-5">
              <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                Email
              </label>
              <input type="email" id="email" placeholder="Tu Email" className="w-full border-2 p-2 mt-2 placerholder-gray-400 rounded-md" 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block text-gray-700 uppercase font-bold">
              password
            </label>
            <input type="password" id="password" placeholder="Tu Password" className="w-full border-2 p-2 mt-2 placerholder-gray-400 rounded-md" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div className="mb-5">
            <label htmlFor="repetirpassword" className="block text-gray-700 uppercase font-bold">
              Repite tu Password
            </label>
            <input type="password" id="repetirpassword" placeholder="Repite tu Password" className="w-full border-2 p-2 mt-2 placerholder-gray-400 rounded-md" 
            value={repetirPassword}
            onChange={(e)=>setRepetirpassword(e.target.value)}/>
          </div>
          
          <input type="submit" value="Registrarse" className="bg-indigo-600 hover:bg-indigo-700 curso-pointer  uppercase font-bold w-full md:w-36 rounded-md text-white p-2 transition-all hover:cursor-pointer" 
          />
          <nav className='lg:flex sm:justify-between mt-6'>
            <Link className='block text-center text-zinc-800' to="/">Ya tienes una cuenta? Inicia Sesion</Link>
            <Link className='block text-center text-zinc-800' to="/olvide-password">Olvide Password</Link>
          </nav>
        </form>
        
      </div>
    </>
  )
}

export default Registrar
