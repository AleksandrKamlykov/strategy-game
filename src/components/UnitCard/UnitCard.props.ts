import { IHuman } from './../../Objects/Units/humans';
import { Teams } from './../../Objects/Teams/teams';
import { GameProccess } from '../../Objects/Game/Game';
import { IUnit, IUNITS } from './../../Objects/Units/Unit';

export interface UnitCardProps {
    data: IUNITS;
    target: IUNITS | undefined;
    forward: IUNITS;
    setTarget: (target: IUNITS | undefined) => void;
    team: Teams;
    game: any,
    nextOdd: () => void;
}
