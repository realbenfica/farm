class Farm {
    constructor(name) {
        this.name = name;
        this.crops = [];
        this.animals = []
    }

    addCrop(crop) {
        this.crops.push(crop)
    }
    
    addAnimal(animal) {
        this.animals.push(animal)
    }

    calculateIncome() {
        return this.crops
            .map(crop => crop.getYieldInEuros())
            .concat(this.animals.map(animal => animal.getValueInEuros()))
            .reduce((acc, index) => acc + index, 0)
    }

}
module.exports.Farm = Farm