import { Races } from './../Teams/teams';
import { IUnit } from './../Units/Unit';
import { Unit } from "./Unit";

export interface IOrk extends IUnit {
    fury: () => void;
}

export class Ork extends Unit {


    constructor(name: string, life: number, damage: number, defend: number, price: number) {
        super(name, life, damage, defend, price, Races.ORK);
    }

    fury(target: Unit) {
        target.damage = target.damage + 2;
    }
}