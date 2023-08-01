import useClima from "../hooks/useClima"
import Formulario from "./Formulario"
import Loading from "./Loading"
import Resultado from "./Resultado"

const AppClima = () => {

  const { resultado,cargando } = useClima()

  return (
    <>
        <main className="dos-columnas">
            <Formulario />
            { 
              cargando ? <Loading /> : 
              resultado?.name && <Resultado />
            }
        </main>
    </>
  )
}

export default AppClima