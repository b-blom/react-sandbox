import React, { useContext } from 'react';
import { gql, useQuery } from '@apollo/client';
import InstantCard from '../../game/cards/InstantCard';
import ManaCard from '../../game/cards/ManaCard';
import { DeckContext } from '../../context/DeckContext';

const CARDS_QUERY = gql`
	{
		instantCards {
			name
			image
			description
		}
		manaCards {
			name
			image
		}
	}
`;

export default function DeckCreator() {
	const { player1Deck, setPlayer1Deck } = useContext(DeckContext);

	const { data, loading, error } = useQuery(CARDS_QUERY);

	const addToDeck = (card) => {
		var newDeck = [...player1Deck];
		newDeck.push(card);
		setPlayer1Deck(newDeck);
		console.log(newDeck);
	};

	if (loading) return <h2>loading</h2>;
	if (error) return <h2>ERROR</h2>;
	console.log(data);
	return (
		<div>
			<pre>{JSON.stringify(player1Deck)}</pre>
			<div className='deck-creator-card-list'>
				{data.instantCards &&
					data.instantCards.map((card, index) => {
						return (
							<div className='select-card-wrapper' key={index}>
								<InstantCard card={card} />;
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
			<div className='deck-creator-card-list'>
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
			{player1Deck.map((card, index) => {
				return <p key={index}> {card.name}</p>;
			})}
		</div>
	);
}
