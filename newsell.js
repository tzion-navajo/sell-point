const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
var fs = require('fs');

const fileName = "./MakoletProducts.json";

const app = express();

app.use(bodyParser.json());


function getOneProductAsync(id) {

  var obj = JSON.parse(fs.readFileSync(fileName, 'utf8'));
  //console.log(obj);

  for (var i = 0; i < obj.length; i++) {
    if (obj[i].barKod === id) {
      return obj[i];
    }
  }
  return "test";
}



app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "newsell.html"));
});

app.post("/add", (req, res) => {
  const { barcode } = req.body;
    res.send({
      result: getOneProductAsync(barcode)
    });
});



app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});


