import React, { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import InstantCard from '../../game/cards/InstantCard';
import CreatureCard from '../../game/cards/CreatureCard';

const INSTANT_CARD_QUERY = gql`
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
	}
`;

const ADD_INSTANT_CARD = gql`
	mutation (
		$name: String!
		$image: String!
		$type: String!
		$description: String!
		$cost: Int!
		$damage: Int!
		$defense: Int!
	) {
		createInstantCard(
			name: $name
			image: $image
			type: $type
			description: $description
			cost: $cost
			damage: $damage
			defense: $defense
		) {
			name
			image
			type
			description
			cost
			damage
			defense
		}
	}
`;

export default function InstantCardCreator() {
	const { data, loading, error } = useQuery(INSTANT_CARD_QUERY);

	const [cardName, setCardName] = useState('');
	const [cardImage, setCardImage] = useState('');
	const [cardDescription, setCardDescription] = useState('');
	const [cardCost, setCardCost] = useState('');
	const [cardDamage, setCardDamage] = useState('');
	const [cardDefense, setCardDefense] = useState('');

	const [createInstantCard, { updatedData, addCardLoading, addCardError }] =
		useMutation(ADD_INSTANT_CARD, {
			refetchQueries: [INSTANT_CARD_QUERY, 'instantCards'],
		});

	const clearForm = () => {
		setCardName('');
		setCardImage('');
		setCardDescription('');
		setCardCost('');
		setCardDamage('');
		setCardDefense('');
	};

	if (loading || addCardLoading) return 'loading';
	if (error || addCardError)
		return <pre>{`error: ${error.message || addCardError.message}`}</pre>;

	return (
		<div className='col'>
			<h4>Create instant card</h4>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
				}}
			>
				<div className='black-border col'>
					<label>Card name</label>
					<input
						type='text'
						value={cardName}
						onChange={(e) => setCardName(e.target.value)}
					/>
					<label>Card image</label>
					<input
						type='text'
						value={cardImage}
						onChange={(e) => setCardImage(e.target.value)}
					/>
					<label>description</label>
					<input
						type='text'
						value={cardDescription}
						onChange={(e) => setCardDescription(e.target.value)}
					/>
					<label>instant cost</label>
					<input
						type='number'
						value={cardCost}
						onChange={(e) => setCardCost(e.target.value)}
					/>
					<label>instant damage</label>
					<input
						type='number'
						value={cardDamage}
						onChange={(e) => setCardDamage(e.target.value)}
					/>
					<label>instant defense</label>
					<input
						type='number'
						value={cardDefense}
						onChange={(e) => setCardDefense(e.target.value)}
					/>
					<button
						onClick={() => {
							createInstantCard({
								variables: {
									name: cardName,
									image: cardImage,
									type: 'instant',
									description: cardDescription,
									cost: parseInt(cardCost),
									damage: parseInt(cardDamage),
									defense: parseInt(cardDefense),
								},
							});
							clearForm();
						}}
					>
						create card
					</button>
				</div>
				<div className='black-border'>
					{data.instantCards.map((instantCard, index) => {
						return (
							<CreatureCard card={instantCard} key={index} deckCreator={true} />
						);
					})}
				</div>
			</div>
		</div>
	);
}
