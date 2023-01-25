import { IHuman } from './../../Objects/Units/humans';
import { Teams } from './../../Objects/Teams/teams';
import { GameProccess } from '../../Objects/Game/Game';
import { IUnit } from './../../Objects/Units/Unit';
import { IOrk } from '../../Objects/Units/orks';

export interface UnitCardProps {
    data: IHuman | IOrk;
    target: IUnit | undefined;
    setTarget: (target: IHuman | IOrk | undefined) => void;
    team: Teams;
    game: any,
    nextOdd: () => void;
}
