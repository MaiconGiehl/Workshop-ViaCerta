import exp from "constants"
import Produto from './produto.entity'
import {v4 as uuid} from 'uuid'

describe("Teste da entidade produto", () => {

    it("criar produto e validar", () => {
        const esperarId = uuid()
        const esperarNome = "Produto 1"
        const esperarValor = 10.00
        const produto = new Produto(
            esperarId,
            esperarNome,
            esperarValor
        )
        
        expect(produto.id).toBe(esperarId)
        expect(produto.nome).toBe(esperarNome)
        expect(produto.preco).toBe(esperarValor)
    })

    it("Deve retornar erro se nome em branco", () => {
        const esperarId = uuid()
        const esperarNome = ""
        const esperarValor = 10.00

        expect(() => {
            const produto = new Produto(
                esperarId,
                esperarNome,
                esperarValor
            )
        }).toThrowError("Nome não pode ser em branco")
    })
})