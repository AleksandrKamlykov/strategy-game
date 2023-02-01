import { Races } from "../Teams/teams";

export class Unit {

    private _name: string;
    private _race: Races;
    private _currentHP: number;
    private _maxHP: number;
    private _damage: number;
    private _defend: number;
    private _price: number;
    private _avatarSrc: string;
    private _isDead: boolean;
    private _boostName: string;

    constructor(name: string, maxHp: number, damage: number, defend: number, price: number, avatarSrc: string, race: Races,) {
        this._name = name;
        this._maxHP = maxHp;
        this._currentHP = maxHp;
        this._defend = defend;
        this._damage = damage;
        this._price = price;
        this._race = race;
        this._avatarSrc = avatarSrc;
        this._isDead = false;
        this._boostName = '';
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
    public get race(): Races {
        return this._race;
    }
    public get avatarSrc(): string {
        return this._avatarSrc;
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
    public set race(value: Races) {
        this._race = value;
    }
    public set avatarSrc(value: string) {
        this._avatarSrc = value;
    }
    public set isDead(value: boolean) {
        this._isDead = value;
    }
    public set boostName(value: string) {
        this._boostName = value;
    }

}

