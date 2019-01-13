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

window.findNRooksSolution = function(n) {
  //save variables that don't change with recursion
  var board = new Board({'n': n});
  var solution = board.rows();
  var piecesPlaced = 0;
  var placeRook = function (rowIndex, colIndex) { //recursion
    for (var i = 0; i < n; i++) {
      //place piece
      board.togglePiece(rowIndex, i);
      piecesPlaced++;
      //run all checks
      //if all checks pass, 
      if (!board.hasRowConflictAt(rowIndex) && !board.hasColConflictAt(i)) {
        if (piecesPlaced === n) { //base case
          return;
        } else {
          //call placeRook
          //iterate through matrix
          placeRook(rowIndex + 1, 0);
          if (piecesPlaced === n) {
            return;
          }
        }
      }
      //remove toggled piece
      board.togglePiece(rowIndex, i);
      piecesPlaced--;
      //decrement piecesPlaced
      //continue placing piece until tests passed (row & column conflicts)
      //if pieces placed < n, place another piece
    }     
  }; 
  placeRook(0, 0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var piecesPlaced = 0;
  var board = new Board({'n': n});
  
  var placeRook = function (row, column) { //recursive function
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);    
      piecesPlaced++;
      if (!board.hasRowConflictAt(row) && !board.hasColConflictAt(i)) {
        if (piecesPlaced === n) {
          solutionCount++;
        } else {
          placeRook(row + 1, 0); // call placeRook if pieces placed is < n, go down one row
          //do not have to return because only incrementing solution count
        }
      }
      board.togglePiece(row, i); //untoggle
      piecesPlaced--;
    }
  };
  placeRook(0, 0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
}; 


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({'n': n});
  var solution = board.rows();
  var piecesPlaced = 0;
  var getMajorDiag = board._getFirstRowColumnIndexForMajorDiagonalOn;
  var getMinorDiag = board._getFirstRowColumnIndexForMinorDiagonalOn;
  
  var placeQueensPosition = function (rowIndex, colIndex) { //recursion
    for (var i = 0; i < board.rows().length; i++) {
      //place piece
      board.togglePiece(rowIndex, i);
      piecesPlaced++;
      var majorDiag = getMajorDiag(rowIndex, i);
      var minorDiag = getMinorDiag(rowIndex, i);
      //run all checks
      //if all checks pass, 
      if (!board.hasRowConflictAt(rowIndex) && !board.hasColConflictAt(i) && !board.hasMinorDiagonalConflictAt(minorDiag) && !board.hasMajorDiagonalConflictAt(majorDiag)) {
        if (piecesPlaced === n) { //base case
          return;
        } else {
          //call placeQueensPosition
          //iterate through matrix
          placeQueensPosition(rowIndex + 1, 0);
          if (piecesPlaced === n) {
            return;
          }
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
  placeQueensPosition(0, 0);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  //debugger;
  var solutionCount = 0;
  if (n === 0) {
    solutionCount = 1;
  }
  var piecesPlaced = 0;
  var board = new Board({'n': n}); 
  var boardRows = board.rows();
  var getMajorDiag = board._getFirstRowColumnIndexForMajorDiagonalOn;
  var getMinorDiag = board._getFirstRowColumnIndexForMinorDiagonalOn;
  
  var findSolutionsFor = function (row, column) { //recursive function
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);    
      piecesPlaced++;
      var majorDiag = getMajorDiag(row, i);
      var minorDiag = getMinorDiag(row, i);
       
      if (!board.hasRowConflictAt(row) && !board.hasColConflictAt(i) && !board.hasMinorDiagonalConflictAt(minorDiag) && !board.hasMajorDiagonalConflictAt(majorDiag)) {
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
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};