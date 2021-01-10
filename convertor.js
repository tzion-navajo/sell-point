const path = require("node-adodb");
const fs = require("fs");

// write to a new file named 2pac.txt

const connection = path.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=c:\\Coffeebar\\SellPoint\\database\\bmDb.mdb;');


toJSON("makoletproducts.json","select * from Products;");

async function toJSON(filename,sql) {
  try {
    const data = await connection.query(sql);
    const dataString=JSON.stringify(data, null, 2);

    fs.writeFile('data/' + filename, dataString, (err) => {  
      if (err) throw err;
      console.log(filename + ' saved!');
  });
  } catch (error) {
    console.log(filename + ' error !');
    console.error(error);
  }
}