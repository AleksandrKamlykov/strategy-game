import { FC, useContext, useMemo } from 'react';
import { UnitCardProps } from '.';
import classes from './styles.module.css';
import { IUnit } from '../../Objects/Units/Unit';
import { RiceAdditional } from './RiceAdditional';
import { Races, Teams } from '../../Objects/Teams/teams';
import archerSRC from "../../images/Archer.png";
import bomberSRC from "../../images/Bomber.png";
import gunnerSRC from "../../images/Gunner.png";
import mageSRC from "../../images/Mage.png";
import musketerSRC from "../../images/Musketeer.png";
import priestSRC from "../../images/Priest.png";
import sworderSRC from "../../images/Sworder.png";

import citizenSRC from "../../images/Citizen.png";

function randomNum(maxNum: number, minNum = 1) {
	return Math.floor(Math.random() * (maxNum - minNum) + minNum);
}

const unitsSRC = [
	archerSRC,
	bomberSRC,
	gunnerSRC,
	mageSRC,
	musketerSRC,
	priestSRC,
	sworderSRC,
];


export const UnitCard: FC<UnitCardProps> = (props) => {
	const { data, target, setTarget, team, game, nextOdd, forward } = props;
	const { currenrHP, damage, defend, attack, defender, name, maxHP, } = data;

	function attackUnit() {

		if (true) {

			forward?.attack(data);
			setTarget(undefined);
			nextOdd();
		};
	}

	function targetUnit() {
		setTarget(data);
	}
	const randomUnit = useMemo(() => randomNum(7, 0), []);
	const bgColor = data.currenrHP <= 0 ? '#333' : target?.name === data.name ? 'rgba(220,0,0, .9)' : "rgba(180,180,180, .8)";// data.race === Races.ORK ? 'rgba(0,120,0, .8)' : "rgba(0,0,120, .8)";
	const isDeath = currenrHP <= 0;
	const isForward = name === forward.name;

	return <div className={classes.wrapper} style={{ backgroundColor: bgColor, border: isForward ? (game.oddTeams === Teams.A ? "3px solid #22f" : "3px solid #2f2") : "3px solid transparent" }}>
		<h3>{name}</h3>
		<div className={classes.main}>
			<div className={classes.avatar} >
				<img src={unitsSRC[randomUnit]} alt='unit' />
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
				{/* <button
					className={classes.target}
					onClick={targetUnit}
					disabled={!!target || isDeath}
				>
					Target
				</button> */}
				<RiceAdditional
					{...props}
				/>
			</div>
		</div>
	</div>;
};
