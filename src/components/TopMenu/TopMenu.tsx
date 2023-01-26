import React, { FC } from 'react';
import { TopMenuProps } from '.';
import classes from './topMenu.module.css';

import citizenSRC from "../../images/Citizen.png";
import { Teams } from '../../Classes/Teams/teams';


export const TopMenu: FC<TopMenuProps> = ({ game }) => {
	return <div className={classes.wrapper} >
		<img src={citizenSRC} height={80} />
		<h2 style={{ textAlign: 'center', fontSize: '2.1rem', color: game.oddTeams === Teams.A ? "#22f" : "#2f2" }}>Team {game.oddTeams} move</h2>

		<img src={citizenSRC} height={80} />
	</div>;
};
