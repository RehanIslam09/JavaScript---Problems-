// =========================================
/*
    Question : 
        Write a function isNullishEqual(a, b) that mimics JavaScript's loose equality (==) behavior only for checking if a and b are either null or undefined.

        Return:

        true if:
        Both are null
        Both are undefined
        One is null and the other is undefined
        false otherwise
        Example:

        isNullishEqual(null, undefined); // true
        isNullishEqual(undefined, null); // true
        isNullishEqual(null, null); // true
        isNullishEqual(undefined, undefined); // true
        isNullishEqual(0, null); // false
*/
// =========================================

function isNullishEqual(a, b) {
  return (a === undefined || a === null) && (b === null || b === undefined);
}
