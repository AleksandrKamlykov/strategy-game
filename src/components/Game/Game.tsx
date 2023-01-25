import React, { FC, useState } from 'react';
import { GameProps } from '.';
import clsses from './style.module.css';
import { Human, IHuman } from '../../Classes/Units/humans';
import { UnitCard } from '../UnitCard';
import { IOrk, Ork } from '../../Classes/Units/orks';
import { GameProccess } from '../../Classes/Game/Game';
import { Races, Team, Teams } from '../../Classes/Teams/teams';
import { IUNITS } from '../../Classes/Units/Unit';


export const Game: FC<GameProps> = (props) => {


	const [teams, setTeams] = useState<any>({
		[Teams.A]: Team.initTeam(Races.HUMAN, 3),
		[Teams.B]: Team.initTeam(Races.ORK, 3)
	});

	const [game, setGame] = useState<GameProccess>(new GameProccess(teams[Teams.A], teams[Teams.B]));

	const [target, setTarget] = useState<IUNITS>();
	const [forward, setForward] = useState<IUNITS>(teams[game.oddTeams][game.oddUnit]);


	function nextOdd() {

		game.nextOdd();

		const forwardUnit = teams[game.oddTeams][game.oddUnit];
		setForward(forwardUnit);
	}

	return <div>
		<h2 style={{ textAlign: 'center', fontSize: '2.1rem', color: game.oddTeams === Teams.A ? "#22f" : "#2f2" }}>Turn team: {game.oddTeams}</h2>
		<div className={clsses.wrapper} >
			{
				Object.keys(teams).map((team: string) => {

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
