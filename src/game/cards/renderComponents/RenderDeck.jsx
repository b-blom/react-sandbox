import React, { useContext } from 'react';
import { DeckContext } from '../../../context/DeckContext';
export default function RenderDeck(props) {
	const { player1Deck, setPlayer1Deck } = useContext(DeckContext);

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>no</th>
						<th>name</th>
						<th>image</th>
						<th>type</th>
						{props.deckCreator && <th>remove</th>}
					</tr>
				</thead>
				<tbody>
					{player1Deck.map((card, index) => {
						return (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{card.name}</td>
								<td>{card.image}</td>
								<td>{card.type || 'undefined type'}</td>
								{props.deckCreator && (
									<td>
										<button
											onClick={() => {
												const newDeck = [...player1Deck];
												newDeck.splice(index, 1);
												setPlayer1Deck(newDeck);
											}}
										>
											remove
										</button>
									</td>
								)}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
