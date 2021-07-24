const fetch = require('node-fetch');
const url = 'http://localhost:4000/graphql';

function fetchUser() {
  // query for the endpoint call
  var query = `{
    user(id: "a") { 
      name 
      age
    }
  }`;

  fetch(url, {
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
    .then((r) => r.json())
    .then((data) => console.log('cata returned: ', data));
}
