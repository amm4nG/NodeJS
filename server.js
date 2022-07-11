var express = require("express")
var mysql = require("mysql")

var app = express()
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "futsal"
})

app.set("view engine", "ejs")
app.set("views", "views")

db.connect((e) =>{
  if (e) throw e
})

//baca data dari database pada table admin
var sql = "select * from admin"
db.query(sql, (e, data) =>{
  //tampilkan data pada halaman console
  // console.log(data)
  //kirim data ke browser
  app.get("/", (req, res) =>{
    res.render("index", {users: data, title: "Ammang Code"})
  })
})

//komunikasi server dengan browser
//akses halaman localhost:8080
//app.listen(8080)
app.listen(8080, () =>{
  //penanda bahwa server siap digunakan
  console.log('Server ready....')
})











