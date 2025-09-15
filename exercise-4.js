/*
Comments: Explain Regex Intent

Goal:
Add a clarifying comment explaining the format.
Ensure code remains readable without relying on comments.
*/

// bad code
const phRegex = /^\\d{3}-\\d{3}-\\d{4}$/;

// good code
// validates phone number in 000-000-0000 format
const phoneRegex = /^\\d{3}-\\d{3}-\\d{4}$/;
