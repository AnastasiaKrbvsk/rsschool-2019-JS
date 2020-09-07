module.exports = function towelSort (matrix) {
    if (!(Array.isArray(matrix)) || matrix === []) return [];
    let sortedMatrix = [];
    for (i = 0; i < matrix.length; i++) {
      if ( i % 2 === 0) {
        sortedMatrix = sortedMatrix.concat(matrix[i]);
      } else {
        sortedMatrix = sortedMatrix.concat(matrix[i].reverse());
      }
    }
    return sortedMatrix;
  }