import React, { useEffect, useReducer, useState } from 'react';

import { snacks } from '../data/data';
import {
  snacksReducer,
  initialState,
} from '../utils/reducer/SnacksDataReducer';
import {
  matchSnacks,
  sortById,
  sortByName,
  sortByPrice,
  sortByWeight,
  sortByCalories,
} from '../utils/helpers/filterFunctions';

const Home = () => {
  const [state, dispatch] = useReducer(snacksReducer, initialState);
  const [allSnacks, setAllSnacks] = useState([...snacks]);

  useEffect(() => {
    dispatch({
      type: 'ALL_PRODUCTS',
      payload: [snacks],
    });
  }, []);

  const filterAndSortSnacks = (snacks, filters) => {
    console.log('rec ->', snacks);
    const matchedSnacks = matchSnacks(snacks, filters.searchQuery);
    const sortedById = sortById(matchedSnacks, filters.idSort);
    const sortedByName = sortByName(sortedById, filters.nameSort);
    const sortedByWeight = sortByWeight(sortedByName, filters.weightSort);
    const sortedByPrice = sortByPrice(sortedByWeight, filters.priceSort);
    const sortedByCalories = sortByCalories(
      sortedByPrice,
      filters.caloriesSort
    );

    return sortedByCalories;
  };

  let displaySnacks;

  displaySnacks = filterAndSortSnacks(allSnacks, state.filters);
  console.log('display snacks -> ', displaySnacks);

  return (
    <div>
      <input type='text' placeholder='Search with Products or Ingredients...' />
      <table>
        <thead>
          <tr>
            <th
              onClick={() =>
                dispatch({ type: 'ID_SORT', payload: 'ascending' })
              }
            >
              ID
            </th>
            <th
              onClick={() =>
                dispatch({ type: 'NAME_SORT', payload: 'ascending' })
              }
            >
              Product Name
            </th>
            <th
              onClick={() =>
                dispatch({ type: 'WEIGHT_SORT', payload: 'ascending' })
              }
            >
              Product Weight
            </th>
            <th
              onClick={() =>
                dispatch({ type: 'PRICE_SORT', payload: 'ascending' })
              }
            >
              Price (INR)
            </th>
            <th
              onClick={() =>
                dispatch({ type: 'CALORIES_SORT', payload: 'ascending' })
              }
            >
              Calories
            </th>
            <th>Ingredients</th>
          </tr>
        </thead>
        <tbody>
          {displaySnacks?.map(
            ({
              id,
              product_name,
              product_weight,
              price,
              calories,
              ingredients,
            }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{product_name}</td>
                <td>{product_weight}</td>
                <td>{price}</td>
                <td>{calories}</td>
                <td>
                  {ingredients?.map((item, index, ingredients) => (
                    <span key={index}>
                      {item}
                      {index === ingredients.length - 1 ? '' : ', '}
                    </span>
                  ))}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
