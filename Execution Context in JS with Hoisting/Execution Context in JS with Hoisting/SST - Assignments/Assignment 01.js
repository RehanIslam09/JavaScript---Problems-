// =========================================
// =========================================
/*
    Question : 
        Write a function getType(value) that returns a string describing the JavaScript type of value, fixing the well-known typeof pitfalls:

        Distinguish null from "object".
        Detect arrays as "array" instead of "object".
        Return one of the following exact strings: "undefined" | "boolean" | "number" | "string" | "symbol" | "bigint" | "function" | "null" | "array" | "object".

        Notes:

        NaN should be reported as "number" (JavaScript treats NaN as a number).
        Typed arrays, dates, regexes, plain objects, etc., should all fall under "object" (except arrays, which must be "array").
*/
// =========================================
// =========================================

function getType(value) {
  if (value === null) return 'null';
  if (Array.isArray(value)) return 'array';
  const type = typeof value;
  if (
    type === 'undefined' ||
    type === 'boolean' ||
    type === 'number' ||
    type === 'string' ||
    type === 'symbol' ||
    type === 'bigint' ||
    type === 'function'
  ) {
    return type;
  }
  return 'object';
}

console.log(getType(null));
console.log(getType([1, 234, 23]));
console.log(getType(true));
