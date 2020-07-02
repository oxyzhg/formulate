export * from './looseEqual';
export * from './transform';

/**
 * Perform no operation.
 */
export const noop = () => {};

/**
 * Always return false.
 */
export const no = () => false;

/**
 * Return same value.
 */
export const identity = _ => _;

const hasOwnProperty = Object.prototype.hasOwnProperty;
export const hasOwn = (val, key) => hasOwnProperty.call(val, key);

export const isArray = Array.isArray;
export const isString = val => typeof val === 'string';
export const isSymbol = val => typeof val === 'symbol';
export const isFunction = val => typeof val === 'function';
export const isObject = val => val !== null && typeof val === 'object';
export const isPromise = val => isObject(val) && isFunction(val.then) && isFunction(val.catch);

const ObjectToString = Object.prototype.toString;
export const toTypeString = value => ObjectToString.call(value);
export const toRawString = value => toTypeString(value).slice(8, -1);

export const isPlainObject = val => toTypeString(val) === '[object Object]';

export const toNumber = val => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
