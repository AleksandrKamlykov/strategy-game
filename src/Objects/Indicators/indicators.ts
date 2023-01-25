

function randomNum(maxNum: number, minNum = 1) {
    return Math.floor(Math.random() * (maxNum - minNum) + minNum);
}

export class Indicators {

    static getRandomLife() {
        return randomNum(15, 3);
    }

    static getRandomDamage() {
        return randomNum(7,);
    }

    static getRandomDefend() {
        return randomNum(3, 0);
    }

    static addIdToName(name: string) {
        return name + randomNum(200);
    }
}