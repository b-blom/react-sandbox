import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import InstantCard from '../../game/cards/InstantCard';
import ManaCard from '../../game/cards/ManaCard';

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
	const { data, loading, error } = useQuery(CARDS_QUERY);
	const [playerDeck, setPlayerDeck] = useState([]);

	const addToDeck = (card) => {
		var newDeck = [...playerDeck];
		newDeck.push(card);
		setPlayerDeck(newDeck);
	};

	if (loading) return <h2>loading</h2>;
	if (error) return <h2>ERROR</h2>;
	console.log(data);
	return (
		<div>
			<div>
				{data.instantCards &&
					data.instantCards.map((card) => {
						return <InstantCard card={card} />;
					})}
			</div>
			<div>
				{data.manaCards &&
					data.manaCards.map((card) => {
						return (
							<div>
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
			{playerDeck.map((card) => {
				return <p>{card.name}</p>;
			})}
		</div>
	);
}
