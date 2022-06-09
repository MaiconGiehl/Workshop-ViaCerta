import Produto from "./produto.entity"

const mockDados: Produto[] = [];

export default class ProdutoRepository {
    public salvar(produto: Produto) : void {
        mockDados.push(produto)
    }

    public buscarTodos (): Produto[] {
        return mockDados
    }
}