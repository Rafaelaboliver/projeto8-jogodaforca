export default function Chute() {
    return (
        <div className='chute'>
            <p className='p-chute'>Já sei a palavra!</p>
            <input data-test = 'guess-input' className='campo-digitar'/>
            <button data-test = 'guess-buttom' className='botao-chutar'>Chutar</button>
        </div>
    )
}