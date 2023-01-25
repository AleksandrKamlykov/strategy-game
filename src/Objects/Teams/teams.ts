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

export class Team {
    static initTeam(Unit: any, count: number, name: string) {
        const result: IUnit[] = [];

        for (let i = 0; i < count; i++) {
            result.push(new Unit(
                Indicators.addIdToName(name),
                Indicators.getRandomLife(),
                Indicators.getRandomDamage(),
                Indicators.getRandomDefend(),
                i,
            ));
        }

        return result;
    }
}