import SecaoCapa from "../SecaoCapa"
import SecaoContato from "../SecaoContato"
import SecaoProdutos from "../SecaoProdutos"
import SecaoSobre from "../SecaoSobre"

export default function Conteudo() {
    return (
        <main>
            <SecaoCapa />
            <SecaoProdutos />
            <SecaoSobre />
            <SecaoContato />
        </main>
    )
}