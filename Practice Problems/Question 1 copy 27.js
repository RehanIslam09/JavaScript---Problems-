/*
  -----------
  Questions : 
  -----------
    Block Scope with let:
      Create an example that demonstrates block scoping with let.
*/

function blockScopeExample() {
  let x = 10;
  console.log('Outside block:', x); //10

  {
    let x = 20; // inner x, block scoped
    console.log('Inside block:', x); //20
  }

  console.log('Outside block after block:', x); //10
}

blockScopeExample();

console.log(`
  Explanation:
    The first let x = 10 is declared in the function scope (outer scope).
    Inside the { ... } block, another let x = 20 is declared. This shadows the outer x but only inside the block.
    Inside the block, x refers to the inner variable (20).
    Outside the block, the block-scoped x is no longer accessible, so x refers back to the outer variable (10).

  Key takeaway:
    Variables declared with let are block-scoped, meaning they exist only within the {} block they are defined in.
    This is different from var, which is function-scoped and would leak outside the block.
  `);
