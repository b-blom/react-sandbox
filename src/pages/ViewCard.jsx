import React from 'react';
import { useQuery, gql } from '@apollo/client';

const CAT_QUERY = gql`
  {
    cats {
      name
    }
  }
`;

export default function ViewCard() {
  const { data, loading, error } = useQuery(CAT_QUERY);

  if (loading) return 'loading';

  if (error) return <pre>{`error: ${error.message}`}</pre>;

  return (
    <div>
      {data.cats.map((cat) => {
        return <p>{cat.name}</p>;
      })}
    </div>
  );
}
