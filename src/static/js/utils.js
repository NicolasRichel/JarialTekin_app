
export function toGraqhqlInputString (obj) {
  return JSON.stringify(obj).replace(/(?<=({|,))"|"(?=:)/g, '');
};

export function addArrayElement (array, obj) {
  return array.concat([obj]);
};

export function updateArrayElement (array, obj, prop) {
  prop = prop ? prop : 'id';
  const i = array.findIndex(x => x[prop]===obj[prop]);
  return [ ...array.slice(0, i), obj, ...array.slice(i+1) ];
};

export function removeArrayElement (array, obj, prop) {
  prop = prop ? prop : 'id';
  return array.filter(x => x[prop]!==obj[prop]);
};
