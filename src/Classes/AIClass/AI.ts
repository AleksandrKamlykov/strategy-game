import { Teams } from './../Teams/teams';
import { Attacker } from './../Attacker/Attacker';
import { Booster } from './../Booster/Booster';
import { Unit } from "../Units/Unit";

export class AIBattle {

    static boostNames: string[] = [];

    static findMinimalPrecentHPUnit(team: Unit[]): Unit | undefined {

        let unit: any = team.find((unit) => unit.currentHP > 0);

        if (unit) {

            team.forEach((b: Unit) => {

                const currentPrecent = b.currentHP / b.maxHP;
                const unitPrecent = unit.currentHP / unit.maxHP;

                if (b.currentHP > 0) {

                    currentPrecent < unitPrecent ? unit = b : undefined;
                }
            });
        }

        return unit;
    }

    static findMinimalHPUnit(team: Unit[]): Unit {

        let unit: Unit = team.find((unit) => !unit.isDead) || team[0];

        team.forEach((b: Unit) => {

            const currentPrecent = b.currentHP;
            const unitPrecent = unit.currentHP;

            if (b.currentHP > 0) {

                currentPrecent < unitPrecent ? unit = b : undefined;
            }
        });

        return unit;
    }

    static isFullHPOfAll(team: Unit[]): boolean {

        return team.every(unit => unit.maxHP === unit.currentHP);
    }

    static isBoostOrk(orkTeam: Unit[], enemyTeam: Unit[]): Unit | null {

        const averageDamageEnemy = enemyTeam.reduce((a: number, b: Unit) => {
            return a + b.damage;
        }, 0) / enemyTeam.length;
        const lowDamageOrk = orkTeam.reduce((a: Unit, b: Unit) => (a.damage > b.damage ? b : a));

        return averageDamageEnemy > lowDamageOrk.damage ? lowDamageOrk : null;
    }

    static attackEnemy(forwardUnit: Unit, forwardTeam: Unit[], enemyTeam: Unit[]): { unit: Unit, team: Teams; } | undefined {

        const damage = forwardUnit.damage;

        const minimalPrecentUnit = this.findMinimalPrecentHPUnit(enemyTeam);
        const minimalHPtUnit = this.findMinimalHPUnit(enemyTeam);
        const isFullHP = this.isFullHPOfAll(enemyTeam);
        const isBoostOrk = this.isBoostOrk(forwardTeam, enemyTeam);


        if (isBoostOrk && !this.boostNames.includes(isBoostOrk.name) && (forwardUnit.name !== isBoostOrk.name)) {
            console.log('boost', isBoostOrk);
            this.boostNames.push(isBoostOrk.name);
            return { unit: isBoostOrk, team: Teams.B };
        }
        if (damage >= (minimalHPtUnit.currentHP + minimalHPtUnit.defend) || isFullHP) {
            console.log('minimalHPtUnit', minimalHPtUnit);
            return { unit: minimalHPtUnit, team: Teams.A };
        } else {
            console.log('minimalPrecentUnit', minimalPrecentUnit);
            if (minimalPrecentUnit) {
                return { unit: minimalPrecentUnit, team: Teams.A };
            }

        }
    }
}