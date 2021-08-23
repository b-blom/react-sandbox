import React, { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import InstantCard from '../../game/cards/InstantCard';

const INSTANT_CARD_QUERY = gql`
	{
		instantCards {
			name
			image
			description
		}
	}
`;

const ADD_INSTANT_CARD = gql`
	mutation ($name: String!, $image: String!, $description: String!) {
		createInstantCard(name: $name, image: $image, description: $description) {
			name
			image
			description
		}
	}
`;

export default function InstantCardCreator() {
	const { data, loading, error } = useQuery(INSTANT_CARD_QUERY);

	const [inputCardName, setInputCardName] = useState('');
	const [inputCardImage, setInputCardImage] = useState('');
	const [inputCardDescription, setInputCardDescription] = useState('');

	const [createInstantCard, { updatedData, addCardLoading, addCardError }] =
		useMutation(ADD_INSTANT_CARD, {
			refetchQueries: [INSTANT_CARD_QUERY, 'instantCards'],
		});

	if (loading || addCardLoading) return 'loading';
	if (error || addCardError)
		return <pre>{`error: ${error.message || addCardError.message}`}</pre>;

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-evenly',
			}}
		>
			<div className='card-creator-input'>
				<p>create instant card</p>
				<label>name</label>
				<input
					type='text'
					value={inputCardName}
					onChange={(e) => setInputCardName(e.target.value)}
				/>
				<label>Card image</label>
				<input
					type='text'
					value={inputCardImage}
					onChange={(e) => setInputCardImage(e.target.value)}
				/>
				<label>description</label>
				<input
					type='text'
					value={inputCardDescription}
					onChange={(e) => setInputCardDescription(e.target.value)}
				/>
				{/* TODO: add card damage to input form and in database */}
				<button
					onClick={() =>
						createInstantCard({
							variables: {
								name: inputCardName,
								image: inputCardImage,
								description: inputCardDescription,
							},
						})
					}
				>
					create card
				</button>
			</div>
			<div className='black-border'>
				{data.instantCards.map((instantCard, index) => {
					console.log('instantCard', instantCard);
					return <InstantCard card={instantCard} key={index} />;
				})}
			</div>
		</div>
	);
}
