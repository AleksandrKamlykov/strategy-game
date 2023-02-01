import { TypeTeam } from '../../Classes/Teams/teams';
import { Unit } from './../../Classes/Units/Unit';
import { Dispatch, ReactNode } from "react";

export interface MarketCardProps {
    item: Unit;
    children?: ReactNode;
};
