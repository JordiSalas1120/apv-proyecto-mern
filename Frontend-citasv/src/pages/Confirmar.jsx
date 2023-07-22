import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import Alerta from "../components/Alerta"

import clienteAxios from "../config/axios"


const Confirmar = () => {
  const [cuentaConfirmada, setCuentaconfirmada] = useState(false)
  const [cargando, setCargando] =useState(true)
  const [alerta, setAlerta] = useState({})

  const params = useParams()
  
  const { id } = params;
  
  useEffect(()=>{
      const confirmarCuenta = async()=>{
        
        try {
            const url = `/veterinarios/confirmar/${id}`
            const {data} = await clienteAxios(url)
            console.log(data);
            setCuentaconfirmada(true)
            setAlerta({
              msg:data.msg
            })
            
        } catch (error) {
          console.log(error);
          setAlerta({
            msg: error.response.data.msg,
            error:true
          })
           
        }
        setCargando(false)
      } 
      
      confirmarCuenta()
  }, [])
 
  return (
    
    <>
      <div>
          <h1 className="text-6xl text-indigo-700 font-bold ">Confirma y Administra tus{" "}
              <span className="text-black">tus Pacientes</span>
          </h1>
      </div>
      <div className="bg-white md:shadow-md rounded-lg py-12 px-5 mb-5">
          {
            !cargando && <Alerta
              alerta={alerta}
            />
          }
          {cuentaConfirmada &&
           <Link className='block text-center text-zinc-800' to="/">Inicia Sesion</Link>}
      </div>
    </>
  )
}

export default Confirmar
