
export interface IUnit {
    name: string;
    life: number;
    damage: number;
    defend: number;
    price: number;
    race: string;
    attack: (target: IUnit) => void;
    defender: (damage: number) => void;

}


export class Unit {

    name: string;
    race: string;
    life: number;
    damage: number;
    defend: number;
    price: number;

    constructor(name: string, life: number, damage: number, defend: number, price: number, race: string) {
        this.name = name;
        this.life = life;
        this.defend = defend;
        this.damage = damage;
        this.price = price;
        this.race = race;
        this.attack = this.attack.bind(this);
        this.defender = this.defender.bind(this);
    }

    attack(target: Unit) {


        target.defender(this.damage);
    }

    defender(damage: number) {

        damage = damage - this.defend;

        this.life = this.life - damage;


    }

}

