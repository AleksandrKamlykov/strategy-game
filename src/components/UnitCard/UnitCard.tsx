import { FC, useContext } from 'react';
import { UnitCardProps } from '.';
import classes from './styles.module.css';
import { IUnit } from '../../Objects/Units/Unit';
import { RiceAdditional } from './RiceAdditional';
import { Races } from '../../Objects/Teams/teams';

export const UnitCard: FC<UnitCardProps> = ({ data, target, setTarget, team, game, nextOdd }) => {

	const { life, damage, defend, attack, defender, name } = data;

	function attackUnit() {

		if (target) {

			attack(target);
			setTarget(undefined);
			nextOdd();
		};
	}

	function targetUnit() {
		setTarget(data);
	}

	const bgColor = data.life <= 0 ? '#333' : target?.name === data.name ? 'rgba(140,0,0, .5)' : data.race === Races.ORK ? 'rgba(0,140,0, .5)' : "rgba(0,0,140, .5)";
	const isDeath = life <= 0;
	return <div className={classes.wrapper} style={{ backgroundColor: bgColor }}>
		<h3>{name}</h3>
		<div className={classes.main}>
			<ul className={classes.indicators}>
				<li>Life: {life}</li>
				<li>Damage: {damage}</li>
				<li>Defend: {defend}</li>
			</ul>
			<div>
				<button
					disabled={!target || (game.oddTeams !== team) || isDeath}
					onClick={attackUnit}
					className={classes.target}
				>
					Target
				</button>
				<button
					onClick={targetUnit}
					className={classes.attack}
					disabled={(game.oddTeams === team) || !!target || isDeath}
				>
					Attack
				</button>
				<RiceAdditional data={data} />
			</div>
		</div>
	</div>;
};
