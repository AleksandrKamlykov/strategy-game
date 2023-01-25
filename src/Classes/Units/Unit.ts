import { IHuman } from "./humans";
import { IOrk } from "./orks";

export interface IUnit {
    name: string;
    currenrHP: number;
    maxHP: number;
    damage: number;
    defend: number;
    price: number;
    race: string;
    attack: (target: IUnit) => void;
    defender: (damage: number) => void;
    avatarSrc: string;
}

export type IUNITS = IHuman | IOrk;


export class Unit {

    name: string;
    race: string;
    currenrHP: number;
    maxHP: number;
    damage: number;
    defend: number;
    price: number;
    avatarSrc: string;

    constructor(name: string, maxHp: number, damage: number, defend: number, price: number, avatarSrc: string, race: string,) {
        this.name = name;
        this.maxHP = maxHp;
        this.currenrHP = maxHp;
        this.defend = defend;
        this.damage = damage;
        this.price = price;
        this.race = race;
        this.avatarSrc = avatarSrc;
        this.attack = this.attack.bind(this);
        this.defender = this.defender.bind(this);
    }

    attack(target: Unit) {


        target.defender(this.damage);
    }

    defender(damage: number) {

        damage = damage - this.defend;

        const newCurrentHP = this.currenrHP - damage;

        this.currenrHP = newCurrentHP > 0 ? newCurrentHP : 0;


    }

}

