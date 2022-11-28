import React from "react"
export default function Letras () {
    const alfa = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] 


    return (
        <div className='letras'>
           {alfa.map((letra => <buttom className='botao-letra'> {letra}</buttom>))}
        </div>
    )
}

