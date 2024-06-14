const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/api/login", (req, res) => {
  console.log(req.body);
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
