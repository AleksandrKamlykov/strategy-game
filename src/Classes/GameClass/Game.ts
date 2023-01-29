import { Teams } from './../Teams/teams';
import { IUNITS } from '../Units/Unit';

export class GameProccess {

    private _oddTeams: Teams;
    private _teamALength: number;
    private _teamBLength: number;
    private _indexAUnit: number;
    private _indexBUnit: number;
    private _A: IUNITS[];
    private _B: IUNITS[];
    private _gameEnd: boolean;

    constructor(teamA: IUNITS[], teamB: IUNITS[]) {
        this._oddTeams = Teams.A;
        this._teamALength = teamA.length;
        this._teamBLength = teamB.length;
        this._A = teamA;
        this._B = teamB;
        this._indexAUnit = 0;
        this._indexBUnit = 0;
        this._gameEnd = false;
    }

    get getGame() {
        return this;
    }
    get oddTeams() {
        return this._oddTeams;
    }
    get indexAUnit() {
        return this._indexAUnit;
    }
    get indexBUnit() {
        return this._indexBUnit;
    }
    get A() {
        return this._A;
    }
    get B() {
        return this._B;
    }
    get gameEnd() {
        return this._gameEnd;
    }


    checkNextUnit(nextTeam: Teams): IUNITS {

        let nextIndex = nextTeam === Teams.B ? this._indexBUnit : this._indexAUnit;

        let nextUnit = this[nextTeam][nextIndex];

        while (nextUnit.currenrHP <= 0) {

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

        const end = this[nextTeam].every((unit: IUNITS) => unit.currenrHP <= 0);

        return end;
    }



    nextOdd(): IUNITS | undefined {

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