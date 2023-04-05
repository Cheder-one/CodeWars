const dirReduc0 = (arr) => {
  const exclusions = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST",
  };

  const delAdjOppositeElems = () => {
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
      const nextEl = arr[i + 1];
      const antiEl = exclusions[el];

      if (nextEl === antiEl) {
        arr.splice(i, 2);
        delAdjOppositeElems();
      }
    }
  };
  delAdjOppositeElems();
  return arr;
};

//-------------Refactoring-------------
const dirReduc1 = (arr) => {
  const exclusions = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST",
  };

  const delAdjOppositeElems = (arr) => {
    arr.forEach((el, i) => {
      const nextEl = arr[i + 1];
      const antiEl = exclusions[el];

      if (nextEl === antiEl) {
        arr.splice(i, 2);
        delAdjOppositeElems(arr);
      }
    });
  };

  const reduceDirections = (arr) => {
    delAdjOppositeElems(arr);
    return arr;
  };
  return reduceDirections(arr);

  // Ну или можно просто
  delAdjOppositeElems();
  return arr;
};

dirReduc1(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]); // [];
dirReduc1(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]); // ["WEST"];

// dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]); // ["NORTH", "WEST", "SOUTH", "EAST"];
// dirReduc(["NORTH", "NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST", "SOUTH"]); // [];

//-------------Refactoring-------------
function dirReduc2(arr) {
  let str = arr.join("");
  const pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;

  while (pattern.test(str)) {
    str = str.replace(pattern, "");
  }
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}
dirReduc2(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]); // ["WEST"];
