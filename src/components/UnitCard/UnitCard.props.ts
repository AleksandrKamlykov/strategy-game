import { ACTION } from './../../Classes/Actions/Actions';
import { IHuman } from './../../Classes/Units/humans';
import { Teams } from './../../Classes/Teams/teams';
import { GameProccess } from '../../Classes/GameClass/Game';
import { IUnit, IUNITS } from './../../Classes/Units/Unit';

export interface UnitCardProps {
    data: IUNITS;
    target: IUNITS | undefined;
    forward: IUNITS;
    setTarget: Function;
    team: Teams;
    game: any,
    nextOdd: () => void;
    action: ACTION;
    setAction: Function;
}
