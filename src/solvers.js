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
  var solution = [[1]]; 
  var piecesPlaced = 0;
  var placeRooksPosition = function (rowIndex, colIndex) { //recursion
    //place piece
    this.togglePiece(rowIndex, colIndex);
    //run all checks
    //if all checks pass, 
    if(!this.hasAnyRooksConflicts()) {
      if (piecesPlaced === n) { //base case
        solution = this.rows();
      } else {
        //iterate through matrix
        for (var i = 0; i = ) // finish for loop
      }
    }
    //else if board has conflicts remove toggle 
    //call placeRooksPosition on next toggle piece
    //continue placing piece until tests passed (row & column conflicts)
    //if pieces placed < n -> place another piece
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

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
