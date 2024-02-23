import { Burger } from "../models/Burger.js";

export const FakeDb = {
    burgers: [
        new Burger({ id: 1, name: 'Hambugger', price: 6, hasCheese: false, hasBacon: false }),
        new Burger({ id: 2, name: 'Bad Burger ', price: 15, hasCheese: true, hasBacon: false }),
        new Burger({ id: 3, name: 'Warmup', price: 17, hasCheese: true, hasBacon: false }),
        new Burger({ id: 4, name: 'Heart Stopper', price: 145, hasCheese: true, hasBacon: true })
    ]
}