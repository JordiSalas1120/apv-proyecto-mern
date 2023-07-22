

const Alerta = ({alerta}) => {

    
  return (
    <div className={`${alerta.error ? 'from-red-500 to-red-700' : 'bg-indigo-800'} bg-gradient-to-r uppercase text-center text-white font-bold p-4 rounded-lg my-8`}>
        {alerta.msg}
    </div>
  )
}

export default Alerta
