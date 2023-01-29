import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Battle } from './Pages/Battle';
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import { Start } from './Pages/Start';
import { Market } from './Pages/Market';
import { Races, Team, Teams } from './Classes/Teams/teams';
import { GameProccess } from './Classes/GameClass/Game';
import { IUNITS } from './Classes/Units/Unit';
import { Header } from './components/Header';
import { ACTION } from './Classes/Actions/Actions';



export const GameContext = React.createContext<any>(null);

function App() {

  const [teams, setTeams] = useState<any>({
    [Teams.A]: Team.initTeam(Races.HUMAN, 3),
    [Teams.B]: Team.initTeam(Races.ORK, 3)
  });

  const [game, setGame] = useState<GameProccess>(new GameProccess(teams[Teams.A], teams[Teams.B]));

  const [target, setTarget] = useState<IUNITS>();
  const [forward, setForward] = useState<IUNITS>(teams[game.oddTeams][game.indexAUnit]);

  const [action, setAction] = useState<ACTION>(ACTION.DEFAULT);

  return (
    <BrowserRouter>
      {/* <GameContext.Provider value={{
        teams,
        game,
        target,
        forward,
        setForward,
        setTarget,
        action,
        setAction,
        setGame,
      }}> */}
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

        />} />
        <Route path="/strategy-game/market" element={<Market />} />
        <Route path="/strategy-game/" element={<Start />} />
      </Routes>
      {/* </GameContext.Provider> */}
    </BrowserRouter>
  );
}

export default App;
