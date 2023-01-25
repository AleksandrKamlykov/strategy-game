import { Races } from './../Teams/teams';
import { IUNITS, IUnit } from './../Units/Unit';
import { Unit } from "./Unit";


import archerSRC from "../../images/Archer.png";
import bomberSRC from "../../images/Bomber.png";
import gunnerSRC from "../../images/Gunner.png";
import mageSRC from "../../images/Mage.png";
import musketerSRC from "../../images/Musketeer.png";
import priestSRC from "../../images/Priest.png";
import sworderSRC from "../../images/Sworder.png";


export interface IOrk extends IUnit {
    boost: () => void;
    boostName: string;
}

export class Ork extends Unit {

    boostName: string;

    constructor(name: string, maxHP: number, damage: number, defend: number, price: number, avatarSrc: string) {
        super(name, maxHP, damage, defend, price, Races.ORK, avatarSrc);
        this.boost = this.boost.bind(this);
        this.boostName = 'fury';
    }

    boost() {
        this.damage = this.damage * 1.2;
    }
}



export const archer = new Ork('Archer(human)', 100, 20, 10, 1, archerSRC);
export const bomber = new Ork('Bomber(human)', 100, 20, 10, 1, bomberSRC);
export const gunner = new Ork('Gunner(human)', 100, 20, 10, 1, gunnerSRC);
export const mage = new Ork('Mage(human)', 100, 20, 10, 1, mageSRC);
export const musketer = new Ork('Musketer(human)', 100, 20, 10, 1, musketerSRC);
export const priest = new Ork('Priest(human)', 100, 20, 10, 1, priestSRC);
export const sworder = new Ork('Sworder(human)', 100, 20, 10, 1, sworderSRC);


export const allOrksUnits = [
    archer,
    bomber,
    gunner,
    mage,
    musketer,
    priest,
    sworder,
];