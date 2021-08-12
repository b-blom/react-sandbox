import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const ADD_CAT = gql`
  mutation AddCat($name: String!) {
    createCat(name: $name) {
      id
      name
    }
  }
`;

export default function AddCat() {
  let input;
  const [catInput, setcatInput] = useState('initialState');
  const [addCat, { data, loading, error }] = useMutation(ADD_CAT);

  if (loading) return 'Submitting';
  if (error) return <pre>{`ERROR: ${error.message}`}</pre>;

  return (
    <div>
      <input
        type='text'
        value={catInput}
        onChange={(e) => setcatInput(e.target.value)}
      />
      <button
        onClick={() => {
          console.log(catInput);
          console.log(ADD_CAT);
          addCat({ variables: { name: catInput } });
        }}>
        add cat
      </button>
    </div>
  );
}
