import { prisma } from "../prisma/client"
import { shortenService } from "../Services/ShortenService"

jest.mock('nanoid', () => {
    return {
        customAlphabet: jest.fn().mockReturnValue(() => 'ABCDE')
    }
})

jest.mock("../prisma/client", () => {
    return {
        prisma: {
            link: {
                create: jest.fn()
            }
        }
    }
})


describe("Shorten Service Test", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    })

    it("Deve registar receber uma URL e retornar um shortId", async () => {
        const resultado = await shortenService.register({ url: "www.teste.com/essa-url-e-longa", shortId: null });

        expect(resultado).toHaveProperty('shortId');
        expect(resultado.shortId).toHaveLength(5);
        expect(resultado).toEqual({ shortId: 'ABCDE'})
        expect(prisma.link.create).toHaveBeenCalledTimes(1);
        expect(prisma.link.create).toHaveBeenCalledWith(expect.objectContaining({
            data: expect.objectContaining({
                originalUrl: "www.teste.com/essa-url-e-longa",
                shortId: expect.any(String)
            })
        }))
    })

    it("Deve registar receber uma URL e retornar um shortId", async () => {
        const resultado = await shortenService.register({ url: "www.teste.com/essa-url-e-longa", shortId: "teste" });

        expect(resultado).toHaveProperty('shortId');
        expect(resultado).toEqual({ shortId: 'teste'})
        expect(prisma.link.create).toHaveBeenCalledTimes(1);
        expect(prisma.link.create).toHaveBeenCalledWith(expect.objectContaining({
            data: expect.objectContaining({
                originalUrl: "www.teste.com/essa-url-e-longa",
                shortId: expect.any(String)
            })
        }))
    })
})