export default function Jogo({ imagem, sortearIndex, setIndex }) {
    console.log(sortearIndex)

    //em src = {} o que deve ir dentro das chaves é o estado que vai fazer a mudança das imagens conforme o usuário erra?

    return (
        <div className='principal-jogo'>
            <div className='img-game'>
                <img className='forca' src={imagem[0]} />
            </div>

            <div className='lado-esquerdo'>
                <button onClick={sortearIndex} className='iniciar'>
                    Escolher Palavra
                </button>
                <div className='palavras'>
                    <p>{sortearIndex}</p>
                </div>
            </div>
        </div>
    )

    
}