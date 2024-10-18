import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import './perfil.css'
function Perfil(){
    const { nombre } = useParams()
    const usuario = useSelector(estado => estado.usuarios.find(usuario => usuario.nombre === nombre))
    return (
        <>
        <h1>Perfil</h1>
        <p>Nombre</p>
        <strong>{usuario.nombre}</strong>
        <p>Correo</p>
        <strong>{usuario.correo}</strong>
        <section className="gustos">
            <h3>Musica</h3>
            <strong>{usuario.gustos.musica}</strong>
            <h3>Comida favorita</h3>
            <strong>{usuario.gustos.comida}</strong>
        </section>
        </>
    )
}
export { Perfil }