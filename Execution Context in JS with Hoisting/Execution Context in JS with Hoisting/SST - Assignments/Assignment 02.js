// =========================================
/*
    Question : 
        Write a function safeAdd(a, b) that:
            Accepts two values (a and b) of any type.
            Returns their sum if they can be meaningfully added.
            If either value is not safely coercible to a number (except booleans), return NaN.
            Coercion Rules:
            Numeric strings should be converted to numbers before addition.
            Booleans should be treated as 1 (true) and 0 (false).
            null should be treated as 0.
            undefined or non-numeric strings (like "abc") should make the result NaN.
            If either value is an object/array, try to convert it to a primitive number. If that fails, return NaN.
*/
// =========================================

function safeAdd(a, b) {
  function toNumber(value) {
    if (typeof value === 'string') {
      const num = Number(value);
      return isNaN(num) ? NaN : num;
    }
    if (typeof value === 'boolean') return value ? 1 : 0;
    if (typeof value === 'null') return 0;
    if (typeof value === 'object') {
      try {
        const num = Number(value.valueOf());
        return isNaN(num) ? NaN : num;
      } catch {
        return NaN;
      }
    }
    return NaN;
  }

  const numA = toNumber(a);
  const numB = toNumber(b);

  if (isNaN(numA) || isNaN(numB)) return NaN;

  return numA + numB;
}

function safeAdd(a, b) {
  function toNumber(value) {
    if (typeof value === 'string') {
      const num = Number(value);
      return isNaN(num) ? NaN : num;
    }
    if (typeof value === 'boolean') return value ? 1 : 0;
    if (typeof value === 'null') return 0;
    if (typeof value === 'object') {
      try {
        const num = Number(value.valueOf());
        return isNaN(num) ? NaN : num;
      } catch {
        return NaN;
      }
    }
    return NaN;
  }
  const numA = toNumber(a);
  const numB = toNumber(b);

  if (numA === NaN || numB === NaN) {
    return NaN;
  }

  return numA + numB;
}

function safeAdd(a, b) {
  function toNumber(value) {
    if (typeof value === 'number') return value;
    if (value === null) return 0;
    if (typeof value === 'boolean') return value ? 1 : 0;
    if (typeof value === 'string') {
      const num = Number(value);
      return isNaN(num) ? NaN : num;
    }
    if (typeof value === 'object') {
      try {
        const num = Number(value.valueOf());
        return isNaN(num) ? NaN : num;
      } catch {
        return NaN;
      }
    }
    return NaN;
  }

  const numA = toNumber(a);
  const numB = toNumber(b);

  if (isNaN(numA) || isNaN(numB)) return NaN;
  return numA + numB;
}
