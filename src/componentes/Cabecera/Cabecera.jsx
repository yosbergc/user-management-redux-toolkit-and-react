import Logo from '../../assets/carcover.png'
import './cabecera.css'
function Cabecera() {
    return (
        <header>
            <img src={Logo} alt="Logo del sitio" />
            <ul>
                <li>
                    Pagina principal
                </li>
                <li>
                    Todos los usuarios
                </li>
            </ul>
            <button>Iniciar sesion</button>
        </header>
    )
}
export { Cabecera }