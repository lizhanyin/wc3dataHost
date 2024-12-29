
const TeamColors = [
  'Red',
  'Blue',
  'Teal',
  'Purple',
  'Yellow',
  'Orange',
  'Green',
  'Pink',
  'Gray',
  'Light Blue',
  'Dark Green',
  'Brown',
  'Maroon',
  'Navy',
  'Turquoise',
  'Violet',
  'Wheat',
  'Peach',
  'Mint',
  'Lavender',
  'Coal',
  'Snow',
  'Emerald',
  'Peanut',
  'Black',
];

const Cell = ({type: Type, value, comment}) => {
  comment = comment && comment.replace('\x1b', '\n');
  const cell = value == null || value == '' ? <Type title={comment}>&nbsp;</Type> : <Type title={comment}>{value.toString()}</Type>;
  return cell;
}

export { TeamColors, Cell };