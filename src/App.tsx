import React, {useState} from 'react';
import './App.css';
import {Battle} from './Pages/Battle';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {Start} from './Pages/Start';
import {Market} from './Pages/Market';
import {Teams, TypeTeam} from './Classes/Teams/teams';
import {GameProccess} from './Classes/GameClass/Game';
import {Header} from './components/Header';
import {ACTION} from './Classes/Actions/Actions';
import {Unit} from './Classes/Units/Unit';


function App() {

  const [teams, setTeams] = useState<TypeTeam>({
    [Teams.A]: [],
    [Teams.B]: []
  });

  const [game, setGame] = useState<GameProccess>(new GameProccess(teams[Teams.A], teams[Teams.B]));

  const [target, setTarget] = useState<Unit>();
  const [forward, setForward] = useState<Unit>(teams[game.oddTeams][game.indexAUnit]);

  const [action, setAction] = useState<ACTION>(ACTION.DEFAULT);

  return (
    <BrowserRouter>

      <Header />
      <Routes>
        <Route path="/strategy-game/game" element={<Battle
          teams={teams}
          game={game}
          target={target}
          forward={forward}
          setForward={setForward}
          setTarget={setTarget}
          action={action}
          setAction={setAction}
          setGame={setGame}
          setTeams={setTeams}
        />} />
        <Route path="/strategy-game/market" element={<Market
          teams={teams}
          setTeams={setTeams}
        />} />
        <Route path="/strategy-game/" element={<Start />} />
        <Route path="*" element={<div>
          <h1>404: Not Found</h1>
          <Link to="/strategy-game/">Home</Link>
        </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
