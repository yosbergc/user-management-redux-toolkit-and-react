import { configureStore } from "@reduxjs/toolkit";
import reducerUsuario from '../reducer/reducerUsuario'

const tienda = configureStore({
    reducer: reducerUsuario
})

export { tienda }