"use strict";
import {Nuevo_equipo,mostrar_equipos} from "/data/equipos.js";
const div_listaequipos = document.querySelector('#equipos');
const btn_vaciar = document.querySelector("#btn-vaciar")
let listaEquipos = [];
console.log(listaEquipos);
listaEquipos.push(Nuevo_equipo("colombia"))
listaEquipos.push(Nuevo_equipo("ecuador"))
listaEquipos.push(Nuevo_equipo("venezuela"))
div_listaequipos.innerHTML = mostrar_equipos(listaEquipos)
console.log(mostrar_equipos(listaEquipos))

btn_vaciar.addEventListener("click",(e) =>{
    Swal.fire({
        title: "Desea eliminar todos los equipos?",
        showDenyButton: true,
        confirmButtonText: "Confirmar",
        denyButtonText: `Cancelar`
      }).then((result) => {
        if (result.isConfirmed) {
            btn_vaciar.disabled = true;
            listaEquipos = []
            div_listaequipos.innerHTML = mostrar_equipos(listaEquipos)
          Swal.fire("Eliminados", "", "success");
        } else if (result.isDenied) {
          Swal.fire("No se ha eliminado ningun equipo", "", "error");
        }
      });
      e.preventDefault();
})