import { Unit } from './../Units/Unit';
import { Teams } from './../Teams/teams';

export class GameProccess {

    private _oddTeams: Teams;
    private _teamALength: number;
    private _teamBLength: number;
    private _indexAUnit: number;
    private _indexBUnit: number;
    private _A: Unit[];
    private _B: Unit[];
    private _gameEnd: boolean;
    private _playerTeam: Teams;

    constructor(teamA: Unit[], teamB: Unit[]) {
        this._oddTeams = Teams.A;
        this._playerTeam = Teams.A;
        this._teamALength = teamA.length;
        this._teamBLength = teamB.length;
        this._A = teamA;
        this._B = teamB;
        this._indexAUnit = 0;
        this._indexBUnit = 0;
        this._gameEnd = false;
    }

    get getGame(): GameProccess {
        return this;
    }
    get oddTeams(): Teams {
        return this._oddTeams;
    }
    get indexAUnit(): number {
        return this._indexAUnit;
    }
    get indexBUnit(): number {
        return this._indexBUnit;
    }
    get A(): Unit[] {
        return this._A;
    }
    get B(): Unit[] {
        return this._B;
    }
    get gameEnd(): boolean {
        return this._gameEnd;
    }
    get playersTeam(): Teams {
        return this._playerTeam;
    }


    checkNextUnit(nextTeam: Teams): Unit {

        let nextIndex = nextTeam === Teams.B ? this._indexBUnit : this._indexAUnit;

        let nextUnit = this[nextTeam][nextIndex];

        while (nextUnit.currentHP <= 0) {

            nextIndex += 1;
            if (nextIndex >= this._teamALength) {
                nextIndex = 0;
            }

            nextUnit = this[nextTeam][nextIndex];
        }
        // nextIndex += 1;

        nextTeam === Teams.B ?
            this._indexAUnit = this._indexAUnit + 1 >= this._teamALength ? 0 : this._indexAUnit + 1
            : this._indexBUnit = this._indexBUnit + 1 >= this._teamBLength ? 0 : this._indexBUnit + 1;

        return nextUnit;
    }

    isGameEnded(nextTeam: Teams): boolean {

        const end = this[nextTeam].every((unit: Unit) => unit.currentHP <= 0);

        return end;
    }



    nextOdd(): Unit | undefined {

        const endGame = this.isGameEnded(this._oddTeams === Teams.A ? Teams.B : Teams.A);

        if (endGame) {
            alert(`Winner - ${this._oddTeams} team`);
            this._gameEnd = true;
        } else {

            if (this._oddTeams === Teams.A) {

                this._oddTeams = Teams.B;
                return this.checkNextUnit(Teams.B);
            } else {

                this._oddTeams = Teams.A;
                return this.checkNextUnit(Teams.A);
            }
        }

    }

}