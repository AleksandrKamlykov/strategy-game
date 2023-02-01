import { Dispatch, DispatchWithoutAction } from "react";
import { Teams, TypeTeam } from "../../Classes/Teams/teams";
import { Unit } from "../../Classes/Units/Unit";

export interface MarketProps {
    teams: {
        [Teams.A]: Unit[],
        [Teams.B]: Unit[];
    };
    setTeams: Dispatch<TypeTeam>;
};
