import Jogo from "./Jogo";
import Letra from "./Letras";
import Chute from "./Chute";
import palavras from "../palavras";
import { useEffect, useState } from "react";


function App() {
  const imagem = ['assets/forca0.png', 'assets/forca1.png', 'assets/forca2.png', 'assets/forca3.png', 'assets/forca4.png', 'assets/forca5.png', 'assets/forca6.png']

  const [index, setIndex] = useState(Math.floor(Math.random() * 189))
  const [palavra, setPalavra] = useState()

  function sortearIndex(palavras) {
    const indexSorteado = [...index]
    const palavraSorteada = palavras[indexSorteado]
  }
  console.log('recebi o parâmetro', palavras)


  return (
    <div className='app'>

      <Jogo
        key={imagem}
        imagem={imagem}
        onclick={sortearIndex}

      />

      <Letra />
      <Chute />
    </div>
  );
}


export default App;
