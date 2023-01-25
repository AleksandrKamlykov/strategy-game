import React, { FC, useState } from 'react';
import { GameProps } from '.';
import clsses from './style.module.css';
import { Human, IHuman } from '../../Objects/Units/humans';
import { UnitCard } from '../UnitCard';
import { IOrk, Ork } from '../../Objects/Units/orks';
import { GameProccess } from '../../Objects/Game/Game';
import { Team, Teams } from '../../Objects/Teams/teams';


const mocLeft = [
	new Human("Alex", 10, 5, 2, 10),
	new Human("Alex2", 12, 4, 2, 10),
	new Human("Alex3", 8, 3, 2, 10),
];
const mocRight = [
	new Ork("Oleg", 10, 5, 2, 10),
	new Ork("Oleg2", 12, 4, 2, 10),
	new Ork("Oleg3", 8, 3, 2, 10),
];




export const Game: FC<GameProps> = (props) => {


	const [leftTeams, setLeftTeams] = useState<any[]>(Team.initTeam(Human, 3, "Human"));
	const [rightTeams, setRightTeams] = useState<any[]>(Team.initTeam(Ork, 3, "Ork"));

	const [game, setGame] = useState<GameProccess>(new GameProccess(leftTeams, rightTeams));

	const [target, setTarget] = useState<IHuman | IOrk>();


	function nextOdd() {
		game.nextOdd();
	}

	return <div className={clsses.wrapper} >
		<div>
			<h2>{leftTeams[0].race}</h2>
			{
				leftTeams?.map((item: IHuman | IOrk) => {

					return <UnitCard key={item.name}
						data={item}
						target={target}
						setTarget={setTarget}
						team={Teams.A}
						game={game}
						nextOdd={nextOdd} />;
				})
			}
		</div>
		<h2>Turn is team: {game.oddTeams}</h2>
		<div>
			<h2>{rightTeams[0].race}</h2>
			{
				rightTeams?.map((item: IHuman | IOrk) => {

					return <UnitCard
						key={item.name}
						data={item}
						target={target}
						setTarget={setTarget}
						team={Teams.B}
						game={game}
						nextOdd={nextOdd} />;
				})
			}
		</div>
	</div>;
};
