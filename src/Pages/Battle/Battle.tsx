import React, { FC, useContext, useEffect, useState } from 'react';
import { BattleProps } from '.';
import clsses from './style.module.css';
import { UnitCard } from '../../components/UnitCard';
import { GameProccess } from '../../Classes/GameClass/Game';
import { Races, Team, Teams } from '../../Classes/Teams/teams';
import { IUNITS } from '../../Classes/Units/Unit';
import { TopMenu } from '../../components/TopMenu';
import { GameContext } from '../../App';
import { AIBattle } from '../../Classes/AIClass/AI';
import { ACTION } from '../../Classes/Actions/Actions';

export const Battle: FC<BattleProps> = ({ teams, game, target, forward, setForward, setTarget, action, setAction, setGame }) => {



	function nextOdd() {

		setAction(ACTION.ATTACK);

		const timer = setTimeout(() => {
			setAction(ACTION.DEFAULT);
			clearTimeout(timer);
		}, 600);


		let forwardUnit = game.nextOdd();

		if (!game.gameEnd && forwardUnit) {
			setForward(forwardUnit);
		}

		if (!game.gameEnd && game.oddTeams === Teams.B && forwardUnit) {
			const targetUnit = AIBattle.attackEnemy(forwardUnit, teams[Teams.B], teams[Teams.A]);
			setTarget(targetUnit);
			forwardUnit = game.nextOdd();
			forwardUnit && setForward(forwardUnit);
		}
		setGame(game.getGame);

	}

	return <div className={clsses.game}>
		<TopMenu game={game} />
		<div className={clsses.wrapper} >
			{
				game.gameEnd ?

					<h1>Game end</h1>
					: Object.keys(teams).map((team: string) => {

						return (<div key={team}>
							<h3 style={{ color: team === Teams.A ? "#22f" : "#2f2" }}>Team {team} - {teams[team as Teams][0].race}</h3>
							{
								teams[team as Teams].map((item: IUNITS) => {

									return <UnitCard
										key={item.name}
										data={item}
										target={target}
										setTarget={setTarget}
										team={team as Teams}
										game={game}
										nextOdd={nextOdd}
										forward={forward}
										action={action}
										setAction={setAction}
									/>;
								})
							}
						</div>);
					})
			}
		</div>
	</div>;
};
