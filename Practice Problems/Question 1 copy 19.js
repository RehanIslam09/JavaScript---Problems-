/*
  -----------
  Questions : 
  -----------
    Predict Output:
        What will be the output of the following code?
        console.log(a);
        var a = 10;
        Explain why.
*/

console.log("It'll return undefined.");

console.log(`
  🔹 Phase 1: Creation Phase (Hoisting)
        The engine scans through the code and hoists declarations (not initializations).
        For variables declared with var, only the declaration is hoisted — not the value.
   🔹 Phase 2: Execution Phase
        Now, line by line:
        console.log(a) → a exists but has value undefined
        Then a = 10 runs, assigning 10 to a
        ⚡ Therefore
        Output = undefined
  `);
