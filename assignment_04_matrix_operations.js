// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================



const readlineSync = require('readline-sync');

// Reads an M x N matrix from the user, row by row
function readMatrix(rows, cols) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const line = readlineSync.question(`Enter row ${i + 1}: `);
    const row = line.split(' ').map(Number);
    matrix.push(row);
  }
  return matrix;
}

// Displays a matrix in a neat, aligned grid format
function displayMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join('  '));
  }
}

// Computes the transpose of a matrix
function transpose(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  for (let j = 0; j < cols; j++) {
    const newRow = [];
    for (let i = 0; i < rows; i++) {
      newRow.push(matrix[i][j]);
    }
    result.push(newRow);
  }

  return result;
}

// Adds two matrices of the same size
function addMatrices(a, b) {
  const rows = a.length;
  const cols = a[0].length;
  const result = [];

  for (let i = 0; i < rows; i++) {
    const newRow = [];
    for (let j = 0; j < cols; j++) {
      newRow.push(a[i][j] + b[i][j]);
    }
    result.push(newRow);
  }

  return result;
}

// Multiplies matrix A (M x N) by matrix B (N x P)
function multiplyMatrices(a, b) {
  const m = a.length;
  const n = b.length;
  const p = b[0].length;
  const result = [];

  for (let i = 0; i < m; i++) {
    const newRow = [];
    for (let j = 0; j < p; j++) {
      let sum = 0;
      for (let k = 0; k < n; k++) {
        sum += a[i][k] * b[k][j];
      }
      newRow.push(sum);
    }
    result.push(newRow);
  }

  return result;
}

// Main program logic
function main() {
  // ---------- PART A: Transpose ----------
  console.log("=== Part A: Transpose a Matrix ===");
  const rowsA = readlineSync.questionInt("Enter number of rows: ");
  const colsA = readlineSync.questionInt("Enter number of columns: ");
  const matrixA = readMatrix(rowsA, colsA);

  console.log("\nOriginal Matrix:");
  displayMatrix(matrixA);

  console.log("\nTransposed Matrix:");
  displayMatrix(transpose(matrixA));

  // ---------- PART B: Addition ----------
  console.log("\n=== Part B: Add Two Matrices ===");
  console.log(`Enter second matrix (must be ${rowsA} x ${colsA}):`);
  const matrixB = readMatrix(rowsA, colsA);

  console.log("\nSum of Matrices:");
  displayMatrix(addMatrices(matrixA, matrixB));

  // ---------- PART C: Multiplication ----------
  console.log("\n=== Part C: Multiply Two Matrices ===");
  console.log("Enter matrix C (rows must equal columns of first matrix):");
  const rowsC = readlineSync.questionInt("Enter number of rows: ");
  const colsC = readlineSync.questionInt("Enter number of columns: ");

  if (rowsC !== colsA) {
    console.log(`Error: Number of rows in second matrix (${rowsC}) must equal number of columns in first matrix (${colsA}).`);
    return;
  }

  const matrixC = readMatrix(rowsC, colsC);

  console.log("\nProduct of Matrices:");
  displayMatrix(multiplyMatrices(matrixA, matrixC));
}

main();