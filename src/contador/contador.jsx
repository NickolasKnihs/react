import { useState } from "react";

function Contador (){
    
    const [numero, setNumero] = useState(0);
    // [valor da variavel, atualizar  numero e tela] = retorna uma lista com 2 itens

    function contar () {
        setNumero(numero +1);
        console.log(numero);
    }

    function zerarNumero () {
        setNumero(0);
    }

    return (
        <>
            <button onClick={contar} > Contar {numero}</button>
            {
                //numero
            } 
            <br/>
            <button onClick={zerarNumero} > Zerar </button>
        </>
    );
}

export default Contador;