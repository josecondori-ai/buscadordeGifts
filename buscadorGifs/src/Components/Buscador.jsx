// import React from 'react';

import { useState } from "react"

// import './Buscador.css'
const Buscador = () => {

    let [categorias,setCategorias]=useState(['Goles','Argentina','Colombia'])



    function agregarCategoria(){
        //'copa america'
        // categorias.push('copa america')
        setCategorias([...categorias,'copa america'])
        console.log(categorias)

    }

    console.log(categorias)
    return(
       
        <section>
            <h1>Buscador de Gifs</h1>
            <form action="">
                <label htmlFor="">Buscar gifs</label>
                <input type="text" />
            </form>

            <button onClick={agregarCategoria}>agregar</button>
            {/* lista */}
            <ol>
                {categorias.map(categoria=><li key={categoria}>{categoria}</li>)}
            </ol>
        </section>
    )
}

export { Buscador }