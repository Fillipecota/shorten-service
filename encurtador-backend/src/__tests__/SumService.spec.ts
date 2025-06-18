import { Divisao, Sum } from "../Services/SumService"

describe("Sum Service Test", () => {
    it("Deve verificar se a soma é feita corretamente", () => {
        const resultado = Sum(1, 2);

        expect(resultado).toBe(3)
    })

    it("Deve verificar se uma divisão é feita corretamente", () => {
        const resultado = Divisao(10, 5);

        expect(resultado).toBe(2);
    })

    it("Deve gerar um erro caso o divisor seja zero", () => {
        const resultado = Divisao(10, 0);

        expect(resultado).toStrictEqual(new Error("Divisão por zero não é permitida"));

        // expect(() => Divisao(10, 0)).toThrow('Divisão por zero não é permitida');
    })
})