import React, { useState } from 'react';

export default function CommandAndControl() {
  const [data, setdata] = useState({
    array: [1, 2, 3],
    string: 'string',
    number: 3,
  });

  return (
    <div>
      <h3>Command and control</h3>
      <p>
        string: <strong>{data.string}</strong>{' '}
      </p>
      <p>
        number: <strong>{data.number}</strong>{' '}
      </p>
      <p>
        array:
        <strong>
          <ul>
            {data.array &&
              data.array.map((number) => {
                return <li>{number}</li>;
              })}
          </ul>
        </strong>
      </p>
    </div>
  );
}
