import useClima from "../hooks/useClima"
import Formulario from "./Formulario"
import Loading from "./Loading"
import Resultado from "./Resultado"

const AppClima = () => {

  const { resultado,cargando,noResultado } = useClima()

  return (
    <>
        <main className="dos-columnas">
            <Formulario />
            { 
              cargando ? <Loading /> :
              noResultado ? <p>{noResultado}</p>:
              resultado?.name ? <Resultado /> :
              <p>El clima se va a mostrar aquí</p>
            }
        </main>
    </>
  )
}

export default AppClima