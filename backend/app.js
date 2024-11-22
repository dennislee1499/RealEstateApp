const express = require("express"); 
const postRoute = require("./routes/post.route");

const app = express(); 

app.use("/api/posts", postRoute); 

app.listen(4000, () => {
    console.log("Server is listening on port 4000")
})