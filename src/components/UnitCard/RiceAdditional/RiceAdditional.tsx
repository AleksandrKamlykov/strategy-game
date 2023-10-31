import React, { FC } from 'react';
import { RiceAdditionalProps } from '.';
import classes from './styles.module.css';
import { ACTION } from '../../../Classes/Actions/Actions';
import { Unit } from '../../../Classes/Units/Unit';

export const RiceAdditional: FC<RiceAdditionalProps> = ({ data, target, team, game, forward, action, boost }) => {

	function boostUnit() {
		boost(data);
	}

	return <button
		className={classes.boost}
		onClick={boostUnit}
		disabled={team !== game.oddTeams || data.name === forward?.name || data.isDead}
		style={{ backgroundColor: (target?.name === data.name) && action === ACTION.BOOST ? "#299" : undefined }}
	>
		Health + 10%
	</button>;
};
