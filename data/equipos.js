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
export const mostrar_equipos = (listaEquipos) => {
    class Micomponente extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: "open" });
            listaEquipos.forEach(equipo => {
                const equipoDiv = document.createElement('div');
                equipoDiv.classList.add('equipos');
                equipoDiv.innerHTML = /*html*/`
                    <style>
                        margin-top: 1rem;
                        margin-left: 1rem;
                        border-radius: 1.5rem;
                        display: grid;
                        grid-template-columns: repeat(6,16.67%);
                        background:
                            rgba(66, 66, 66, 0.7);
                        p{
                            font-size: 1rem;
                            text-align: center;
                            margin: 1rem;
                            margin-left: 1rem;
                            span{
                                font-size: 1.3rem;
                            }
                        }
                        button{
                            margin: auto;
                        }
                        .boton-eliminar{
                            background-color: var(--segundocolor);
                        }
                        .boton-editar{
                            margin-right: -1.7rem;
                            background-color: var(--tercercolor);
                        }
                        strong{
                            color:var(--primercolor);
                        }
                    </style>
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
                `;
                this.shadowRoot.appendChild(equipoDiv);

                const eliminarButton = equipoDiv.querySelector(`#btn-eliminar-${equipo.nombre}`);
                eliminarButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    alert(equipo.nombre);
                });
            });
        }
    }
    customElements.define('equipos-uno', Micomponente);
}
