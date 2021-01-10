const ADODB = require('node-adodb');


const connection_str = 'Provider=Microsoft.ACE.OLEDB.12.0;DataSource=c:\\Coffeebar\\SellPoint\\database\\bmDb.accdb;Persist Security Info=False;'
const connection = ADODB.open(connection_str);
const sql = 'SELECT productName from Products;';

function getAllProductsAsync() {
  console.log("connection_str="+connection_str);
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}


module.exports = { getAllProductsAsync };