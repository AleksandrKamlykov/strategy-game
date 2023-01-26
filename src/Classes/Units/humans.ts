import { Indicators } from './../Indicators/indicators';
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
        super(name, maxHP, damage, defend, price, avatarSrc, "HUMAN",);
        this.boost = this.boost.bind(this);
        this.boostName = 'Health (+ 10HP)';
    }

    boost(target: IUNITS) {

        const newCurrentHP = target.currenrHP + 10;

        target.currenrHP = newCurrentHP > target.maxHP ? target.maxHP : newCurrentHP;
    }
}

export const archer = new Human('Archer(human)', Indicators.getRandomLife(), Indicators.getRandomDamage(), Indicators.getRandomDefend(), 1, archerSRC);
export const bomber = new Human('Bomber(human)', Indicators.getRandomLife(), Indicators.getRandomDamage(), Indicators.getRandomDefend(), 1, bomberSRC);
export const gunner = new Human('Gunner(human)', Indicators.getRandomLife(), Indicators.getRandomDamage(), Indicators.getRandomDefend(), 1, gunnerSRC);
export const mage = new Human('Mage(human)', Indicators.getRandomLife(), Indicators.getRandomDamage(), Indicators.getRandomDefend(), 1, mageSRC);
export const musketer = new Human('Musketer(human)', Indicators.getRandomLife(), Indicators.getRandomDamage(), Indicators.getRandomDefend(), 1, musketerSRC);
export const priest = new Human('Priest(human)', Indicators.getRandomLife(), Indicators.getRandomDamage(), Indicators.getRandomDefend(), 1, priestSRC);
export const sworder = new Human('Sworder(human)', Indicators.getRandomLife(), Indicators.getRandomDamage(), Indicators.getRandomDefend(), 1, sworderSRC);


export const allHumansUnits = [
    archer,
    bomber,
    gunner,
    mage,
    musketer,
    priest,
    sworder,
];