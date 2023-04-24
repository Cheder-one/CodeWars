function cakes(recipe, available) {
  let copyRecipe = JSON.parse(JSON.stringify(recipe));
  let newAvalible = {};
  let rest = [];

  for (const ing in copyRecipe) {
    newAvalible = {
      ...newAvalible,
      ...(copyRecipe = {
        [ing]: 0,
      }),
    };
  }
  newAvalible = {
    ...newAvalible,
    ...available,
  };

  for (const ing in recipe) {
    const amount = recipe[ing];
    rest.push(newAvalible[ing] / amount);
  }
  return Math.floor(Math.min(...rest));
}

//-------------Refactoring-------------
function cakes(recipe, available) {
  return Object.keys(recipe).every((ing) => available[ing] >= recipe[ing])
    ? Math.min(
        ...Object.keys(recipe).map((ing) => {
          return Math.floor(available[ing] / recipe[ing]);
        })
      )
    : 0;
}

cakes(
  { flour: 500, sugar: 200, eggs: 1 },
  { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
); // Ожидаемый результат: 2

// cakes(
//   { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
//   { sugar: 500, flour: 2000, milk: 2000 }
// ); // Ожидаемый результат: 0
