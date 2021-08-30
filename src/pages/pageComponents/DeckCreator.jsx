import React, { useState, useContext } from 'react';
import { gql, useQuery } from '@apollo/client';
import CreatureCard from '../../game/cards/CreatureCard';
import InstantCard from '../../game/cards/InstantCard';
import ManaCard from '../../game/cards/ManaCard';
import { DeckContext } from '../../context/DeckContext';
import RenderDeck from '../../game/cards/renderComponents/RenderDeck';
import RenderDeck2 from '../../game/cards/renderComponents/RenderDeck2';

const CARDS_QUERY = gql`
	{
		instantCards {
			name
			image
			type
			description
			cost
			damage
			defense
		}
		manaCards {
			name
			image
			type
		}
		creatureCards {
			name
			image
			type
			strength
			defense
			ability
			abilityDescription
			abilityCost
		}
	}
`;

export default function DeckCreator() {
	const { player1Deck, setPlayer1Deck, player2Deck, setPlayer2Deck } =
		useContext(DeckContext);

	const [editPlayer2Deck, setEditPlayer2Deck] = useState(false);

	// TODO: create player 2 dech and add cards to player 2 deck

	const { data, loading, error } = useQuery(CARDS_QUERY);

	const addToDeck = (card) => {
		// add logic to choose if you add to p1 or p2 deck based on same value that render plaer deck 1 or 2
		if (editPlayer2Deck) {
			var newDeck = [...player2Deck];
			newDeck.push(card);
			setPlayer2Deck(newDeck);
		} else {
			var newDeck = [...player1Deck];
			newDeck.push(card);
			setPlayer1Deck(newDeck);
		}
	};

	if (loading) return <h2>loading</h2>;
	if (error) return <h2>ERROR</h2>;
	return (
		<div className='row'>
			<button
				onClick={() => {
					setEditPlayer2Deck(!editPlayer2Deck);
				}}
			>
				toggle p1/p2 deck
			</button>

			{editPlayer2Deck ? (
				<div className='col black-border'>
					<h4> Player 2 deck</h4>
					<RenderDeck2 deckCreator={true} />
				</div>
			) : (
				<div className='col black-border'>
					<h4> Player 1 deck</h4>
					<RenderDeck deckCreator={true} />
				</div>
			)}
			<div className='col'>
				<div className='black-border'>
					<h4>Mana cards</h4>
					<div className='deck-creator-card-list'>
						<br />
						{data.manaCards &&
							data.manaCards.map((card, index) => {
								return (
									<div key={index} className='select-card-wrapper'>
										<ManaCard card={card} />
										<button
											onClick={() => {
												addToDeck(card);
											}}
										>
											select card
										</button>
									</div>
								);
							})}
					</div>
				</div>
				<div className='black-border'>
					<h4>creature cards</h4>
					<div className='deck-creator-card-list'>
						{data.creatureCards &&
							data.creatureCards.map((card, index) => {
								return (
									<div>
										<CreatureCard card={card} key={index} deckCreator={true} />
										<button
											onClick={() => {
												addToDeck(card);
											}}
										>
											Select card
										</button>
									</div>
								);
							})}
					</div>
				</div>
				<div className='black-border'>
					<h4>instant cards</h4>
					<div className='deck-creator-card-list'>
						{data.instantCards &&
							data.instantCards.map((card, index) => {
								return (
									<div className='select-card-wrapper' key={index}>
										<CreatureCard card={card} deckCreator={true} />
										<button
											onClick={() => {
												addToDeck(card);
											}}
										>
											Select card
										</button>
									</div>
								);
							})}
					</div>
				</div>
				{/* 			{player1Deck.map((card, index) => {
					return <p key={index}> {card.name}</p>;
				})} */}
			</div>
		</div>
	);
}
