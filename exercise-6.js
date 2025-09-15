/*
 * Formatting: Group Related Logic
 * Goal:
 * Group similar concepts together (DB save vs email vs log).
 * Make function readable in terms of steps.

*/

// Bad Code
/*
 * function registerUser(u){db.save(u);sendEmail(u.email,"welcome");console.log("User saved");}
 */

// Good Code
function registerUser() {
  db.save(u);
  sendEmail(u.email, "welcome");

  console.log("User saved");
}
