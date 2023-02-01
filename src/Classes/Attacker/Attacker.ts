import { Unit } from './../Units/Unit';


export class Attacker {

    public static attack(forward: Unit, target: Unit): Unit {

        const realDamage = forward.damage - target.defend;

        const newCurrentHP = target.currentHP - realDamage;

        target.currentHP = newCurrentHP > 0 ? newCurrentHP : 0;

        if (newCurrentHP < 0) {
            target.isDead = true;
        }

        return target;
    }
}