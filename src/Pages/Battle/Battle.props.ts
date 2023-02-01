import { TypeTeam } from './../../Classes/Teams/teams';
import { Dispatch } from 'react';
import { Unit } from './../../Classes/Units/Unit';
import { GameProccess } from '../../Classes/GameClass/Game';
import { Teams } from '../../Classes/Teams/teams';
import { ACTION } from '../../Classes/Actions/Actions';
export interface BattleProps {
    teams: {
        [Teams.A]: Unit[],
        [Teams.B]: Unit[];
    },
    game: GameProccess,
    target: Unit | undefined,
    forward: Unit,
    setForward: Dispatch<Unit>,
    setTarget: Dispatch<Unit>,
    action: ACTION,
    setAction: Dispatch<ACTION>,
    setGame: Dispatch<GameProccess>;
    setTeams: Dispatch<TypeTeam>;

};
