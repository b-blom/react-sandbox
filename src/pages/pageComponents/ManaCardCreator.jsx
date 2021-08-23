import React, { useState } from 'react';

import { gql, useQuery, useMutation } from '@apollo/client';
import ManaCard from '../../game/cards/ManaCard';

const MANA_CARD_QUERY = gql`
	{
		manaCards {
			name
			image
			type
		}
	}
`;

const ADD_MANA_CARD = gql`
	mutation ($name: String!, $image: String!, $type: String!) {
		createManaCard(name: $name, image: $image, type: $type) {
			name
			image
			type
		}
	}
`;

export default function ManaCardCreator() {
	const { data, loading, error } = useQuery(MANA_CARD_QUERY);

	const [inputCardName, setInputCardName] = useState('');
	const [inputCardType, setInputCardType] = useState('');
	const [inputCardImage, setInputCardImage] = useState('');

	const [createManaCard, { updatedData, addCardLoading, addCardError }] =
		useMutation(ADD_MANA_CARD, {
			refetchQueries: [MANA_CARD_QUERY, 'manaCards'],
		});

	const clearForm = () => {
		setInputCardName('');
		setInputCardType('');
		setInputCardImage('');
	};

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
				<p>create mana card</p>
				<label>Card name</label>
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
				<label>Card type</label>
				<input
					type='text'
					value={inputCardType}
					onChange={(e) => setInputCardType(e.target.value)}
				/>
				<button
					onClick={() => {
						createManaCard({
							variables: {
								name: inputCardName,
								type: inputCardType,
								image: inputCardImage,
							},
						});
						clearForm();
					}}
				>
					create card
				</button>
			</div>
			<div className='black-border'>
				{data.manaCards.map((manaCard, index) => {
					return <ManaCard card={manaCard} key={index} />;
				})}
			</div>
		</div>
	);
}
