
import { Link } from "react-router-dom"



const RestablecerPass = () => {
  
  return (
    <>
      <div>
          <h1 className="text-6xl text-indigo-600 font-bold ">Reestablece tu{" "}
              <span className="text-black">password</span>
          </h1>
      </div>
      <div>
        
        <form className="bg-white md:shadow-md rounded-lg py-12 px-5 mb-5">

          
          <div className="mb-5">
              <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                Email
              </label>
              <input type="email" 
              id="email"
              placeholder="Tu Email" 
              className="w-full border-2 p-2 mt-2 placerholder-gray-400 rounded-md" 
              
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

export default RestablecerPass
