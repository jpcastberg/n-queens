/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) { //save variables that don't change with recursion
  var board = new Board({'n': n});
  var boardRows = board.rows();
  var solution = undefined;
  var piecesPlaced = 0;
  var placeRooksPosition = function (rowIndex, colIndex) { //recursion
    for (var i = 0; i < board.rows().length; i++) {
      //place piece
      board.togglePiece(rowIndex, i);
      piecesPlaced++;
      //run all checks
      //if all checks pass, 
      if (!board.hasAnyRooksConflicts()) {
        if (piecesPlaced === n) { //base case
          solution = board.rows();
          return solution;
        } else {
          //call placeRooksPosition
          //iterate through matrix
          return placeRooksPosition(rowIndex + 1, 0);
        }
      }
      //remove toggled piece
      board.togglePiece(rowIndex, i);
      //decrement piecesPlaced
      piecesPlaced--;
      //continue placing piece until tests passed (row & column conflicts)
      //if pieces placed < n, place another piece
    }     
  }; 
  solution = placeRooksPosition(0, 0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var piecesPlaced = 0;
  var board = new Board({'n': n}); 
  var boardRows = board.rows();
  var findSolutionsFor = function (row, column) { //recursive function
    for (var i = 0; i < board.rows().length; i++) {
      board.togglePiece(row, i);    
      piecesPlaced++;  
      if (!board.hasAnyRooksConflicts()) {
        if (piecesPlaced === n) {
          solutionCount++;
        } else {
          findSolutionsFor(row + 1, 0); // call findSolutionsFor if pieces placed is < n, go down one row
          //do not have to return because only incrementing solution count
        }
      }
      board.togglePiece(row, i); //untoggle
      piecesPlaced--;
    }
  };
  findSolutionsFor(0, 0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
}; 


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
