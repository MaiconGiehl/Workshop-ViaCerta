export default class Produto {
    private _id: string
    private _nome: string
    private _preco: number

    constructor(
        aId: string, aNome: string, aValor: number
    ) {
        this._id = aId;
        this._nome = aNome;
        this._preco = aValor;

        this.validar()
    }

    private validar(): boolean {
        if (this._nome.length === 0) {
            throw new Error("Nome não pode ser em branco")
        }

        return true
    }

    get id(): string {
        return this._id
    }

    get nome(): string {
        return this._nome
    }

    get preco(): number {
        return this._preco
    }
}