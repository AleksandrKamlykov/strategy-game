import React, { FC, useContext, useMemo } from 'react';
import { UnitCardProps } from '.';
import classes from './styles.module.css';
import { RiceAdditional } from './RiceAdditional';
import { Races, Teams } from '../../Classes/Teams/teams';
import { ACTION } from '../../Classes/Actions/Actions';
import { UnitTemplate } from '../UnitTemplate';

const teamAcolor = '#229';
const teambcolor = '#292';

export const UnitCard: FC<UnitCardProps> = (props) => {
	const { data, target, team, game, forward, action, attackUnit, ActionsElement = RiceAdditional } = props;
	const { currentHP, name, srcAttack, srcHurt, srcIdle, srcDeath } = data;


	function attack() {
		attackUnit(data);
	}

	const bgColor = data.currentHP <= 0 ? '#333' : (target?.name === data.name) && action === ACTION.ATTACK ? 'rgba(170,0,0, .5)' : (target?.name === data.name) && action === ACTION.BOOST ? 'rgba(0,220,220, .5)' : undefined;
	const isDeath = currentHP <= 0;
	const isForward = name === forward?.name;


	const Actions: FC = () => {
		return (<div>
			{
				team !== game.playersTeam ? <button
					disabled={(game.oddTeams == team) || isDeath || action !== ACTION.DEFAULT}
					onClick={attack}
					className={classes.attack}
				>
					Attack
				</button>
					: <ActionsElement
						{...props}
					/>
			}
		</div>);
	};

	const src = name === target?.name && action === ACTION.ATTACK ? srcHurt : name === forward?.name && action === ACTION.ATTACK ? srcAttack : isDeath ? srcDeath : srcIdle;
	const steps = action === ACTION.ATTACK ? 10 : 6;
	return <UnitTemplate
		steps={steps}
		prioritetSrc={src}
		item={data}
		Actions={Actions}
		wrapperStyle={{ backgroundColor: bgColor, border: isForward ? (game.oddTeams === Teams.A ? `3px solid ${teamAcolor}` : `3px solid ${teambcolor}`) : "3px solid transparent" }}
	/>;

};
