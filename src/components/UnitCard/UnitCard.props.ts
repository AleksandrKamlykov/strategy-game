import { IHuman } from './../../Classes/Units/humans';
import { Teams } from './../../Classes/Teams/teams';
import { GameProccess } from '../../Classes/Game/Game';
import { IUnit, IUNITS } from './../../Classes/Units/Unit';

export interface UnitCardProps {
    data: IUNITS;
    target: IUNITS | undefined;
    forward: IUNITS;
    setTarget: (target: IUNITS | undefined) => void;
    team: Teams;
    game: any,
    nextOdd: () => void;
}
