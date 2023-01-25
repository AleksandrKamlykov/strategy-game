import { allOrksUnits } from './../Units/orks';
import { allHumansUnits } from './../Units/humans';
import { Indicators } from '../Indicators/indicators';
import { IUnit, Unit } from './../Units/Unit';

export enum Teams {
    A = "A",
    B = "B"
}

export enum Races {
    HUMAN = "HUMAN",
    ORK = "ORK"
}

function randomNum(maxNum: number, minNum = 1) {
    return Math.floor(Math.random() * (maxNum - minNum) + minNum);
}

export class Team {
    static initTeam(race: Races, count: number) {
        const result: IUnit[] = [];

        for (let i = 0; i < count; i++) {
            const index = randomNum(7, 0);
            if (race === Races.HUMAN) {
                result.push(allHumansUnits[index]);
            }
            if (race === Races.ORK) {
                result.push(allOrksUnits[index]);
            }
        }

        return result;
    }
}