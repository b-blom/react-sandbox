import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './game/Home';
import ContentCreator from './pages/ContentCreator';
import DeckCreator from './pages/pageComponents/DeckCreator';
import Arena from './game/Arena';
import { DeckContext } from './context/DeckContext';
import ArenaTester from './pages/ArenaTester';

export default function GameRouter(props) {
  const [activePlayer, setActivePlayer] = useState('player1');
  const [actionMessage, setActionMessage] = useState('actionMessage');

  const [player1Name, setPlayer1Name] = useState(props.player1Name);
  const [player1Hp, setPlayer1Hp] = useState(20);
  const [player1Deck, setPlayer1Deck] = useState([]);
  const [player1Hand, setPlayer1Hand] = useState([]);
  const [player1BattlefieldMana, setPlayer1BattlefieldMana] = useState([]);
  const [player1BattlefieldInstant, setPlayer1BattlefieldInstant] =
    useState(null);
  const [player1BattlefieldCreatures, setPlayer1BattlefieldCreatures] =
    useState([]);

  const [dummyDeck, setDummyDeck] = useState([]);

  const [player2Name, setPlayer2Name] = useState(props.player2Name);
  const [player2Hp, setPlayer2Hp] = useState(20);
  const [player2Deck, setPlayer2Deck] = useState([]);
  const [player2Hand, setPlayer2Hand] = useState([]);
  const [player2BattlefieldMana, setPlayer2BattlefieldMana] = useState([]);
  const [player2BattlefieldInstant, setPlayer2BattlefieldInstant] =
    useState(null);
  const [player2BattlefieldCreatures, setPlayer2BattlefieldCreatures] =
    useState([]);
  return (
    <DeckContext.Provider
      value={{
        activePlayer,
        setActivePlayer,
        actionMessage,
        setActionMessage,

        player1Name,
        player1Hp,
        setPlayer1Hp,
        player1Deck,
        setPlayer1Deck,
        player1Hand,
        setPlayer1Hand,
        player1BattlefieldMana,
        setPlayer1BattlefieldMana,
        player1BattlefieldInstant,
        setPlayer1BattlefieldInstant,
        player1BattlefieldCreatures,
        setPlayer1BattlefieldCreatures,

        player2Name,
        player2Hp,
        setPlayer2Hp,
        player2Deck,
        setPlayer2Deck,
        player2Hand,
        setPlayer2Hand,
        player2BattlefieldMana,
        setPlayer2BattlefieldMana,
        player2BattlefieldInstant,
        setPlayer2BattlefieldInstant,
        player2BattlefieldCreatures,
        setPlayer2BattlefieldCreatures,
      }}>
      <Router>
        <div className='nav-bar'>
          <ul
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              padding: '15px',
              borderBottom: '3px solid black',
            }}>
            <button
              id='generateDummyDeck'
              onClick={() => {
                const dummyDeckLocal = [
                  {
                    __typename: 'ManaCard',
                    image: '🌌',
                    name: 'Space',
                    type: 'mana',
                    cardGuid: '680a5a6e-526e-4cf4-ade9-235a17287222',
                  },
                  {
                    __typename: 'ManaCard',
                    image: '🔥',
                    name: 'Fire',
                    type: 'mana',
                    cardGuid: '95d0f25b-c65e-4523-a79b-3b5cb433eff3',
                  },
                  {
                    __typename: 'ManaCard',
                    image: '🍰',
                    name: 'Cake',
                    type: 'mana',
                    cardGuid: '3ca8eb3c-0609-4171-babf-718acf04a429',
                  },
                  {
                    __typename: 'ManaCard',
                    image: '🌌',
                    name: 'Space',
                    type: 'mana',
                    cardGuid: '4ba14802-ce31-40f0-8e5f-574d23c41d56',
                  },
                  {
                    __typename: 'CreatureCard',
                    ability: 'Purr',
                    abilityCost: 0,
                    abilityDescription: 'All attacks are absorbed as HP',
                    defense: 1,
                    image: '🐈',
                    name: 'Cat',
                    strength: 1,
                    type: 'creature',
                    cardGuid: 'b57c7d41-99bd-4e9a-8ffb-4997ca74dab2',
                  },
                  {
                    __typename: 'CreatureCard',
                    ability: 'Purr',
                    abilityCost: 0,
                    abilityDescription: 'All attacks are absorbed as HP',
                    defense: 1,
                    image: '🐈',
                    name: 'Cat',
                    strength: 1,
                    type: 'creature',
                    cardGuid: '37a23776-29ba-4441-bd4d-3cf8cc6f8986',
                  },
                  {
                    __typename: 'InstantCard',
                    cost: 1,
                    damage: 3,
                    defense: 0,
                    description: 'deal 3 damage',
                    image: '⚡',
                    name: 'bolt',
                    type: 'instant',
                    cardGuid: '046e5b46-ffd9-405d-9f3f-e1f764650b63',
                  },
                  {
                    __typename: 'InstantCard',
                    cost: 1,
                    damage: 3,
                    defense: 0,
                    description: 'deal 3 damage',
                    image: '⚡',
                    name: 'bolt',
                    type: 'instant',
                    cardGuid: 'c5f2eaca-735f-46c7-88a4-7e2a2504bfa6',
                  },
                  {
                    __typename: 'CreatureCard',
                    ability: 'droplet',
                    abilityCost: 0,
                    abilityDescription:
                      'destroy everything in your path, basically forever',
                    defense: 9999,
                    image: '👽',
                    name: 'alien',
                    strength: 9999,
                    type: 'creature',
                    cardGuid: 'f82d970b-2018-46aa-ae8e-25dba9faa484',
                  },
                  {
                    __typename: 'CreatureCard',
                    ability: 'droplet',
                    abilityCost: 0,
                    abilityDescription:
                      'destroy everything in your path, basically forever',
                    defense: 9999,
                    image: '👽',
                    name: 'alien',
                    strength: 9999,
                    type: 'creature',
                    cardGuid: '7deb26e9-1c1d-4b7f-a09e-7fcdbd1e0954',
                  },
                  {
                    __typename: 'CreatureCard',
                    ability: 'poop',
                    abilityCost: 0,
                    abilityDescription:
                      'Poop on enemy. They must wash up nad lose their turn',
                    defense: 2,
                    image: '🐦',
                    name: 'bird',
                    strength: 2,
                    type: 'creature',
                    cardGuid: 'cd5e58f8-2b94-48d1-8a60-3e1ffac0bd16',
                  },
                  {
                    __typename: 'CreatureCard',
                    ability: 'poop',
                    abilityCost: 0,
                    abilityDescription:
                      'Poop on enemy. They must wash up nad lose their turn',
                    defense: 2,
                    image: '🐦',
                    name: 'bird',
                    strength: 2,
                    type: 'creature',
                    cardGuid: 'dbeac01d-825c-4966-ab2a-0d9e2ed9e82d',
                  },
                  {
                    __typename: 'InstantCard',
                    cost: 1,
                    damage: 3,
                    defense: 0,
                    description: 'deal 3 damage',
                    image: '⚡',
                    name: 'bolt',
                    type: 'instant',
                    cardGuid: 'a78d98a3-455d-4e47-92d9-4064373a18d7',
                  },
                  {
                    __typename: 'InstantCard',
                    cost: 1,
                    damage: 3,
                    defense: 0,
                    description: 'deal 3 damage',
                    image: '⚡',
                    name: 'bolt',
                    type: 'instant',
                    cardGuid: 'bd7c7a17-332b-47b3-a973-fe73682b990b',
                  },
                  {
                    __typename: 'InstantCard',
                    cost: 3,
                    damage: 9999,
                    defense: 0,
                    description: 'melt everything',
                    image: '🌋',
                    name: 'lava',
                    type: 'instant',
                    cardGuid: 'bff8da7b-8f9b-4dd1-b852-8dcdf57bc6a3',
                  },
                  {
                    __typename: 'InstantCard',
                    cost: 3,
                    damage: 9999,
                    defense: 0,
                    description: 'melt everything',
                    image: '🌋',
                    name: 'lava',
                    type: 'instant',
                    cardGuid: '1c3cd9e4-c46d-4e2f-8eb5-ac7da49fec0e',
                  },
                  {
                    __typename: 'InstantCard',
                    cost: 3,
                    damage: 9,
                    defense: 0,
                    description: 'rain stars on all opponents',
                    image: '🌠',
                    name: 'falling star',
                    type: 'instant',
                    cardGuid: 'c1b5dd17-e070-4125-8443-300525d99110',
                  },
                  {
                    __typename: 'InstantCard',
                    cost: 3,
                    damage: 9,
                    defense: 0,
                    description: 'rain stars on all opponents',
                    image: '🌠',
                    name: 'falling star',
                    type: 'instant',
                    cardGuid: '6c7ebb3c-835d-4f88-8f62-dcf0b4cd54e7',
                  },
                ];

                setDummyDeck(dummyDeckLocal);
                setPlayer1Deck(dummyDeckLocal);
                setPlayer2Deck(dummyDeckLocal);
                setPlayer1Hand(dummyDeckLocal);
                setPlayer2Hand(dummyDeckLocal);
              }}>
              Init testing mode
            </button>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/createcards'>Create card</Link>
            </li>
            <li>
              <Link to='/createdeck'>Create deck</Link>
            </li>
            <li>
              <Link to='/arena'>Arena</Link>
            </li>
            <li>
              <Link to='/arenav2'>ArenaV2</Link>
            </li>
            <li>
              <button className='arena-button' onClick={() => props.logout()}>
                log out
              </button>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/createcards'>
            <ContentCreator />
          </Route>
          <Route path='/createdeck'>
            <DeckCreator />
          </Route>
          <Route path='/arena'>
            <Arena />
          </Route>
          <Route path='/arenav2'>
            <ArenaTester />
          </Route>
        </Switch>
      </Router>
    </DeckContext.Provider>
  );
}
