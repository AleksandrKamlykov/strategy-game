import { Unit } from './../Units/Unit';


export class Attacker {

    public static attack(forward: Unit, target: Unit): Unit {

        const isCriticalDamage = (Math.random() * 100) >= forward.criticalProbability;
        const isDodge = (Math.random() * 100) <= target.dodgeProbability;

        const realDamage = isDodge ? 0
            : isCriticalDamage ?
                forward.criticalDamage - target.defend
                : forward.damage - target.defend;

        const newCurrentHP = target.currentHP - realDamage;

        target.currentHP = newCurrentHP > 0 ? newCurrentHP : 0;

        if (newCurrentHP < 0) {
            target.isDead = true;
        }

        return target;
    }
}