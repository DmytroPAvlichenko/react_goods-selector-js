import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [title, setTitle] = useState('Jam');

  return(
    <main className="section container">

    <h1 className="title is-flex is-align-items-center">
      {title !==  'no select' ? (title + ' is selected')
      : ( 'No goods selected' )}

      {title !== 'no select' && (
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={() => setTitle('no select')}
          />
      )}
    </h1>

    <table className="table">
      <tbody>
        {goods.map(good => (
          <tr 
          data-cy="Good"
           key={good}
           className = {`${title === good ? 'has-background-success-light' : ''}`}
           >
          <td>
            {title !== good ? (
              <button
              data-cy="AddButton"
               type="button"
                className="button"
                onClick={() => {
                  setTitle(good);
                }}
                >
               +
             </button>
             ) : (<button
              data-cy="RemoveButton"
              type="button"
              className="button is-info"
              
              onClick={() => {
                setTitle('no select')
              }}
              >
              -
            </button>)
            }
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            {good}
          </td>
        </tr>
        ))}
      </tbody>
    </table>
  </main>
)};
