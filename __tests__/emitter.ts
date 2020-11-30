import { emitter } from "../src/emitter";

describe("emitter", () => {
    test("doesn't barf when loading the module", async () => {
        const wasm = emitter();
        await WebAssembly.instantiate(wasm);
    });

    test("simple add function", async () => {
        const wasm = emitter();

        // TODO: Fix why TypeScript doesn't compile instance.exports.run(..)
        let instance: any = (await WebAssembly.instantiate(wasm)).instance;

        expect(instance.exports.add(69, 5)).toEqual(74);
    });
})
