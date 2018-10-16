
export function graqhqlInputString (obj) {
  return JSON.stringify(obj).replace(/(?<=({|,))"|"(?=:)/g, '');
};

export function updateArrayElement (array, obj, prop) {
  prop = prop ? prop : 'id';
  const index = array.findIndex(x => x[prop]===obj[prop]);
  return [ ...array.slice(0, index), obj, ...array.slice(index+1) ];
}
