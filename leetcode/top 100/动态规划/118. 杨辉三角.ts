function generate(numRows: number): number[][] {
  if (numRows === 1) {
    return [[1]];
  }

  if (numRows === 2) {
    return [[1], [1, 1]];
  }

  let preResult = generate(numRows - 1);
  let preTop = preResult[preResult.length - 1];

  let temp = [1];

  for (let i = 1; i < numRows - 1; i++) {
    temp[i] = preTop[i - 1] + preTop[i];
  }

  temp[temp.length] = 1;

  preResult.push(temp);
  return preResult;
}
