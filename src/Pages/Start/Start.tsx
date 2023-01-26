import React, { FC } from 'react';
import { StartProps } from '.';
import classes from './Start.module.css';
import { Link } from 'react-router-dom';

import dogSrc from '../../images/Doggy.png';

export const Start: FC<StartProps> = (props) => {
	return <div className={classes.wrapper}>
		<Link to="/strategy-game/market/">
			<button className={classes.startBtn}>Start game</button>
		</Link>
	</div>;
};
