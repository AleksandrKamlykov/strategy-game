import React, { FC, useEffect, useState } from 'react';
import { MarketProps } from '.';
import classes from './Market.module.css';
import { Link } from 'react-router-dom';

import arrowSrc from '../../images/Pointer.png';
import coinsSrc from '../../images/coins.png';
import { MarketCard } from '../../components/MarketCard';
import { Races, Team, Teams, TypeTeam } from '../../Classes/Teams/teams';
import { Unit } from '../../Classes/Units/Unit';

export const Market: FC<MarketProps> = ({ teams, setTeams }) => {

	const [coins, setCoins] = useState<number>(100);
	const [hasUnitName, setHasUnitname] = useState<string[]>([]);

	useEffect(() => {
		setTeams({
			[Teams.A]: [],
			[Teams.B]: []
		});
	}, []);

	function buyUnit(unit: Unit) {
		const newTeam = teams;

		newTeam[Teams.A].push(unit);

		setTeams(newTeam);
		setHasUnitname(prev => [...prev, unit.name]);
		setCoins(prev => prev - unit.price);
	}
	function removeUnit(removeUnit: Unit) {
		const newTeam = teams;

		newTeam[Teams.A] = newTeam[Teams.A].filter((unit: Unit) => unit.name !== removeUnit.name);

		setTeams(newTeam);
		setHasUnitname(prev => prev.filter(name => name !== removeUnit.name));
		setCoins(prev => prev + removeUnit.price);
	}

	return <div className={classes.wrapper}>
		<div className={classes.menu}>
			<div className={classes.coins}>{coins}<img width={70} src={coinsSrc} /></div>
			{
				teams[Teams.A].length > 2 ? <Link className={classes.arrow} to={"/strategy-game/game"}>
					<img width={200} src={arrowSrc} />
					<span>To battle</span>
				</Link>
					: <strong style={{ color: '#000', display: "block", backgroundColor: '#f22', padding: 10, borderRadius: 4 }}>
						Few units bought
					</strong>
			}
		</div>

		<div className={classes.team}>
			<h3>Your team</h3>
			{
				teams[Teams.A]?.map((item: Unit) => (<MarketCard key={item.name} item={item} >
					<button
						onClick={() => removeUnit(item)}
						className={classes.add}
					>
						remove in team
					</button>
				</MarketCard>))
			}
		</div>
		<div className={classes.shop}>
			{
				Team.getAllHumans().map((item: Unit) => {

					return (<MarketCard item={item} key={item.name}>
						<button
							onClick={() => buyUnit(item)}
							className={classes.add}
							disabled={hasUnitName.includes(item.name) || item.price > coins}
						>
							Add to team
						</button>
					</MarketCard>);
				})
			}
		</div>
	</div>;
};
