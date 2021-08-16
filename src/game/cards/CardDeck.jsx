import React from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';

import ManaCard from './ManaCard';

//get card query
const MANA_CARD_QUERY = gql`
  {
    manaCards {
      name
      image
      type
    }
  }
`;

export default function CardDeck() {
  // fetch data
  const { data, loading, error } = useQuery(MANA_CARD_QUERY);

  if (loading) return 'loading';
  if (error) return <pre>{`error: ${error.message}`}</pre>;
  let marginLeft = 0;
  return (
    <div>
      <div className='card-deck-header'>Card Deck</div>
      <div className='card-deck-body'>
        {console.log(data)}
        {data &&
          data.manaCards.map((card, index) => {
            console.log('index', index);
            marginLeft = marginLeft + 40;
            return (
              <div
                className='deck-card-styler'
                style={{
                  position: 'absolute',
                  zIndex: index,
                  marginLeft: '' + marginLeft + 'px',
                }}>
                <ManaCard
                  card={card}
                  id={index}
                  style={{ height: '120px', width: '90px', color: 'red' }}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

/* card deck styling
partial overlap
use z index and marginleft increment on index and / or custom incrementor

styling div
flex row (or just row?)
*/
