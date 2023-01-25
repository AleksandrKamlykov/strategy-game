import { Races } from './../Teams/teams';
import { IUnit, Unit } from "./Unit";

export interface IHuman extends IUnit {
    treatment: () => void;
}

export class Human extends Unit {

    constructor(name: string, life: number, damage: number, defend: number, price: number,) {
        super(name, life, damage, defend, price, Races.HUMAN);
        this.treatment = this.treatment.bind(this);
    }

    treatment() {
        console.log(this);

        this.life = this.life + 3;
    }

    // treatment(target: Unit) {
    //     target.life = target.life + 3;
    // }
}