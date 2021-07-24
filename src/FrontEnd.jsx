import React, { useState } from 'react';
import APIClient from './APIClient';

export default function FrontEnd() {
  const mockCall = async () => {
    const fetch = require('node-fetch');
    const url = 'http://localhost:4000/graphql';

    var query = `{
      user(id: "a") { 
        name 
        age
      }
    }`;
    console.log('query: ', query);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query,
        /*  variables: {
          input: { id },
        }, */
      }),
    })
      .then(console.log('fetching..'))
      .then((r) => r.json())
      .then((jres) => console.log(jres))
      .then((data) => console.log('cata returned: ', data));

    console.log('fetch complete');
    console.log(response);
    console.log('response done');
  };
  const [user, setuser] = useState(mockCall);
  return (
    <div>
      <p>
        User: <strong>{user && user.name}</strong>
      </p>
    </div>
  );
}
