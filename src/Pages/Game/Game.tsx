import React, { FC, useContext, useState } from 'react';
import { GameProps } from '.';
import clsses from './style.module.css';
import { UnitCard } from '../../components/UnitCard';
import { GameProccess } from '../../Classes/GameClass/Game';
import { Races, Team, Teams } from '../../Classes/Teams/teams';
import { IUNITS } from '../../Classes/Units/Unit';
import { TopMenu } from '../../components/TopMenu';
import { GameContext } from '../../App';

export const Game: FC<GameProps> = () => {

	const { teams, game, target, forward, setForward, setTarget } = useContext(GameContext);


	function nextOdd() {

		const forwardUnit = game.nextOdd();

		if (!game.gameEnd && forwardUnit) {
			setForward(forwardUnit);
		}
	}

	return <div className={clsses.game}>
		<TopMenu game={game} />
		<div className={clsses.wrapper} >
			{
				game.gameEnd ?

					<h1>Game end</h1>
					: Object.keys(teams).map((team: string) => {

						return (<div key={team}>
							<h3 style={{ color: team === Teams.A ? "#22f" : "#2f2" }}>Team {team} - {teams[team][0].race}</h3>
							{
								teams[team].map((item: IUNITS) => {

									return <UnitCard key={item.name}
										data={item}
										target={target}
										setTarget={setTarget}
										team={team as Teams}
										game={game}
										nextOdd={nextOdd}
										forward={forward}
									/>;
								})
							}
						</div>);
					})
			}
		</div>
	</div>;
};
