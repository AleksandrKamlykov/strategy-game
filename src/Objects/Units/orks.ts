import { Races } from './../Teams/teams';
import { IUNITS, IUnit } from './../Units/Unit';
import { Unit } from "./Unit";

export interface IOrk extends IUnit {
    boost: () => void;
    boostName: string;
}

export class Ork extends Unit {

    boostName: string;

    constructor(name: string, maxHP: number, damage: number, defend: number, price: number) {
        super(name, maxHP, damage, defend, price, Races.ORK);
        this.boost = this.boost.bind(this);
        this.boostName = 'fury';
    }

    boost() {
        this.damage = this.damage * 1.2;
    }
}