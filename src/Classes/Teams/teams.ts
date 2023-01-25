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

        const result: any = {};

        while (Object.keys(result).length < count) {

            if (race === Races.HUMAN) {

                let unit = getrandomHuman();

                if (!result[unit.name]) {
                    unit = result[unit.name] = unit;
                }

            }

            if (race === Races.ORK) {

                let unit = getrandomOrk();

                if (!result[unit.name]) {
                    result[unit.name] = unit;
                }

            }

        }

        return Object.values(result);
    }
}

function getrandomHuman() {
    const index = randomNum(6, 0);
    return allHumansUnits[index];
}
function getrandomOrk() {
    const index = randomNum(6, 0);
    return allOrksUnits[index];
}