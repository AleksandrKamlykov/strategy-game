import { allOrksUnits } from './../Units/orks';
import { allHumansUnits } from './../Units/humans';
import { Indicators } from '../Indicators/indicators';
import { Unit } from './../Units/Unit';

export enum Teams {
    A = "A",
    B = "B"
}

export enum Races {
    HUMAN = "HUMAN",
    ORK = "ORK"
}

export type TypeTeam = {
    [Teams.A]: Unit[],
    [Teams.B]: Unit[];
};

function randomNum(maxNum: number, minNum = 1) {
    return Math.floor(Math.random() * (maxNum - minNum) + minNum);
}

export class Team {

    private _team: Unit[];


    constructor(race: Races) {
        this._team = Team.initTeam(race, 3);
    }


    public static getrandomHuman() {
        const index = randomNum(6, 0);
        return allHumansUnits[index];
    }

    public static getrandomOrk() {
        const index = randomNum(6, 0);
        return allOrksUnits[index];
    }

    public static getAllOrks(): Unit[] {
        return allOrksUnits;
    }
    public static getAllHumans(): Unit[] {
        return allHumansUnits;
    }

    public static initTeam(race: Races, count: number): Unit[] {

        const result: any = {};

        while (Object.keys(result).length < count) {

            if (race === Races.HUMAN) {

                let unit = this.getrandomHuman();

                if (!result[unit.name]) {
                    unit = result[unit.name] = unit;
                }

            }

            if (race === Races.ORK) {

                let unit = this.getrandomOrk();

                if (!result[unit.name]) {
                    result[unit.name] = unit;
                }

            }

        }

        return Object.values(result);
    }


}
