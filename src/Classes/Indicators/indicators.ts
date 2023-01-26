

function randomNum(maxNum: number, minNum = 1) {
    return Math.floor(Math.random() * (maxNum - minNum) + minNum);
}

export class Indicators {

    static getRandomLife() {
        return randomNum(100, 40);
    }

    static getRandomDamage() {
        return randomNum(30, 10);
    }

    static getRandomDefend() {
        return randomNum(9, 1);
    }

    static addIdToName(name: string) {
        return name + randomNum(200000);
    }
}