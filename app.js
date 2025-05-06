"use strict";
import {Nuevo_equipo,mostrar_equipos} from "./data/equipos.js";
const div_listaequipos = document.querySelector('#equipos');
const btn_vaciar = document.querySelector("#btn-vaciar")
const btn_nuevo = document.querySelector("#btn-nuevo")
let listaEquipos = [];
listaEquipos.push(Nuevo_equipo("argentina","messi"))
customElements.define(`equipos`,Micomponente)
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
btn_nuevo.addEventListener("click",(e) =>{
  let nombre = "";
  let DT = "";
  Swal.fire({
    title: "Ingrese el nombre del nuevo equipo",
    input: "text",
    inputAttributes: {
      autocapitalize: "off"
    },
    showCancelButton: true,
    confirmButtonText: "Crear",
    showLoaderOnConfirm: true,
    preConfirm: async (text) => {
      nombre = text;
      Swal.fire({
        title: `Ingrese el nombre del Director tecnico de ${nombre}`,
        input: "text",
        inputAttributes: {
        autocapitalize: "off"
        },
        showCancelButton: true,
        confirmButtonText: "Crear",
        showLoaderOnConfirm: true,
        preConfirm: async (texto) => {
          DT = texto;
          listaEquipos.push(Nuevo_equipo(nombre,DT))
          div_listaequipos.innerHTML = mostrar_equipos(listaEquipos)
          console.log(listaEquipos);
        }})
    }})
  
})
