export default function Jogo({ imagem, sortearIndex, setIndex }) {
    console.log(sortearIndex)

    //em src = {} o que deve ir dentro das chaves é o estado que vai fazer a mudança das imagens conforme o usuário erra?

    return (
        <div className='principal-jogo'>
            <div className='img-game'>
                <img data-test = 'game-image' className='forca' src={imagem[0]} />
            </div>

            <div className='lado-esquerdo'>
                <button data-test = 'choose-word' onClick={sortearIndex} className='iniciar'>
                    Escolher Palavra
                </button>
                <div data-test = 'word' className='palavras'>
                    <p>{sortearIndex}</p>
                </div>
            </div>
        </div>
    )

    
}