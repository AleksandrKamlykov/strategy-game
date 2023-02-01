import { Indicators } from './../Indicators/indicators';
// import { Races } from './../Teams/teams';
import { Unit } from "./Unit";


import archerSRC from "../../images/Archer.png";
import bomberSRC from "../../images/Bomber.png";
import gunnerSRC from "../../images/Gunner.png";
import mageSRC from "../../images/Mage.png";
import musketerSRC from "../../images/Musketeer.png";
import priestSRC from "../../images/Priest.png";
import sworderSRC from "../../images/Sworder.png";

export enum Races {
    HUMAN = "HUMAN",
    ORK = "ORK"
}


export class Ork extends Unit {


    constructor(name: string, maxHP: number, damage: number, defend: number, price: number, avatarSrc: string) {
        super(
            name,
            maxHP,
            damage,
            defend,
            price,
            avatarSrc,
            Races.ORK,
        )
            ;
        this.boostName = 'fury (+ 20% damage)';
    }
}



export const archer = new Ork('Archer(ork)', Indicators.getRandomLife(), Indicators.getRandomDamage(), Indicators.getRandomDefend(), 1, archerSRC);
export const bomber = new Ork('Bomber(ork)', Indicators.getRandomLife(), Indicators.getRandomDamage(), Indicators.getRandomDefend(), 1, bomberSRC);
export const gunner = new Ork('Gunner(ork)', Indicators.getRandomLife(), Indicators.getRandomDamage(), Indicators.getRandomDefend(), 1, gunnerSRC);
export const mage = new Ork('Mage(ork)', Indicators.getRandomLife(), Indicators.getRandomDamage(), Indicators.getRandomDefend(), 1, mageSRC);
export const musketer = new Ork('Musketer(ork)', Indicators.getRandomLife(), Indicators.getRandomDamage(), Indicators.getRandomDefend(), 1, musketerSRC);
export const priest = new Ork('Priest(ork)', Indicators.getRandomLife(), Indicators.getRandomDamage(), Indicators.getRandomDefend(), 1, priestSRC);
export const sworder = new Ork('Sworder(ork)', Indicators.getRandomLife(), Indicators.getRandomDamage(), Indicators.getRandomDefend(), 1, sworderSRC);


export const allOrksUnits = [
    archer,
    bomber,
    gunner,
    mage,
    musketer,
    priest,
    sworder,
];