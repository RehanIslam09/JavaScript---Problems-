// =========================================
/*
    Question : 
        You are given the following JavaScript code:

            function testScopes() {
            console.log(a);
            console.log(b);

            var a = 1;
            let b = 2;

            {
                var c = 3;
                let d = 4;
                console.log(c);
                console.log(d);
            }

            console.log(c);
            console.log(d);
            }

            testScopes();

        Your Task:
        Implement a function analyzeScopes() that returns an array containing the values that the console.log statements in the above code would produce in order.

        If a console.log would cause a ReferenceError, add the string "ReferenceError" at that position in the array.
*/
// =========================================

function analyzeScopes() {
  return [
    undefined,
    'ReferenceError',
    3,
    4,
    3,
    'ReferenceError',
  ];
}
