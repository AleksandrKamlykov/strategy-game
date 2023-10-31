import { Indicators } from './../Indicators/indicators';
import { Unit } from "./Unit";
import { bossSrc, comanderSrc, eliteSrc, gruntSrc, guardSrc, guardianSrc, potionMasterSrc, ratcherSrc } from './src';

export const commander = new Unit('commander(Unit)', Indicators.getRandomLife(), Indicators.getRandomDamage(), Indicators.getRandomDefend(), 30, comanderSrc.idle, comanderSrc.hurt, comanderSrc.attack, comanderSrc.death);
export const grunt = new Unit('grunt(Unit)', Indicators.getRandomLife(), Indicators.getRandomDamage(), Indicators.getRandomDefend(), 30, comanderSrc.idle, comanderSrc.hurt, comanderSrc.attack, comanderSrc.death);
export const guardian = new Unit('guardian(Unit)', Indicators.getRandomLife(), Indicators.getRandomDamage(), Indicators.getRandomDefend(), 30, guardianSrc.idle, guardianSrc.hurt, guardianSrc.attack, guardianSrc.death);
export const potionMaster = new Unit('potionMaster(Unit)', Indicators.getRandomLife(), Indicators.getRandomDamage(), Indicators.getRandomDefend(), 30, potionMasterSrc.idle, potionMasterSrc.hurt, potionMasterSrc.attack, potionMasterSrc.death);
export const boss = new Unit('boss(Unit)', Indicators.getRandomLife(), Indicators.getRandomDamage(), Indicators.getRandomDefend(), 30, comanderSrc.idle, comanderSrc.hurt, comanderSrc.attack, comanderSrc.death);
export const elite = new Unit('elite(Unit)', Indicators.getRandomLife(), Indicators.getRandomDamage(), Indicators.getRandomDefend(), 30, guardianSrc.idle, guardianSrc.hurt, guardianSrc.attack, guardianSrc.death);
export const guard = new Unit('guard(Unit)', Indicators.getRandomLife(), Indicators.getRandomDamage(), Indicators.getRandomDefend(), 30, potionMasterSrc.idle, potionMasterSrc.hurt, potionMasterSrc.attack, potionMasterSrc.death);
export const ratcher = new Unit('ratcher(Unit)', Indicators.getRandomLife(), Indicators.getRandomDamage(), Indicators.getRandomDefend(), 30, guardianSrc.idle, guardianSrc.hurt, guardianSrc.attack, guardianSrc.death);


export const allHumansUnits = [
    commander,
    grunt,
    guardian,
    potionMaster,
    boss,
    elite,
    guard,
    ratcher,
];