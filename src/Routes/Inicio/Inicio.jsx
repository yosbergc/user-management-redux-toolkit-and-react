import './inicio.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { agregarUsuario } from '../../reducer/reducerUsuario'
import { Link } from 'react-router-dom'
function Inicio() {
    const dispatch = useDispatch()
    const usuarios = useSelector(estado => estado.usuarios)
    function manejarRegistro(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const nombre = formData.get('nombre')
        const edad = formData.get('edad')
        const correo = formData.get('correo')
        const comida = formData.get('comida')
        const musica = formData.get('musica')

        dispatch(agregarUsuario({
            nombre,
            edad,
            correo,
            comida,
            musica
        }))
    }
    return (
        <>
            <h1>Pagina de inicio</h1>

        <form onSubmit={manejarRegistro}>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre"/>
            <label htmlFor="edad">Edad</label>
            <input type="number" />
            <label htmlFor="correo">Correo</label>
            <input type="text" name="correo" id="correo"/>
            <label htmlFor="comida">Comida favorita</label>
            <input type="text" name="comida" id="comida"/>
            <label htmlFor="musica">Musica favorita</label>
            <input type="text" id="musica" name="musica" />
            <button>Registrarme</button>
        </form>

        {
            usuarios.length > 0 && usuarios.map(usuario => {
                return <Link key={usuario.nombre} to={`/perfil/${usuario.nombre}`}>
                    <section >
                    <h3>{usuario.nombre}</h3>
                    <p>{usuario.correo}</p>
                </section>
                </Link>
            })
        }
        </>
    )
}
export { Inicio }