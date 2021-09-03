import React, { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import CreatureCard from '../../game/cards/CreatureCardV2';

const CREATURE_CARD_QUERY = gql`
	{
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
const ADD_CREATURE_CARD = gql`
	mutation (
		$name: String!
		$image: String!
		$type: String!
		$strength: Int!
		$defense: Int!
		$ability: String!
		$abilityDescription: String!
		$abilityCost: Int!
	) {
		createCreatureCard(
			name: $name
			image: $image
			type: $type
			strength: $strength
			defense: $defense
			ability: $ability
			abilityDescription: $abilityDescription
			abilityCost: $abilityCost
		) {
			name
			image
			type
			strength
			defense
			ability
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
	const [cardAbilityDescription, setCardAbilityDescription] = useState('');
	const [cardAbilityCost, setCardAbilityCost] = useState('');

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
		setCardAbilityDescription('');
		setCardAbilityCost('');
	};

	return (
		<div className='col'>
			<h4>create creature card</h4>
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
						type='number'
						name='cardStrength'
						value={cardStrength}
						onChange={(event) => setCardStrength(event.target.value)}
					/>
					<label htmlFor='defenseInput'>creature defense</label>
					<input
						type='number'
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
					<label htmlFor='creatureAbilityDescription'>
						creature ability description
					</label>
					<input
						type='text'
						name='cardAbilityDescription'
						value={cardAbilityDescription}
						onChange={(event) => setCardAbilityDescription(event.target.value)}
					/>
					<label htmlFor='abilityCost'>ability cost</label>
					<input
						type='number'
						name='cardAbilityCost'
						value={cardAbilityCost}
						onChange={(event) => setCardAbilityCost(event.target.value)}
					/>

					<button
						onClick={() => {
							createCreatureCard({
								variables: {
									name: cardName,
									image: cardImage,
									type: 'creature',
									strength: parseInt(cardStrength),
									defense: parseInt(cardDefense),
									ability: cardAbility,
									abilityDescription: cardAbilityDescription,
									abilityCost: parseInt(cardAbilityCost),
								},
							});
							clearForm();
						}}
					>
						create card
					</button>
				</div>
				<div className='black-border'>
					{data.creatureCards.map((creatureCard, index) => {
						return (
							<CreatureCard
								card={creatureCard}
								key={index}
								deckCreator={true}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
