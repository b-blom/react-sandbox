import React, { useContext } from 'react';
import { DeckContext } from '../../../context/DeckContext';
export default function RenderDeck() {
	const { player1Deck } = useContext(DeckContext);

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>card number</th>
						<th>card name</th>
						<th>card type</th>
					</tr>
				</thead>
				<tbody>
					{player1Deck.map((card, index) => {
						return (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{card.name}</td>
								<td>{card.type || 'undefined type'}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
