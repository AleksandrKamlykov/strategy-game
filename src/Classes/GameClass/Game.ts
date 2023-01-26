import { Teams } from './../Teams/teams';
import { IUNITS } from '../Units/Unit';

export class GameProccess {

    oddTeams: Teams;
    teamALength: number;
    teamBLength: number;
    indexAUnit: number;
    indexBUnit: number;
    A: IUNITS[];
    B: IUNITS[];
    gameEnd: boolean;

    constructor(teamA: IUNITS[], teamB: IUNITS[]) {
        this.oddTeams = Teams.A;
        this.teamALength = teamA.length;
        this.teamBLength = teamB.length;
        this.A = teamA;
        this.B = teamB;
        this.indexAUnit = 0;
        this.indexBUnit = 0;
        this.gameEnd = false;
    }

    get getGame() {

        return this;
    }

    checkNextUnit(nextTeam: Teams) {

        let nextIndex = nextTeam === Teams.B ? this.indexBUnit : this.indexAUnit;

        let nextUnit = this[nextTeam][nextIndex];

        while (nextUnit.currenrHP <= 0) {

            nextIndex += 1;
            if (nextIndex >= this.teamALength) {
                nextIndex = 0;
            }

            nextUnit = this[nextTeam][nextIndex];
        }
        // nextIndex += 1;

        nextTeam === Teams.B ?
            this.indexAUnit = this.indexAUnit + 1 >= this.teamALength ? 0 : this.indexAUnit + 1
            : this.indexBUnit = this.indexBUnit + 1 >= this.teamBLength ? 0 : this.indexBUnit + 1;

        return nextUnit;
    }

    isGameEnded(nextTeam: Teams) {

        const end = this[nextTeam].every((unit: IUNITS) => unit.currenrHP <= 0);

        return end;
    }



    nextOdd() {

        const endGame = this.isGameEnded(this.oddTeams === Teams.A ? Teams.B : Teams.A);

        if (endGame) {
            alert(`Winner - ${this.oddTeams} team`);
            this.gameEnd = true;
        } else {



            if (this.oddTeams === Teams.A) {


                this.oddTeams = Teams.B;
                return this.checkNextUnit(Teams.B);
            } else {


                this.oddTeams = Teams.A;
                return this.checkNextUnit(Teams.A);
            }
        }

    }

}