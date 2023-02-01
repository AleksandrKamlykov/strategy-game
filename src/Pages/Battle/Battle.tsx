import React, { FC, useEffect, useState } from 'react';
import { BattleProps } from '.';
import clsses from './style.module.css';
import { UnitCard } from '../../components/UnitCard';
import { Races, Team, Teams } from '../../Classes/Teams/teams';
import { Unit } from '../../Classes/Units/Unit';
import { TopMenu } from '../../components/TopMenu';
import { AIBattle } from '../../Classes/AIClass/AI';
import { ACTION } from '../../Classes/Actions/Actions';
import { Attacker } from '../../Classes/Attacker/Attacker';
import { GameProccess } from '../../Classes/GameClass/Game';
import { Booster } from '../../Classes/Booster/Booster';

const TIMER = 600; //ms
const AI_THINK_TIMER = 2000; //ms

export const Battle: FC<BattleProps> = ({ teams, game, target, forward, setForward, setTarget, action, setAction, setGame, setTeams }) => {


	useEffect(() => {
		setForward(teams[game.oddTeams][game.indexAUnit]);

		const inittTeams = Object.assign({}, teams);
		const teamB = Team.initTeam(Races.ORK, 3);

		inittTeams[Teams.B] = teamB;
		setTeams(inittTeams);
		setGame(new GameProccess(teams[Teams.A], teamB));
	}, []);

	function nextOdd() {

		let forwardUnit = game.nextOdd();


		if (!game.gameEnd && forwardUnit) {
			setForward(forwardUnit);
		}

		if (!game.gameEnd && game.oddTeams === Teams.B && forwardUnit) {
			setAction(ACTION.LOADING);
			const timer = setTimeout(() => {
				setAction(ACTION.DEFAULT);
				aiOdd();
				clearTimeout(timer);
			}, AI_THINK_TIMER);
		}

		const timer = setTimeout(() => {
			setAction(ACTION.DEFAULT);
			clearTimeout(timer);
		}, TIMER);
		setGame(game.getGame);
	}

	function aiOdd() {

		const targetUnit = AIBattle.attackEnemy(forward, teams[Teams.B], teams[Teams.A]);

		if (!targetUnit) {
			return;
		}

		if (targetUnit.race === Races.ORK) {
			setAction(ACTION.BOOST);
			Booster.boost(targetUnit);
		} else {
			setAction(ACTION.ATTACK);
			Attacker.attack(forward, targetUnit);
		}
		setTarget(targetUnit);
		const forwardUnit = game.nextOdd();
		forwardUnit && setForward(forwardUnit);
		const timer = setTimeout(() => {
			setAction(ACTION.DEFAULT);
			clearTimeout(timer);
		}, TIMER);
	}

	function attackUnit(targetUnit: Unit) {

		setAction(ACTION.ATTACK);
		setTarget(targetUnit);
		Attacker.attack(forward, targetUnit);
		const timer = setTimeout(() => {
			nextOdd();
			clearTimeout(timer);
		}, TIMER);
	}

	function boost(target: Unit) {
		setTarget(target);
		setAction(ACTION.BOOST);
		Booster.boost(target);
		const timer = setTimeout(() => {
			//setTarget(undefined);
			nextOdd();
			clearTimeout(timer);
		}, TIMER);

	}


	return <div className={clsses.game}>
		<TopMenu game={game} forward={forward} />
		<div className={clsses.wrapper} >
			{
				!game.gameEnd && teams[Teams.A].length > 0 && teams[Teams.B].length > 0 ?
					Object.keys(teams).map((team: string) => {

						return (<div key={team}>
							<h3 style={{ color: team === Teams.A ? "#229" : "#292" }}>Team {team} - {teams[team as Teams][0].race}</h3>
							{
								teams[team as Teams].map((item: Unit) => {

									return <UnitCard
										key={item.name}
										data={item}
										target={target}
										team={team as Teams}
										game={game}
										forward={forward}
										action={action}
										attackUnit={attackUnit}
										boost={boost}
									/>;
								})
							}
						</div>);
					})

					: <h1 style={{ fontSize: '3rem', width: '100%' }}>Game end</h1>
			}

		</div>
	</div>;
};
