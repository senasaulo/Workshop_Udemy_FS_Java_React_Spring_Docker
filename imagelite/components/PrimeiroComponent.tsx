'use client';

export function PrimeiroComponent() {

    function handleClick() {
        console.log("Clicou no botão!");
    }

    return (
        <div>
            <p>Primeiro Componente!</p>
            <button
                onClick={handleClick}
                style={{ padding: "10px", cursor: "pointer" }}
            > Clique aqui
            </button>
        </div>
    );
}