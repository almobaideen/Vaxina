
function userRegs(){
  var mysql      = require('mysql2');
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'My0566644754',
    database : 'user_regestration'
  });


  connection.connect();


  //var uaeid = document.getElementById("uaeid").value;
  //var userAddressAccount = document.getElementById("userAddressAccount").value;
  var uaeid = 784143338422447;
  var userAddressAccount = "0x387228cEF77793d0C8BdBfc6441C1090FA139E21";
  var qrd = "INSERT INTO user_regestration.useraccount(uaeid,userAddressAccount) VALUES (\""+uaeid+"\",\""+userAddressAccount+"\")";
  console.log(qrd);
  uaeid++;
  
  var v = connection.query(qrd);
  connection.end();
}

userRegs();