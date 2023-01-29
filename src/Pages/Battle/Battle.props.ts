import { IUNITS } from './../../Classes/Units/Unit';
import { GameProccess } from '../../Classes/GameClass/Game';
import { Teams } from '../../Classes/Teams/teams';
import { ACTION } from '../../Classes/Actions/Actions';

export interface BattleProps {
    teams: {
        [Teams.A]: IUNITS[],
        [Teams.B]: IUNITS[];
    },
    game: GameProccess,
    target: IUNITS | undefined,
    forward: IUNITS,
    setForward: Function,
    setTarget: Function,
    action: ACTION,
    setAction: Function,
    setGame: Function;
};
