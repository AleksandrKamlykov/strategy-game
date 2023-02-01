import { FC, useContext, useMemo } from 'react';
import { UnitCardProps } from '.';
import classes from './styles.module.css';
import { RiceAdditional } from './RiceAdditional';
import { Races, Teams } from '../../Classes/Teams/teams';
import { ACTION } from '../../Classes/Actions/Actions';

const teamAcolor = '#229';
const teambcolor = '#292';

export const UnitCard: FC<UnitCardProps> = (props) => {
	const { data, target, team, game, forward, action, attackUnit, ActionsElement = RiceAdditional } = props;
	const { currentHP, damage, defend, name, maxHP, avatarSrc } = data;


	function attack() {
		attackUnit(data);
	}

	const bgColor = data.currentHP <= 0 ? '#333' : (target?.name === data.name) && action === ACTION.ATTACK ? 'rgba(170,0,0, .5)' : (target?.name === data.name) && action === ACTION.BOOST ? 'rgba(0,220,220, .5)' : undefined;
	const isDeath = currentHP <= 0;
	const isForward = name === forward?.name;
	const precentHP = (100 / maxHP) * currentHP;

	return <div className={classes.wrapper} style={{ backgroundColor: bgColor, border: isForward ? (game.oddTeams === Teams.A ? `3px solid ${teamAcolor}` : `3px solid ${teambcolor}`) : "3px solid transparent" }}>
		<h3 style={{ color: team === Teams.A ? teamAcolor : teambcolor, padding: '5px 15px', backgroundColor: "#fff", width: 'fit-content', margin: 'auto', borderRadius: 8 }}>{name}</h3>
		<div className={classes.main}>
			<div className={classes.avatar} >
				<img width="100%" height="100%" src={avatarSrc} alt='unit' />
			</div>

			<ul className={classes.indicators} >
				<li className={classes.life} >
					<div style={{
						width: `${precentHP}%`,
						backgroundColor: precentHP > 75 ? "#0f0" : precentHP > 50 ? "#ff0" : precentHP > 25 ? "#a60" : precentHP > 0 ? "#b00" : "#000"
					}} />
					<span style={{
						color: precentHP > 50 ? "#222" : "#eee",
					}}>HP: {currentHP}</span>
				</li>
				<li>Damage: {damage}</li>
				<li>Defend: {defend}</li>
			</ul>
			<div className={classes.actions}>
				{
					team !== game.playersTeam ? <button
						disabled={(game.oddTeams == team) || isDeath}
						onClick={attack}
						className={classes.attack}
					>
						Attack
					</button>
						: <ActionsElement
							{...props}
						/>
				}
			</div>
		</div>

	</div>;
};
