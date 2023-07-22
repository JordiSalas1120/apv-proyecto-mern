import { Link } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
  
  const [email, setEmail] =  useState()
  const [password, setPassword] =  useState()
  
  return (
    <>
        
        <div>
            <h1 className="text-6xl text-indigo-600 font-bold ">Inicia Sesion y Administra tus 
              <span className="text-black"> Pacientes</span>
            </h1>
            
            
        </div>
        <div>
          <form className="bg-white md:shadow-md rounded-lg py-12 px-5 mb-5">

            
            <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                  Email
                </label>
                <input type="email" id="email" placeholder="Tu Email" className="w-full border-2 p-2 mt-2 placerholder-gray-400 rounded-md" 
                values={email}
                onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="block text-gray-700 uppercase font-bold">
                password
              </label>
              <input type="password" id="password" placeholder="Tu Password" className="w-full border-2 p-2 mt-2 placerholder-gray-400 rounded-md" 
              values={password}
              onChange={(e)=> setPassword(e.target.value)}/>
            </div>
            
            
            <input type="submit" value="iniciar sesion" className="bg-indigo-600 hover:bg-indigo-700 curso-pointer  uppercase font-bold w-full md:w-36 rounded-md text-white p-2 transition-all hover:cursor-pointer" 
            />
            <nav className='lg:flex sm:justify-between mt-6'>
              <Link className='block text-center text-zinc-800' to="/registrar">No tienes una cuenta? Registrate</Link>
              <Link className='block text-center text-zinc-800' to="/olvide-password">Olvide Password</Link>
            </nav>
          </form>
          
        </div>
    </>
  )
}

export default Login
