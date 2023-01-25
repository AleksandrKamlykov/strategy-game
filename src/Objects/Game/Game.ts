import { IUNITS } from './../Units/Unit';
import { Teams } from './../Teams/teams';
import { IUnit } from "../Units/Unit";

export class GameProccess {

    oddTeams: Teams;
    oddUnit: number;
    teamALength: number;
    teamBLength: number;
    teamA: IUNITS[];
    teamB: IUNITS[];

    constructor(teamA: IUNITS[], teamB: IUNITS[]) {
        this.oddTeams = Teams.A;
        this.oddUnit = 0;
        this.teamALength = teamA.length;
        this.teamBLength = teamB.length;
        this.teamA = teamA;
        this.teamB = teamB;
    }

    get getGame() {

        return this;
    }

    nextOdd() {

        if (this.oddTeams === Teams.A) {
            this.oddTeams = Teams.B;
        } else {
            this.oddTeams = Teams.A;

            const nextUnit = this.oddUnit >= this.teamALength ? 0 : this.oddUnit + 1;

            this.oddUnit = nextUnit;
        }

    }

}