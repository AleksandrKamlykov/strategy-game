import { Teams } from './../Teams/teams';
import { IUnit } from "../Units/Unit";

export class GameProccess {

    oddTeams: Teams;
    oddUnit: number;
    leftTeamsLength: number;
    rightTeamsLength: number;

    constructor(leftTeams: IUnit[], rightTeams: IUnit[]) {
        this.oddTeams = Teams.A;
        this.oddUnit = 0;
        this.leftTeamsLength = leftTeams.length;
        this.rightTeamsLength = rightTeams.length;
    }

    get getGame() {
        console.log(this);

        return this;
    }

    nextOdd() {

        if (this.oddTeams === Teams.A) {
            this.oddTeams = Teams.B;
        } else {
            this.oddTeams = Teams.A;
            this.oddUnit = this.oddUnit + 1;
        }

    }

}