import { Races } from './../Teams/teams';
import { IUNITS, IUnit, Unit } from "./Unit";

export interface IHuman extends IUnit {
    boost: () => void;
    boostName: string;

}

export class Human extends Unit {

    boostName: string;

    constructor(name: string, maxHP: number, damage: number, defend: number, price: number,) {
        super(name, maxHP, damage, defend, price, Races.HUMAN);
        this.boost = this.boost.bind(this);
        this.boostName = 'Health';
    }

    boost(target: IUNITS) {

        const newCurrentHP = target.currenrHP + 3;

        target.currenrHP = newCurrentHP > target.maxHP ? target.maxHP : newCurrentHP;
    }

}