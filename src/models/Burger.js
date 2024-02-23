export class Burger {

    constructor(data) {

        this.id = data.id
        this.name = data.name
        this.hasBacon = data.hasBacon || false
        this.hasCheese = data.hasCheese || false
        
    }
}