import { IUNITS } from './../Units/Unit';

export class AIBattle {

    static boostNames: string[] = [];

    static findMinimalPrecentHPUnit(team: IUNITS[]): IUNITS {

        let unit: IUNITS = team.find((unit) => unit.currenrHP > 0) || team[0];

        team.forEach((b: IUNITS) => {

            const currentPrecent = b.currenrHP / b.maxHP;
            const unitPrecent = unit.currenrHP / unit.maxHP;

            if (b.currenrHP > 0) {

                currentPrecent < unitPrecent ? unit = b : undefined;
            }
        });

        return unit;
    }

    static findMinimalHPUnit(team: IUNITS[]): IUNITS {

        let unit: IUNITS = team.find((unit) => unit.currenrHP > 0) || team[0];

        team.forEach((b: IUNITS) => {

            const currentPrecent = b.currenrHP;
            const unitPrecent = unit.currenrHP;

            if (b.currenrHP > 0) {

                currentPrecent < unitPrecent ? unit = b : undefined;
            }
        });

        return unit;
    }

    static isFullHPOfAll(team: IUNITS[]): boolean {

        return team.every(unit => unit.maxHP === unit.currenrHP);
    }

    static isBoostOrk(orkTeam: IUNITS[], enemyTeam: IUNITS[]): IUNITS | null {

        const averageDamageEnemy = enemyTeam.reduce((a: number, b: IUNITS) => {
            return a + b.damage;
        }, 0) / enemyTeam.length;
        const lowDamageOrk = orkTeam.reduce((a: IUNITS, b: IUNITS) => (a.damage > b.damage ? b : a));

        return averageDamageEnemy > lowDamageOrk.damage ? lowDamageOrk : null;
    }

    static attackEnemy(forwardUnit: IUNITS, forwardTeam: IUNITS[], enemyTeam: IUNITS[]): IUNITS | null {

        const damage = forwardUnit.damage;

        const minimalPrecentUnit = this.findMinimalPrecentHPUnit(enemyTeam);
        const minimalHPtUnit = this.findMinimalHPUnit(enemyTeam);
        const isFullHP = this.isFullHPOfAll(enemyTeam);
        const isBoostOrk = this.isBoostOrk(forwardTeam, enemyTeam);


        if (isBoostOrk && !this.boostNames.includes(isBoostOrk.name) && (forwardUnit.name !== isBoostOrk.name)) {
            console.log('boost', isBoostOrk);
            this.boostNames.push(isBoostOrk.name);
            isBoostOrk.boost();
            return null;
        }
        if (damage >= (minimalHPtUnit.currenrHP + minimalHPtUnit.defend) || isFullHP) {
            console.log('minimalHPtUnit', minimalHPtUnit);
            forwardUnit.attack(minimalHPtUnit);
            return minimalHPtUnit;
        } else {
            console.log('minimalPrecentUnit', minimalPrecentUnit);
            forwardUnit.attack(minimalPrecentUnit);
            return minimalPrecentUnit;
        }
    }
}