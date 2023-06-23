export const matchSnacks = (snacks, searchQuery) => {
  if (searchQuery) {
    return snacks.filter(({ product_name }) =>
      product_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  } else {
    return snacks;
  }
};

export const sortById = (snacks, idSort) =>
  idSort
    ? snacks.sort((a, b) =>
        idSort === 'ascending' ? a.id - b.id : b.id - a.id
      )
    : snacks;

export const sortByName = (snacks, nameSort) =>
  nameSort
    ? snacks.sort((a, b) =>
        nameSort === 'ascending'
          ? a.product_name - b.product_name
          : b.product_name - a.product_name
      )
    : snacks;

export const sortByWeight = (snacks, weightSort) =>
  weightSort
    ? snacks.sort((a, b) =>
        weightSort === 'ascending'
          ? a.product_weight - b.product_weight
          : b.product_weight - a.product_weight
      )
    : snacks;

export const sortByPrice = (snacks, priceSort) =>
  priceSort
    ? snacks.sort((a, b) =>
        priceSort === 'ascending' ? a.price - b.price : b.price - a.price
      )
    : snacks;

export const sortByCalories = (snacks, caloriesSort) =>
  caloriesSort
    ? snacks.sort((a, b) =>
        caloriesSort === 'ascending'
          ? a.calories - b.calories
          : b.calories - a.calories
      )
    : snacks;
