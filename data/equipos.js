export const Nuevo_equipo = (nEquipo,dt) =>{
    let boton_vaciar = document.querySelector("#btn-vaciar")
    let plantilla = {
        "nombre":nEquipo,
        "DT":dt,
        "CM":[],
        "jugadores":[]
    }
    boton_vaciar.disabled = false
    return plantilla
}
const btn_eliminar = (equipo) => {
    console.log(equipo)
  }
btn_eliminar("1")

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
                ${equipo.DT}</p>
                <p><strong>CUERPO MEDICO</strong> <br>
                <span>${equipo.CM.length}</span></p>
                <p><strong>JUGADORES</strong> <br><br>
                <span>${equipo.jugadores.length}</span></p>
                <button class="boton-editar"><span class="material-symbols-outlined">edit</span></button>
                <button id="${btn_eliminar(equipo.nombre)}" class="boton-eliminar"><span class="material-symbols-outlined">delete</span></button>
            </div>`
            datos_equipos += datos_equipo
        });
    }
    return datos_equipos
}
export class Micomponente extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.innerHTML = '<h1>hola mundo</h1>'
    }
    connectedCallBack(){
        listaEquipos.forEach(equipo => {
            this.shadowRoot.innerHTML += `<div class="equipos">
                <p><strong>NOMBRE EQUIPO</strong> <br>
                ${equipo.nombre}</p>
                <p><strong>DIRECTOR TECNICO</strong> <br>
                ${equipo.DT}</p>
                <p><strong>CUERPO MEDICO</strong> <br>
                <span>${equipo.CM.length}</span></p>
                <p><strong>JUGADORES</strong> <br><br>
                <span>${equipo.jugadores.length}</span></p>
                <button class="boton-editar"><span class="material-symbols-outlined">edit</span></button>
                <button id="btn-eliminar-${equipo.nombre}" class="boton-eliminar"><span class="material-symbols-outlined">delete</span></button>
            </div>`})
    }    
}