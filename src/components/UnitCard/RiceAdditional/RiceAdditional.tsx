import React, { FC } from 'react';
import { RiceAdditionalProps } from '.';
import { Races } from '../../../Classes/Teams/teams';
import { Human } from '../../../Classes/Units/humans';
import { Ork } from '../../../Classes/Units/orks';
import classes from './styles.module.css';

export const RiceAdditional: FC<RiceAdditionalProps> = ({ data, target, setTarget, team, game, nextOdd, forward }) => {



	function boost() {
		data.boost();
		setTarget(undefined);
		nextOdd();
	}
	console.log(data);

	return <button
		className={classes.boost}
		onClick={boost}
		disabled={team !== game.oddTeams || data.name === forward.name}
	>
		{
			data.boostName
		}
	</button>;
};
