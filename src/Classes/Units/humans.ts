import { Indicators } from './../Indicators/indicators';
import { Unit } from "./Unit";

import archerSRC from "../../images/Archer.png";
import bomberSRC from "../../images/Bomber.png";
import gunnerSRC from "../../images/Gunner.png";
import mageSRC from "../../images/Mage.png";
import musketerSRC from "../../images/Musketeer.png";
import priestSRC from "../../images/Priest.png";
import sworderSRC from "../../images/Sworder.png";
//import { Races } from '../Teams/teams';
export enum Races {
    HUMAN = "HUMAN",
    ORK = "ORK"
}

export class Human extends Unit {


    constructor(name: string, maxHP: number, damage: number, defend: number, price: number, avatarSrc: string) {
        super(name, maxHP, damage, defend, price, avatarSrc, Races.HUMAN,);
        this.boostName = 'Health (+ 10HP)';
    }

}

export const archer = new Human('Archer(human)', Indicators.getRandomLife(), Indicators.getRandomDamage(), Indicators.getRandomDefend(), 30, archerSRC);
export const bomber = new Human('Bomber(human)', Indicators.getRandomLife(), Indicators.getRandomDamage(), Indicators.getRandomDefend(), 30, bomberSRC);
export const gunner = new Human('Gunner(human)', Indicators.getRandomLife(), Indicators.getRandomDamage(), Indicators.getRandomDefend(), 30, gunnerSRC);
export const mage = new Human('Mage(human)', Indicators.getRandomLife(), Indicators.getRandomDamage(), Indicators.getRandomDefend(), 30, mageSRC);
export const musketer = new Human('Musketer(human)', Indicators.getRandomLife(), Indicators.getRandomDamage(), Indicators.getRandomDefend(), 30, musketerSRC);
export const priest = new Human('Priest(human)', Indicators.getRandomLife(), Indicators.getRandomDamage(), Indicators.getRandomDefend(), 30, priestSRC);
export const sworder = new Human('Sworder(human)', Indicators.getRandomLife(), Indicators.getRandomDamage(), Indicators.getRandomDefend(), 30, sworderSRC);


export const allHumansUnits = [
    archer,
    bomber,
    gunner,
    mage,
    musketer,
    priest,
    sworder,
];