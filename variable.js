const accountId = 69
let accountEmail = "gautam@gmail.com"
var accountPassword = "gautam2005"
accountCity = "Kalyan"
let accountState;

// accountId = 74  not allowed 

accountEmail = "gautamsharma@gmail.com"
accountPassword = "2005gautam"
accountCity = "Delhi"

/*
Prefer not use var
because of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);