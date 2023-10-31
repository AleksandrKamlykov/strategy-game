import { Races } from "../Teams/teams";

export class Unit {

    private _name: string;
    private _currentHP: number;
    private _maxHP: number;
    private _damage: number;
    private _defend: number;
    private _price: number;
    private _isDead: boolean;
    private _boostName: string;
    private _criticalProbability: number;
    private _criticalDamage: number;
    private _dodgeProbability: number;

    private _srcIdle: string;
    private _srcHurt: string;
    private _srcAttack: string;
    private _srcDeath: string;


    constructor(name: string, maxHp: number, damage: number, defend: number, price: number, srcIdle: string, srcHurt: string, srcAttack: string, srcDeath: string) {
        this._name = name;
        this._maxHP = maxHp;
        this._currentHP = maxHp;
        this._defend = defend;
        this._damage = damage;
        this._price = price;
        this._isDead = false;
        this._boostName = '';
        this._criticalProbability = 25;
        this._criticalDamage = Math.floor(this._damage * 1.3);
        this._dodgeProbability = 5;
        this._srcIdle = srcIdle;
        this._srcHurt = srcHurt;
        this._srcAttack = srcAttack;
        this._srcDeath = srcDeath;
    }

    public get damage(): number {
        return this._damage;
    }
    public get defend(): number {
        return this._defend;
    }
    public get isDead(): boolean {
        return this._isDead;
    }
    public get currentHP(): number {
        return this._currentHP;
    }
    public get name(): string {
        return this._name;
    }


    public get maxHP(): number {
        return this._maxHP;
    }
    public get price(): number {
        return this._price;
    }
    public get boostName(): string {
        return this._boostName;
    }
    public get criticalProbability(): number {
        return this._criticalProbability;
    }
    public get criticalDamage(): number {
        return this._criticalDamage;
    }
    public get dodgeProbability(): number {
        return this._dodgeProbability;
    }
    public get srcIdle(): string {
        return this._srcIdle;
    }
    public get srcAttack(): string {
        return this._srcAttack;
    }
    public get srcHurt(): string {
        return this._srcHurt;
    }
    public get srcDeath(): string {
        return this._srcDeath;
    }


    public set name(value: string) {
        this._name = value;
    }
    public set maxHP(value: number) {
        this._maxHP = value;
    }
    public set currentHP(value: number) {
        this._currentHP = value;
    }
    public set defend(value: number) {
        this._defend = value;
    }
    public set damage(value: number) {
        this._damage = value;
    }
    public set price(value: number) {
        this._price = value;
    }


    public set isDead(value: boolean) {
        this._isDead = value;
    }
    public set boostName(value: string) {
        this._boostName = value;
    }

}

