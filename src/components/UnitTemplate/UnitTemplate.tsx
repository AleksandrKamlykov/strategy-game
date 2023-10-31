import React, { FC, JSXElementConstructor, ReactNode, useRef } from 'react';
import { UnitTemplateProps } from '.';
import classes from './UnitTemplate.module.css';

import attack from '../../assets/Export_64/Sword.png';
import deffence from '../../assets/Export_64/Shield.png';
import criticalD from '../../assets/Export_64/AxeDoubleT2.png';
import criticalP from '../../assets/Export_64/TomeBlue.png';
import dooge from '../../assets/Export_64/X.png';


const DefTitle: FC<{ children: string; }> = (props) => <h3 className={classes.title}>{props.children}</h3>;
const DefActions: FC = () => <span></span>;

const IndicatorImage: FC<{ src: string; }> = ({ src }) => <img width={22} src={src} />;



export const UnitTemplate: FC<UnitTemplateProps> = ({
	item,
	wrapperStyle,
	prioritetSrc,
	steps = 6,
	Actions = DefActions,
	Title = DefTitle
}) => {

	const { currentHP, damage, defend, name, maxHP, srcIdle, price, srcAttack, criticalDamage, criticalProbability, dodgeProbability } = item;


	const precentHP = (100 / maxHP) * currentHP;

	return (<div className={classes.wrapper} style={wrapperStyle}>
		<Title>{name}</Title>
		<div className={classes.main}>
			<div className={classes.avatar} >
				<div style={{
					animationName: classes.play,
					animationDuration: (steps * 0.2) + 's',
					animationTimingFunction: `steps(${steps})`,
					animationIterationCount: currentHP > 0 ? "infinite" : 1,
					backgroundImage: `url(${prioritetSrc || srcIdle})`,
				}}></div>
			</div>

			<ul className={classes.indicators}>
				<li className={classes.life} >
					<div style={{
						width: `${precentHP}%`,
						backgroundColor: precentHP > 75 ? "#0d0" : precentHP > 50 ? "#dd0" : precentHP > 25 ? "#a60" : precentHP > 0 ? "#b00" : "#000"
					}} />
					<span style={{
						color: precentHP > 50 ? "#222" : "#eee",
					}}>HP: {currentHP}</span>
				</li>
				<li><IndicatorImage src={attack} /> Damage: {damage}</li>
				<li><IndicatorImage src={deffence} /> Defend: {defend}  </li>
				<li> <IndicatorImage src={criticalP} /> Critical: {criticalProbability} %</li>
				<li><IndicatorImage src={criticalD} />  Critical Damage: {criticalDamage}</li>
				<li><IndicatorImage src={dooge} /> Doodge: {dodgeProbability} %</li>
			</ul>

		</div>
		<div className={classes.actions}>
			<Actions />
		</div>

	</div>);
};
