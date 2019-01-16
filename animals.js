class Animals {
    constructor(age) {
        this.age = age
    }
    getValueInEuros() {
        return this.price * this.getWeightInKg()
    }
}

class Pig extends Animals {
    // Weight of a pig in KG = AGE x 2.3 
    // max weight 700kg
    constructor(age) {
        super(age)
        this.weightFactor = 2.3
        this.price = 4.0
        this.maxWeight = 700;
    }
    getWeightInKg(age) {
        return Math.min(this.age * this.weightFactor, 700)
    }
}

class Cow extends Animals {
    // Weight of a cow in KG = AGE x 1.5
    // max weight 1200kg
    constructor(age) {
        super(age)
        this.weightFactor = 1.5
        this.price = 5.0
        this.maxWeight = 1200
    }

    getWeightInKg(age) {
        return Math.min(this.age * this.weightFactor, 1200)
    }
}

class Horse extends Animals {
    // Weight of a horse in KG = AGE x 1.7
    // max weight 1000kg
    constructor(age) {
        super(age)
        this.weightFactor = 1.7
        this.price = 10.0
        this.maxWeight = 1000
    }
    getWeightInKg(age) {
        return Math.min(this.age * this.weightFactor, 1000)
    }
}

module.exports = { Pig, Horse, Cow }