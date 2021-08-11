import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

const CAT_QUERY = gql`
  {
    cats {
      name
    }
  }
`;

export default function CreateCard() {
  const { data, loading, error } = useQuery(CAT_QUERY);

  const [cardName, setCardName] = useState('test ');

  const [cats, setcats] = useState(['defaultcat']);

  const fetchCats = () => {
    console.log('I will fetch cats');
  };

  if (loading) return 'loading';

  if (error) return <pre>{error.message}</pre>;

  return (
    <div>
      <p>cardName</p>
      <p> {cardName} </p>
      <input
        type='text'
        value={cardName}
        onChange={(event) => setCardName(event.target.value)}
      />

      <button
        onClick={() => {
          console.log('data', data);
        }}>
        print data
      </button>
      <button onClick={() => fetchCats()}>fetch cats</button>

      {cats.map((cat) => {
        console.log('cat', cat);
      })}

      <button onClick={() => console.log('this wil save card to mongodb')}>
        save to database
      </button>
    </div>
  );
}
