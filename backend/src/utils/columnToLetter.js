export function columnToLetter(column) {
  let temp, letter = '';
  while (column >= 0) {
    temp = (column % 26);
    letter = String.fromCharCode(temp + 65) + letter;
    column = (column - temp - 1) / 26;
  }
  return letter;
}