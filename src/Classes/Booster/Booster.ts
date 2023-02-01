import { Races } from "../Teams/teams";
import { Unit } from "../Units/Unit";

export class Booster {

    public static boost(target: Unit): Unit {
        if (target.race === Races.HUMAN) {
            target = this.humanBoost(target);
        }
        if (target.race === Races.HUMAN) {
            target = this.orkBoost(target);
        }

        return target;
    }

    private static humanBoost(target: Unit): Unit {
        const newCurrentHP = target.currentHP + 10;

        target.currentHP = newCurrentHP > target.maxHP ? target.maxHP : newCurrentHP;

        return target;
    }
    private static orkBoost(target: Unit): Unit {

        target.damage = Math.floor(target.damage * 1.2);


        return target;
    }

}