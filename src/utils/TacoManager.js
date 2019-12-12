class TacoManager {
    keys = ["base", "mixin", "condiment", "seasoning", "shell"]

    constructor(taco) {
        this.base = taco.base_layer
        this.mixin = taco.mixin
        this.condiment = taco.condiment
        this.seasoning = taco.seasoning
        this.shell = taco.shell
    }

    get names() {
        const names = {}
        this.keys.forEach(key => names[key] = this.cleanValue(this[key].name))
        return names
    }

    get recipes() {
        return this.keys.map(key => this[key].recipe)
    }

    cleanValue(str) {
        if (str.endsWith("(Traditional; US)"))
            return str.slice(0, -17)
        else
            return str
    }
}

export default TacoManager