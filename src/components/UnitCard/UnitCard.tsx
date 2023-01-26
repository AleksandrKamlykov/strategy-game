import { FC, useContext, useMemo } from 'react';
import { UnitCardProps } from '.';
import classes from './styles.module.css';
import { RiceAdditional } from './RiceAdditional';
import { Races, Teams } from '../../Classes/Teams/teams';

export const UnitCard: FC<UnitCardProps> = (props) => {
	const { data, target, setTarget, team, game, nextOdd, forward } = props;
	const { currenrHP, damage, defend, attack, defender, name, maxHP, avatarSrc } = data;

	function attackUnit() {

		forward?.attack(data);
		setTarget(undefined);
		nextOdd();
	}

	const bgColor = data.currenrHP <= 0 ? '#333' : target?.name === data.name ? 'rgba(220,0,0, .9)' : undefined;
	const isDeath = currenrHP <= 0;
	const isForward = name === forward.name;

	return <div className={classes.wrapper} style={{ backgroundColor: bgColor, border: isForward ? (game.oddTeams === Teams.A ? "3px solid #22f" : "3px solid #2f2") : "3px solid transparent" }}>
		<h3 style={{ color: team === Teams.A ? "#22f" : "#2f2" }}>{name}</h3>
		<div className={classes.main}>
			<div className={classes.avatar} >
				<img width="100%" height="100%" src={avatarSrc} alt='unit' />
			</div>

			<ul className={classes.indicators}>
				<li className={classes.life} >
					<div style={{ width: `${(100 / maxHP) * currenrHP}%` }} />
					<span>HP: {currenrHP}</span>
				</li>
				<li>Damage: {damage}</li>
				<li>Defend: {defend}</li>
			</ul>
			<div className={classes.actions}>
				<button
					disabled={(game.oddTeams == team) || isDeath}
					onClick={attackUnit}
					className={classes.attack}
				>
					Attack
				</button>
				<RiceAdditional
					{...props}
				/>
			</div>
		</div>

	</div>;
};
