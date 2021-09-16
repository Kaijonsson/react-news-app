const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "../build")));

app.listen(3000, () => console.log("listening to 3000"));

/**
 
 C:\Users\Axelj\Visual-Studio\arbetsprov\pinpoint\react-app
 
 C:\Users\Axelj\Visual-Studio\arbetsprov\pinpoint\react-app\build\static\css

 */
