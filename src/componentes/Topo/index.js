import "./style.css"

export default function Topo() {
    return (
        <header>
            <div className="limitar-secao">
                <img src="../assets/logo.png" alt="" />
                <nav>
                    <a href="#produtos">PRODUTOS</a>
                    <a href="#sobre">SOBRE</a>
                    <a href="#contatos">CONTATOS</a>
                </nav>
            </div>
        </header>
    )
}