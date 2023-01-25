import { Races } from './../Teams/teams';
import { IUNITS, IUnit, Unit } from "./Unit";

import archerSRC from "../../images/Archer.png";
import bomberSRC from "../../images/Bomber.png";
import gunnerSRC from "../../images/Gunner.png";
import mageSRC from "../../images/Mage.png";
import musketerSRC from "../../images/Musketeer.png";
import priestSRC from "../../images/Priest.png";
import sworderSRC from "../../images/Sworder.png";


export interface IHuman extends IUnit {
    boost: () => void;
    boostName: string;

}

export class Human extends Unit {

    boostName: string;

    constructor(name: string, maxHP: number, damage: number, defend: number, price: number, avatarSrc: string) {
        super(name, maxHP, damage, defend, price, Races.HUMAN, avatarSrc);
        this.boost = this.boost.bind(this);
        this.boostName = 'Health';
    }

    boost(target: IUNITS) {

        const newCurrentHP = target.currenrHP + 3;

        target.currenrHP = newCurrentHP > target.maxHP ? target.maxHP : newCurrentHP;
    }

}

export const archer = new Human('Archer(human)', 100, 20, 10, 1, archerSRC);
export const bomber = new Human('Bomber(human)', 100, 20, 10, 1, bomberSRC);
export const gunner = new Human('Gunner(human)', 100, 20, 10, 1, gunnerSRC);
export const mage = new Human('Mage(human)', 100, 20, 10, 1, mageSRC);
export const musketer = new Human('Musketer(human)', 100, 20, 10, 1, musketerSRC);
export const priest = new Human('Priest(human)', 100, 20, 10, 1, priestSRC);
export const sworder = new Human('Sworder(human)', 100, 20, 10, 1, sworderSRC);


export const allHumansUnits = [
    archer,
    bomber,
    gunner,
    mage,
    musketer,
    priest,
    sworder,
];