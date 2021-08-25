import React, { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import CreatureCardV2 from '../../game/cards/CreatureCardV2';

const CREATURE_CARD_QUERY = gql`
	{
		creatureCards {
			name
		}
	}
`;
/* 
const ADD_CREATURE_CARD = gql`
	mutation (
		$name: String!
		$image: String!
		$type: String!
		$strength: Int!
		$defense: Int!
		$ability: String!
	) {
		createCreatureCard(
			name: $name
			image: $image
			type: $type
			strength: 1
			defense: $defense
			ability: $ability
		) {
			name
			image
			type
		}
	}
`; */

const ADD_CREATURE_CARD = gql`
	mutation ($name: String!) {
		createCreatureCard(name: $name) {
			name
		}
	}
`;

export default function CreatureCardCreator() {
	const { data, loading, error } = useQuery(CREATURE_CARD_QUERY);

	const [cardName, setCardName] = useState('');
	const [cardImage, setCardImage] = useState('');
	const [cardStrength, setCardStrength] = useState('');
	const [cardDefense, setCardDefense] = useState('');
	const [cardAbility, setCardAbility] = useState('');

	const [createCreatureCard, { updatedData, addCardLoading, addCardError }] =
		useMutation(ADD_CREATURE_CARD, {
			refetchQueries: [CREATURE_CARD_QUERY, 'creatureCards'],
		});

	if (loading || addCardLoading) return 'loading';
	if (error || addCardError)
		return <pre>{`${error.message || addCardError.message}`}</pre>;

	const clearForm = () => {
		setCardName('');
		setCardImage('');
		setCardStrength('');
		setCardDefense('');
		setCardAbility('');
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-evenly',
			}}
		>
			<div className='card-creator-input'>
				<p>create creature card</p>
				<label>Card name</label>
				<input
					type='text'
					name='cardName'
					value={cardName}
					onChange={(event) => setCardName(event.target.value)}
				/>
				<label>Card image</label>
				<input
					type='text'
					name='cardImage'
					value={cardImage}
					onChange={(event) => setCardImage(event.target.value)}
				/>
				<label htmlFor='strengthInput'>creature strength</label>
				<input
					type='text'
					name='cardStrength'
					value={cardStrength}
					onChange={(event) => setCardStrength(event.target.value)}
				/>
				<label htmlFor='defenseInput'>creature defense</label>
				<input
					type='text'
					name='cardDefense'
					value={cardDefense}
					onChange={(event) => setCardDefense(event.target.value)}
				/>
				<label htmlFor='creatureAbility'>creature ability</label>
				<input
					type='text'
					name='cardAbility'
					value={cardAbility}
					onChange={(event) => setCardAbility(event.target.value)}
				/>
				<button
					onClick={() => {
						console.log('strength', cardStrength);
						createCreatureCard({
							variables: {
								name: cardName,
								image: cardImage,
								type: 'creature',
								stength: cardStrength,
								defense: cardDefense,
								ability: cardAbility,
							},
						});
						//	clearForm();
					}}
				>
					create card
				</button>
			</div>
			<div className='black-border'>
				{' '}
				{data.creatureCards.map((creatureCard, index) => {
					return <CreatureCardV2 card={creatureCard} key={index} />;
				})}{' '}
			</div>
		</div>
	);
}
