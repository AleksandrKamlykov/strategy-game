import { Dispatch } from 'react';
import { JSXElementConstructor, ReactElement, ReactNode } from 'react';
import { ACTION } from './../../Classes/Actions/Actions';
import { Teams, TypeTeam } from './../../Classes/Teams/teams';
import { GameProccess } from '../../Classes/GameClass/Game';
import { Unit } from './../../Classes/Units/Unit';

export interface UnitCardProps {
    data: Unit;
    target: Unit | undefined;
    forward: Unit;
    team: Teams;
    game: GameProccess,
    action: ACTION;
    attackUnit: (target: Unit) => void;
    boost: (target: Unit) => void;
    ActionsElement?: any;
}
