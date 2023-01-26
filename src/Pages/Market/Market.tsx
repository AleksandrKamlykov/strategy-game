import React, { FC, useState } from 'react';
import { MarketProps } from '.';
import classes from './Market.module.css';
import { Link } from 'react-router-dom';

import arrowSrc from '../../images/Pointer.png';
import coinsSrc from '../../images/coins.png';
import { IUNITS } from '../../Classes/Units/Unit';
import { UnitCard } from '../../components/UnitCard';
import { MarketCard } from '../../components/MarketCard';
import { Races, Team } from '../../Classes/Teams/teams';

export const Market: FC<MarketProps> = (props) => {

	const [coins, setCoins] = useState<number>(100);

	const [team, setTeam] = useState<IUNITS[]>(Team.initTeam(Races.HUMAN, 3));

	return <div className={classes.wrapper}>
		<div className={classes.menu}>
			<div className={classes.coins}>{coins}<img width={70} src={coinsSrc} /></div>
			<Link className={classes.arrow} to={"/strategy-game/game"}>
				<img width={200} src={arrowSrc} />
				<span>To battle</span>
			</Link>
		</div>

		<div className={classes.team}>
			<h3>Your team</h3>
			{
				team?.map((item: IUNITS) => (<MarketCard item={item} />))
			}
		</div>
		<div className={classes.shop}>
			{
				team?.map((item: IUNITS) => (<MarketCard item={item} ><button className={classes.add}>Add to team</button></MarketCard>))
			}
		</div>
	</div>;
};
