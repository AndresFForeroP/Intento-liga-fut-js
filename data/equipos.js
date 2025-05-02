export const Nuevo_equipo = (nEquipo) =>{
    let boton_vaciar = document.querySelector("#btn-vaciar")
    let plantilla = {
        "nombre":nEquipo,
        "DT":"",
        "CM":[],
        "jugadores":[]
    }
    boton_vaciar.disabled = false
    return plantilla
}
export const mostrar_equipos = (listaEquipos) =>{
    let datos_equipos = ""
    let datos_equipo = ""
    if (listaEquipos.length == 0) {
        datos_equipos = `<p class="sin-equipos">NO HAY EQUIPOS REGISTRADOS</p>`
    }
    else{
        listaEquipos.forEach(equipo => {
            datos_equipo = `<div class="equipos">
                <p><strong>NOMBRE EQUIPO</strong> <br>
                ${equipo.nombre}</p>
                <p><strong>DIRECTOR TECNICO</strong> <br>
                "${equipo.DT}"</p>
                <p><strong>CUERPO MEDICO</strong> <br>
                <span>${equipo.CM.length}</span></p>
                <p><strong>JUGADORES</strong> <br><br>
                <span>${equipo.jugadores.length}</span></p>
                <button class="boton-editar"><span class="material-symbols-outlined">edit</span></button>
                <button class="boton-eliminar"><span class="material-symbols-outlined">delete</span></button>
            </div>`
            datos_equipos += datos_equipo
        });
    }
    return datos_equipos
}