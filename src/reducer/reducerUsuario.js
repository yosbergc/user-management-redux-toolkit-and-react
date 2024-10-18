import { createSlice } from "@reduxjs/toolkit";

const reducerUsuario = createSlice({
    name: "usuario",
    initialState: {
        usuarios: [
            {
                nombre: "Brayan",
                correo: "fajardo2016brayan@gmail.com",
                edad: 22,
                gustos: {
                    musica: "Baladas",
                    comida: "Arepa con diablito",
                }
            }
        ]
    },
    reducers: {
        agregarUsuario: (estadoActual, accion) => {
            const { nombre, correo, edad, musica, comida } = accion.payload
            const nuevosUsuarios = [...estadoActual.usuarios]
            nuevosUsuarios.push({
                nombre,
                correo,
                edad,
                gustos: {
                    musica,
                    comida
                }
            })

            return {...estadoActual, usuarios: nuevosUsuarios}
        }
    }
})

export const { agregarUsuario } = reducerUsuario.actions;
export default reducerUsuario.reducer;