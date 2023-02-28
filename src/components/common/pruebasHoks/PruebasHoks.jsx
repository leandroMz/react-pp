// con el pluggin react snippet
// agrego el comando "rafce" o "rafc"cambia el tipo de exportacion
// import React from 'react'
//la importacion de react ya no es necesaria, podemos borrarla
// importamos useState
// En react cuando necesitamos una variable o un estado 
//no usamos un guardado de usuario utilizando ejemplo
// let usuarios = , sino que utilizamos
// traemos un hook que se llama useState
// const [contador, setContador] = useState(0)
// aun asi esta logica debo pasar al padre
// console.log(contador);

import { useState, useEffect } from "react"

// esto nos da dos elemetos, como primer posicion
// primero un elemetno y segundo la funcion que me modifica el elemento

const PruebasHoks = ({ contador, setContador }) => {
    let arr = ["https://img.freepik.com/foto-gratis/escuchandote-perro-joven-bulldog-frances-planteando-lindo-perrito-o-mascota-blanco-negro-jugueton-jugando-parece-feliz-aislado-sobre-fondo-blanco-concepto-movimiento-accion-movimiento_155003-34898.jpg",
    "https://media.istockphoto.com/id/513133900/es/foto/oro-retriever-sentado-en-frente-de-un-fondo-blanco.jpg?s=612x612&w=0&k=20&c=0lRWImB8Y4p6X6YGt06c6q8I3AqBgKD-OGQxjLCI5EY=",
    "https://cdn.pixabay.com/photo/2016/10/31/14/55/rottweiler-1785760_1280.jpg",
    "https://www.shutterstock.com/image-photo/full-length-portrait-cute-french-260nw-1748110865.jpg"]
    const [img, setImg] = useState("")

    // useEffect me permite ejecutar codigo cuando el componente se monta
    //react al no trabajar con DOM sino con virtualDom no llemael domo de info
    //sino que va mostrando por momentos
    // se monta una vez pero useState se renderiza con cada cambio
    useEffect(()=>{
        setImg(arr[contador])
        }, [contador])

    return (
        <div>
            <h2>Contador: {contador}</h2>
            <button onClick={() => setContador(contador - 1)}>anterior</button>
            <button onClick={() => setContador(contador + 1)}>siguiente</button>
            {/* <button onClick={() => setImg("https://imagen.research.google/main_gallery_images/a-dog-looking-curiously.jpg")} >traer Imagen</button> */}
            {/* <button onClick={() => setImg("")} >Borrar Imagen</button> */}
            <img src={img} alt="" />
        </div>
    )
}

export default PruebasHoks