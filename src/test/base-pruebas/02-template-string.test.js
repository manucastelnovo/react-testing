import { getSaludo } from "../../base-pruebas/02-template-string";

describe('pruebas en 02-template-string',()=>{
    test('get saludo debe retornar hola fernando',()=>{
        const name  = 'Fernando';
        const message = getSaludo(name);

        expect(message).toBe(`hola ${name}`)
    });

})