const express = require("express"); 
const postRoute = require("./routes/post.route");
const authRoute = require("./routes/auth.route");


const app = express(); 

app.use("/api/posts", postRoute); 
app.use("/api/auth", authRoute); 

app.listen(4000, () => {
    console.log("Server is listening on port 4000")
})