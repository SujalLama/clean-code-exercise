/*
 *Formatting: Horizontal & Vertical Alignment
 Goal:
- Apply horizontal formatting: line ≤120 chars, separate statements.
- Apply vertical formatting: loops, assignments, returns clearly separated.
*/

// Bad code

/*
  function calculateTotal(items){let total=0;for(let i=0;i<items.length;i++){total+=items[i].price;}return total;}

  */

// Good code

function calculateTotal(items) {
  let total = 0;

  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }

  return total;
}
