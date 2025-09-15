// Naming & Readability: Refactor Complex Logic
/*
Goal:
Rewrite with clear names and readable logic.
Make discount rules explicit in readable terms.*/
// bad code
function d(p, t) {
  if (t > 5 && p > 100) return p * 0.9;
  if (t > 10) return p * 0.85;
  return p;
}

// good code
const TEN_PERCENT_DISCOUNT = 1 - 0.1;
const FIFTEEN_PERCENT_DISCOUNT = 1 - 0.15;
const MIN_RATE_FOR_TEN_PERCENT_DISCOUNT = 5;
const MIN_PRICE_FOR_TEN_PERCENT_DISCOUNT = 100;
const MIN_RATE_FOR_FIFTEEN_PERCENT_DISCOUNT = 10;

function getDiscountedPrice(price, customerRate) {
  if (is10PercentDiscountApplicable(price, customerRate))
    return price * TEN_PERCENT_DISCOUNT;

  if (is15PercentDiscountApplicable(customerRate))
    return price * FIFTEEN_PERCENT_DISCOUNT;

  return price;
}

function is10PercentDiscountApplicable(price, customerRate) {
  return (
    customerRate > MIN_RATE_FOR_TEN_PERCENT_DISCOUNT &&
    price > MIN_PRICE_FOR_TEN_PERCENT_DISCOUNT
  );
}

function is15PercentDiscountApplicable(customerRate) {
  return customerRate > MIN_RATE_FOR_FIFTEEN_PERCENT_DISCOUNT;
}
