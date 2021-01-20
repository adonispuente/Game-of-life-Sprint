// #Make a cell class
// #Make a Grid class
// #be able to populate cells
// #implement the rules of conway on said cells

function make2DArray(cols, rows) {
  let arr = new Array();
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

let grid;
function setup() {
  grid = make2DArray(25, 25);
  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 25; j++) {
      grid[i][j] = floor(random(2));
    }
  }
}
